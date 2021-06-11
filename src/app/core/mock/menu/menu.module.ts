import {NgModule} from '@angular/core';
import {MenuComponent} from "./menu.component";
import {TabMenuModule} from "primeng/tabmenu";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  imports: [

    TabMenuModule,
    CommonModule,
    MenubarModule,
    DropdownModule
  ],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  providers: [],
})
export class MenuModule {
}
