import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContainersListComponent} from "../component/containers/containers-list.component";
import {ContainersComponent} from "../component/containers-component";

const routes: Routes = [
  {
    path: '', component: ContainersComponent, children: [
      {path: '', component: ContainersListComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'},
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
export class ContainersRoutingModule {
}
