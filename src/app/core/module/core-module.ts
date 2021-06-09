import {NgModule} from '@angular/core';
import {ImagesComponent} from "../component/dashboard/images/images.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreRoutingModule} from "./core-routing.module";
import {DashboardComponent} from "../component/dashboard/dashboard-component";
import {NavbarModule} from "../mock/navbar/navbar-module";
import {TableModule} from "primeng/table";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    NavbarModule,
    TableModule
  ],
  exports: [],
  declarations: [
    ImagesComponent,
    DashboardComponent,
  ],
  providers: [],
})
export class CoreModule {
}
