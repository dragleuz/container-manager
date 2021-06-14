import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpService} from "@app/core/service/http.service";

@Injectable({providedIn: 'root'})
export class OrgService {

  orgMembers$: BehaviorSubject<any> = new BehaviorSubject<any[]>([])
  _orgMembers$: Observable<any[]> = this.orgMembers$.asObservable();

  constructor(
    private http: HttpService
  ) {
  }

  get orgMembers(): Observable<any> {
    return this._orgMembers$;
  }

  setOrg() {
    this._orgMembers$ = (this.http.get('org_users'));
  }

}
