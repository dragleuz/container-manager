import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ControlComponent} from "../component/control.component";
import {ControlSwitchesComponent} from "../component/swtitches/control-switches.component";
import {ControlUsersComponent} from "../component/users/control-users.component";

const routes: Routes = [
  {
    path: '', component: ControlComponent, children: [
      {path: '', redirectTo: 'switches', pathMatch: 'full'},
      {path: 'switches', component: ControlSwitchesComponent, pathMatch: 'full'},
      {path: 'users', component: ControlUsersComponent, pathMatch: 'full'},
      {path: '**', redirectTo: 'switches', pathMatch: 'full'},
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
