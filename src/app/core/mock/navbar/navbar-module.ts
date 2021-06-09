import {NgModule} from '@angular/core';
import {NavbarComponent} from "./navbar.component";
import {TabMenuModule} from "primeng/tabmenu";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [

    TabMenuModule,
    CommonModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class NavbarModule {
}
