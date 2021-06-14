import {Component, Inject, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Server} from "@app/control/server.model";
import {ControlService} from "@app/control/service/control-service";
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {

  servers: Server[] = [
    {'name': 'Anton', id: 'dl', url: ''},
    {'name': 'ClearSmile', id: 'cs', url: ''},
  ]

  activeServer: Server = this.servers[0];

  items: MenuItem[] = [
    {label: 'Containers', icon: 'pi pi-fw pi-home', routerLink: '/containers'},
    {
      label: 'Control', icon: 'pi pi-fw pi-cog',
      items: [
        {label: 'Services', icon: 'pi pi-fw pi-check', routerLink: '/control/services'},
        {label: 'Users', icon: 'pi pi-fw pi-user-edit', routerLink: '/control/users'}
      ]
    }
  ];

  constructor(
    public service: ControlService,
    @Inject(DOCUMENT) private doc: Document
  ) {
  }

  ngOnInit() {
    this.service.setActiveServer(this.activeServer)
  }


}
