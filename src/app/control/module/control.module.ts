import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MenuModule} from "../../core/mock/menu/menu.module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ControlRoutingModule} from "./control-routing.module";
import {ControlComponent} from "../component/control.component";
import {ControlServicesComponent} from "../component/services/control-services.component";
import {ControlUsersComponent} from "../component/users/control-users.component";
import {InputSwitchModule} from "primeng/inputswitch";
import {TooltipModule} from "primeng/tooltip";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {SkeletonModule} from "primeng/skeleton";
import {PanelModule} from "primeng/panel";
import {ScrollPanelModule} from "primeng/scrollpanel";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    TableModule,
    ButtonModule,
    RippleModule,


    ControlRoutingModule,
    InputSwitchModule,
    TooltipModule,
    CardModule,
    DividerModule,
    SkeletonModule,
    PanelModule,
    ScrollPanelModule,
  ],
  exports: [],
  declarations: [
    ControlComponent,
    ControlServicesComponent,
    ControlUsersComponent,
  ],
  providers: [],
})
export class ControlModule {
}
