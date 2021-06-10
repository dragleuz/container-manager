import {Injectable} from '@angular/core';
import {ContainerPage} from "../model/container-page.model";
import {Container} from "@angular/compiler/src/i18n/i18n_ast";
import {StoreService} from "../../core/store/store-service";

@Injectable({
  providedIn: 'root'
})
export class ContainerPageFirestore extends StoreService<ContainerPage> {
  protected store = 'containers_page';

  constructor() {
    super({
      loading: true,
      containers: [],
      container: Container
    });
  }
}
