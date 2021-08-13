import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from "@angular/common";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'profile-menu',
  templateUrl: 'profile-menu.component.html'
})

export class ProfileMenuComponent implements OnInit {
  profileJson: any = {};

  items: MenuItem[] = [
    {
      label: 'Profile',
      icon: 'pi pi-user'
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: _ => this.logout()
    },
  ]

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      profile => {
        this.profileJson = profile;
      }
    )
  }

  logout(): void {
    localStorage.clear();
    this.auth.logout({returnTo: this.doc.location.origin});
  }

}
