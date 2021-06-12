import {Injectable} from '@angular/core';
import {FirestoreService} from "../../core/store/firestore-service";
import {Container} from "../model/container.model";

@Injectable({
  providedIn: 'root'
})
export class ContainerFirestore extends FirestoreService<Container> {
  protected basePath = 'containers';
}
