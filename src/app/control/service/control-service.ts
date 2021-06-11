import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Server} from "../server.model";

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private activeServer$: BehaviorSubject<Server> = new BehaviorSubject<Server>({})
  _activeServer$: Observable<Server> = this.activeServer$.asObservable();

  get activeServer() {
    return this._activeServer$;
  }

  setActiveServer(server: Server) {
    this.activeServer$.next(server);
  }
}
