import {Component, OnInit} from '@angular/core';
import {AuthModule, AuthService} from "@auth0/auth0-angular";

@Component({
  templateUrl: 'sign-in.component.html'
})

export class SignInComponent implements OnInit {
  constructor(
    public auth: AuthService
  ) {
  }

  ngOnInit() {
  }
}
