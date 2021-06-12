import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Server} from "@app/control/server.model";
import {ControlService} from "@app/control/service/control-service";
import {AuthService} from "@auth0/auth0-angular";

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
    public auth: AuthService
  ) {
  }

  ngOnInit() {
    this.service.setActiveServer(this.activeServer)
  }


}
