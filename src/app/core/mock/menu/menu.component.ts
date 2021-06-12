import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Server} from "../../../control/server.model";
import {ControlService} from "../../../control/service/control-service";

@Component({
  selector: 'app-navbar',
  templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {

  servers: Server[] = [
    {'name': 'ClearSmile', id: 'cs', url: ''},
    {'name': 'Anton', id: 'dl', url: ''},
  ]

  activeServer: Server = this.servers[0];

  items: MenuItem[] = [
    {label: 'Containers', icon: 'pi pi-fw pi-home', routerLink: '/containers'},
    {label: 'Control', icon: 'pi pi-fw pi-cog',
    items: [
      {label: 'Services', icon: 'pi pi-fw pi-check', routerLink: '/control/services'},
      {label: 'Users', icon: 'pi pi-fw pi-user-edit', routerLink: '/control/users'}
    ]
    }
  ];

  activeItem: MenuItem = this.items[0];

  constructor(
    public service: ControlService,
  ) {
  }

  ngOnInit() {
    this.service.setActiveServer(this.activeServer)
  }


}
