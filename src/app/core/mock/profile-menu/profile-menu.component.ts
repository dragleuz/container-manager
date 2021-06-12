import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'profile-menu',
  templateUrl: 'profile-menu.component.html'
})

export class ProfileMenuComponent implements OnInit {
  profileJson: any = {};

  constructor(public auth: AuthService) {
  }

  img = 'https://avatars.githubusercontent.com/u/40654346?v=4';

  ngOnInit(): void {
    this.auth.user$.subscribe(
      profile => {
        this.profileJson = profile;
      }
    )
  }
}
