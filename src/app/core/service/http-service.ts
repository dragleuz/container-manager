import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "@env/environment";


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private headers = new HttpHeaders()
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Methods', 'POST')
    .append('Access-Control-Allow-Origin', '*')
    .append('Content-Type', 'application/json')
    .append('Cache-control', 'no-cache');

  constructor(private http: HttpClient) {
  }

  public getServerUrl() {
    return environment.apiUrl;
    // return `${environment.root}:${environment.port}${environment.url}`;
  }

  exec(url: string): Observable<any> {
    return this.http.post(this.getServerUrl() + url, {}, {headers: this.headers});
  }


  get(url: string, opts?: any) {
    let options: { [k: string]: any };
    options = (opts ? opts : {});
    options.headers = this.headers;
    return this.http.get<any>(this.getServerUrl() + url, options);
  }
  put(data: any, url: string, opts?: any) {
    let options: { [k: string]: any };
    options = (opts ? opts : {});
    options.headers = this.headers;
    return this.http.put<any>(this.getServerUrl() + url, data, options);
  }
  patch(data: any, url: string, opts?: any) {
    let options: { [k: string]: any };
    options = (opts ? opts : {});
    options.headers = this.headers;
    return this.http.patch<any>(this.getServerUrl() + url, data, options);
  }
  delete( url: string, data?: any, opts?: any ): Observable<any> {
    let options: { [k: string]: any };
    options = (opts ? opts : {});
    options.headers = this.headers;
    return this.http.delete<any>(this.getServerUrl() + url, data);
  }
  post(data: any, url: string, opts?: any) {
    let options: { [k: string]: any };
    options = (opts ? opts : {});
    options.headers = this.headers;
    return this.http.post<any>(this.getServerUrl() + url, data, options);
  }

  async data(data: any, url: string, opts?: any) {
    let options: { [k: string]: any };
    options = (opts ? opts : {});
    options.headers = this.headers;
    const response = await this.http.post<any>(this.getServerUrl() + url, data, options)
      .toPromise()
      .catch(error => {
        if (error.status === 404) {
          // this.msg.err('Bad request URL: ' + url);
        }
      });
    // if(!response.success) this.msg.err(data.msg);
    return response;
  }

  postFile(data: FormData, url: string): Observable<any> {
    return this.http.post<any>(this.getServerUrl() + url, data, {
      reportProgress: true,
      observe: 'events',
    });
  }

  getFile(data: any, url: string): Observable<any> {
    return this.http.post(this.getServerUrl() + url, data, {
      reportProgress: true,
      responseType: 'blob'});
  }

  nvl(key: any, replacement?: any) {
    if (!(key) || key.length === 0) {
      return replacement ? replacement : null;
    } else
      return key;
  }
}
