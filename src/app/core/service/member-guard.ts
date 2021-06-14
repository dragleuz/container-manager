import {Injectable} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {combineLatest, Observable} from 'rxjs';
import {HttpService} from "./http.service";
import {map, tap} from "rxjs/operators";
import {CanActivate} from "@angular/router";
import {OrgService} from "@app/core/org/org.service";

@Injectable({providedIn: 'root'})
export class MemberGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private http: HttpService,
    private orgService: OrgService
  ) {
  }

  canActivate(): Observable<boolean> {
    return combineLatest([
      this.authService.user$, this.orgService.orgMembers
    ]).pipe(
      map(([user, members]) => {
        return members.filter((m: any) => {
          return m.login == user?.nickname
        }).length > 0;
      }),
      tap(allowed => {
        !allowed ? this.authService.logout() : null;
      })
    )
  }

}
