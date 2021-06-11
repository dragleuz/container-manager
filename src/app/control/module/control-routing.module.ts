import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ControlComponent} from "../component/control.component";
import {ControlServicesComponent} from "../component/services/control-services.component";
import {ControlUsersComponent} from "../component/users/control-users.component";

const routes: Routes = [
  {
    path: '', component: ControlComponent, children: [
      {path: '', redirectTo: 'services', pathMatch: 'full'},
      {path: 'services', component: ControlServicesComponent, pathMatch: 'full'},
      {path: 'users', component: ControlUsersComponent, pathMatch: 'full'},
      {path: '**', redirectTo: 'services', pathMatch: 'full'},
    ]
  },
  {path: '**', redirectTo: ''},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class ControlRoutingModule {
}
