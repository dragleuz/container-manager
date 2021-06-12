import {NgModule} from '@angular/core';
import {MenuComponent} from "./menu.component";
import {TabMenuModule} from "primeng/tabmenu";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {ProfileMenuComponent} from "@app/core/mock/profile-menu/profile-menu.component";
import {AvatarModule} from "primeng/avatar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";


@NgModule({
  imports: [
    TabMenuModule,
    CommonModule,
    MenubarModule,
    DropdownModule,
    FormsModule,
    AvatarModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    MenuComponent,
    ProfileMenuComponent,
  ],
  declarations: [
    MenuComponent,
    ProfileMenuComponent
  ],
  providers: [],
})
export class MenuModule {
}
