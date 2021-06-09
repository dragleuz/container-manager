import {NgModule} from '@angular/core';
import {ContainersComponent} from "../component/dashboard/containers/containers.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreRoutingModule} from "./core-routing.module";
import {DashboardComponent} from "../component/dashboard/dashboard-component";
import {NavbarModule} from "../mock/navbar/navbar-module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    TableModule,
    ButtonModule,
    RippleModule,


    CoreRoutingModule,
  ],
  exports: [],
  declarations: [
    ContainersComponent,
    DashboardComponent,
  ],
  providers: [],
})
export class CoreModule {
}
