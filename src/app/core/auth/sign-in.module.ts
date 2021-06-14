import {NgModule} from '@angular/core';

import {SignInComponent} from './component/sign-in.component';
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {SignInRoutingModule} from "./sign-in-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,

    SignInRoutingModule,
  ],
  exports: [

  ],
  declarations: [SignInComponent],
  providers: [],
})
export class SignInModule {
}
