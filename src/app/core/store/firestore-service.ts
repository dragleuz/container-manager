import {AngularFirestore, QueryFn} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {AngularFirestoreCollection} from '@angular/fire/firestore/collection/collection';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class FirestoreService<T> {

  protected abstract basePath: string;

  constructor(
    private firestore: AngularFirestore,
  ) {

  }

  doc$(id: string): Observable<T> {
    return this.firestore.doc<T>(`${this.basePath}/${id}`).valueChanges().pipe(
      tap((r: any) => {
        if (!environment.production) {
          // console.groupCollapsed(`Firestore Streaming [${this.basePath}] [doc$] ${id}`);
          // console.log(r);
          // console.groupEnd();
        }
      }),
    );
  }

  collection$(queryFn?: QueryFn): any {
    return this.firestore.collection<T>(`${this.basePath}`, queryFn).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }),
      tap(r => {
        if (!environment.production) {
          console.groupCollapsed(`Firestore Streaming [${this.basePath}] [collection$]`);
          console.table(r);
          console.groupEnd();
        }
      }),
    );
  }

  save(value: T, docId?: string): Promise<void> {
    let object = Object.assign(Object.assign({}, {docId}, value));
    object.id = docId;
    return this.collection.doc(docId).set(object, {merge: !!docId}).then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [create]`);
        console.log('[Id]', docId, value);
        console.groupEnd();
      }
    });
  }

  delete(id: string): Promise<void> {
    return this.collection.doc(id).delete().then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [delete]`);
        console.log('[Id]', id);
        console.groupEnd();
      }
    });
  }

  private get collection(): AngularFirestoreCollection<any> {
    return this.firestore.collection(`${this.basePath}`);
  }
}
