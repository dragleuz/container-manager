import {Injectable} from '@angular/core';
import {ContainerFirestore} from '../store/container-firestore.service';
import {ContainerPageFirestore} from '../store/container-page-firestore.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Container} from "../model/container.model";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(
    private firestore: ContainerFirestore,
    private store: ContainerPageFirestore
  ) {
    this.firestore.collection$().pipe(
      tap(containers => {
        this.store.patch({
          loading: false,
          containers,
        }, `Containers collection subscription`);
      })
    ).subscribe();
  }


  getContainer$(id: string): Observable<Container> {
    return this.firestore.doc$(id);
  }

  get containers$(): Observable<Container[]> {
    return this.store.state$.pipe(map(state => state.loading
      ? []
      : state.containers
      )
    );
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading));
  }
  get formStatus$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.formStatus));
  }

  save(container: Container, id?: string): Promise<void> {
    let msg = 'Container ' + (id ? 'update' : 'create') + ' ';
    this.store.patch({
      loading: true,
      containers: [],
      formStatus: 'Saving container...'
    }, msg);
    return this.firestore.save(container, id).then(_ => {
      this.store.patch({
        formStatus: 'Container Saved!'
      }, msg + 'SUCCESS');
      this.store.patch({
        formStatus: ''
      }, msg + 'timeout reset formStatus');
    }).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, msg + 'ERROR');
    });
  }

  delete(id: string): Promise<void> {
    this.store.patch({loading: true, containers: []}, 'container delete');
    return this.firestore.delete(id).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, 'Container delete ERROR');
    });
  }

}
