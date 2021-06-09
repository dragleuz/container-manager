import {NgModule} from '@angular/core';
import {NavbarComponent} from "./navbar.component";
import {TabMenuModule} from "primeng/tabmenu";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";


@NgModule({
  imports: [

    TabMenuModule,
    CommonModule,
    MenubarModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class NavbarModule {
}
