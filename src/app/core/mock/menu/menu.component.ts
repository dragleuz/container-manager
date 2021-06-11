import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {

  servers = [
    {'name': 'ClearSmile', value: 'cs', url: ''},
    {'name': 'Anton', value: 'dl', url: ''},
  ]

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
  ) {
  }

  ngOnInit() {
  }

  setactiveItem(item: MenuItem) {
    this.activeItem = item;
  }

}
