import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../../core/service/http.service";
import {Subscription} from "rxjs";
import {ControlService} from "../../service/control-service";
import {Server} from "../../server.model";

@Component({
  templateUrl: 'control-services.component.html'
})

export class ControlServicesComponent implements OnInit, OnDestroy {
  subs: Subscription = new Subscription();
  logs = '';
  switches = [
    {label: 'Docker', service: 'docker', status: false},
    {label: 'Nginx', service: 'nginx', status: false},
  ]
  loaded = false
  cols = ['Service', 'Status', 'Actions'];
  activeServer: Server = {};

  constructor(
    private http: HttpService,
    private controlService: ControlService
  ) {
    this.controlService.activeServer.subscribe(server => {
      this.activeServer = server;
      this.getServices();
    })
  }

  async ngOnInit() {
    await this.getServices();
  }

  async getServices() {
    this.loaded = false;
    await this.getService(1);
    await this.getService(0);
    this.loaded = true;
  }

  getService(serviceIdx: number) {
    return new Promise<void>(resolve => {
      this.subs.add(
        this.http.post(
          {host: this.activeServer.id, command: `systemctl is-active ${this.switches[serviceIdx]['service']}`},
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
        this.http.post({
          host: this.activeServer.id,
          command: `systemctl ${action} ${service['service']}`
        }, 'anton/exec', {responseType: 'text'})
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
