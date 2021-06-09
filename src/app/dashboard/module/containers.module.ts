import {NgModule} from '@angular/core';
import {ContainersListComponent} from "../component/containers/containers-list.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContainersRoutingModule} from "./containers-routing.module";
import {ContainersComponent} from "../component/containers-component";
import {NavbarModule} from "../../core/mock/navbar/navbar-module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    TableModule,
    ButtonModule,
    RippleModule,


    ContainersRoutingModule,
    TooltipModule,
  ],
  exports: [],
  declarations: [
    ContainersListComponent,
    ContainersComponent,
  ],
  providers: [],
})
export class ContainersModule {
}