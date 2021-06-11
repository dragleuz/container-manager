import {NgModule} from '@angular/core';
import {ContainersListComponent} from "../component/containers/containers-list.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContainersRoutingModule} from "./containers-routing.module";
import {ContainersComponent} from "../component/containers-component";
import {MenuModule} from "../../core/mock/menu/menu.module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";
import {SkeletonModule} from "primeng/skeleton";
import {TimelineModule} from "primeng/timeline";
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {ScrollPanelModule} from "primeng/scrollpanel";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    ButtonModule,
    RippleModule,


    ContainersRoutingModule,
    TooltipModule,
    SkeletonModule,
    TimelineModule,
    CardModule,
    PanelModule,
    ScrollPanelModule,
    TableModule,
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
