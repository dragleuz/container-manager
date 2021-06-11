import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../../core/service/http-service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: 'control-services.component.html'
})

export class ControlServicesComponent implements OnInit, OnDestroy {
  subs: Subscription = new Subscription();
  logs = '';
  switches = [
    {label: 'Docker', service: 'docker', status: true},
    {label: 'Nginx', service: 'nginx', status: false},
  ]
  loaded = false;
  cols = ['Service', 'Status', 'Actions'];

  constructor(
    private http: HttpService,
  ) {
  }

  async ngOnInit() {
    await this.getService(0);
    await this.getService(1);
    this.loaded = true;
  }

  getService(serviceIdx: number) {
    return new Promise<void>(resolve => {
      this.subs.add(
        this.http.post(
          {command: `systemctl is-active ${this.switches[serviceIdx]['service']}`},
          'anton/exec', {responseType: 'text'})
          .subscribe(status => {
            this.switches[serviceIdx]['status'] = status == 'active';
            resolve();
          }))
    })
  }

  toggleService(service: any) {
    let action = service.status ? 'start' : 'stop';
    return new Promise(resolve => {
      this.subs.add(
        this.http.post({command: `systemctl ${action} ${service['service']}`}, 'anton/exec', {responseType: 'text'})
          .subscribe(data => {
            this.log(data);
          })
      )
    })
  }

  log(str: any) {
    this.logs = this.logs + str + '\n';
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
