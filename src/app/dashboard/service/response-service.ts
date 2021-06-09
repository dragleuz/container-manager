import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ResponseService implements HttpInterceptor {
  constructor(
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap((evt: any) => {
          if (evt.body?.message)
            this.showToast('success', evt.body.message);
        }),
        catchError(err => {
          return this.handleError(req, next, err);
        }),
      )
      ;
  }

  private handleError(req: HttpRequest<any>, next: HttpHandler, err: any): Observable<HttpEvent<any>> {
    if (err.error.message) this.showToast('danger', err.error.message);
    return next.handle(req);
  }

  private handleSucces(req: HttpRequest<any>, next: HttpHandler, err: any): Observable<HttpEvent<any>> {
    if (err.error.message) this.showToast('danger', err.error.message);
    return next.handle(req);
  }

  showToast(type: any, title: string, body?: string) {
    alert(title + ' ' + body)
  }
}
