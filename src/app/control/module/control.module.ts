import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarModule} from "../../core/mock/navbar/navbar-module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ControlRoutingModule} from "./control-routing.module";
import {ControlComponent} from "../component/control.component";
import {ControlSwitchesComponent} from "../component/swtitches/control-switches.component";
import {ControlUsersComponent} from "../component/users/control-users.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    TableModule,
    ButtonModule,
    RippleModule,


    ControlRoutingModule,
  ],
  exports: [],
  declarations: [
    ControlComponent,
    ControlSwitchesComponent,
    ControlUsersComponent,
  ],
  providers: [],
})
export class ControlModule {
}
