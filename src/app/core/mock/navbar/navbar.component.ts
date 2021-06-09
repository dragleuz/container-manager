import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {

  items: MenuItem[] = [
    {label: 'Containers', icon: 'pi pi-fw pi-home', url: 'containers'},
    {label: 'Control', icon: 'pi pi-fw pi-cog',
    items: [
      {label: 'Switches', icon: 'pi pi-fw pi-check', url: 'control/switches'},
      {label: 'Users', icon: 'pi pi-fw pi-user-edit', url: 'control/users'}
    ]
    }
  ];

  activeItem: MenuItem = this.items[0];

  constructor() {
  }

  ngOnInit() {
  }

  setactiveItem(item: MenuItem) {
    this.activeItem = item;
  }
}
