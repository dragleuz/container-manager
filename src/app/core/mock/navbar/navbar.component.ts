import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {

  items: MenuItem[] = [
    {label: 'Containers', icon: 'pi pi-fw pi-home', routerLink: '/containers'},
    {label: 'Control', icon: 'pi pi-fw pi-cog',
    items: [
      {label: 'Switches', icon: 'pi pi-fw pi-check', routerLink: '/control/switches'},
      {label: 'Users', icon: 'pi pi-fw pi-user-edit', routerLink: '/control/users'}
    ]
    }
  ];

  activeItem: MenuItem = this.items[0];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  setactiveItem(item: MenuItem) {
    this.activeItem = item;
  }

}
