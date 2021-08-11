import {Component, Inject, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Server} from "@app/control/server.model";
import {ControlService} from "@app/control/service/control-service";
import {DOCUMENT} from '@angular/common';
import {ContainerService} from "@app/containers/service/container.service";
import {Container} from 'src/app/containers/model/container.model';

@Component({
  selector: 'app-navbar',
  templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {

  servers: Server[] = [
    {'name': 'Anton', id: 'dl', url: ''},
    {'name': 'ClearSmile', id: 'cs', url: ''},
    {'name': 'MobileAdmin', id: 'ma', url: ''},
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
    @Inject(DOCUMENT) private doc: Document,
    private cService: ContainerService
  ) {
  }

  ngOnInit() {
    this.service.setActiveServer(this.activeServer)
  }

  addContainer() {
    let c =
      {
        docId: "bebe",
        Image: "bigbro1221/mobileadmin-api:latest",
        Id: "a7cefbd9b1a7",
        Host: "ma",
        up: true,
        Changed: new Date(),
        Created: new Date(),
        RunCommand: {
          ExposedPorts: {
            "8080/tcp": {}
          },
          RestartPolicy: {
            "Name": "always"
          },
          PortBindings: {
            "8080/tcp": [
              {
                "HostPort": "9999"
              }
            ]
          },
          Image: "bigbro1221/mobileadmin-api:latest"
        }
      };
    return this.cService.save(Object.assign({}, c))
  }


}
