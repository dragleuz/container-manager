import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContainersComponent} from "../component/dashboard/containers/containers.component";
import {DashboardComponent} from "../component/dashboard/dashboard-component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard'},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: 'containers', pathMatch: 'full'},
      {path: 'containers', component: ContainersComponent},
      {path: '**', redirectTo: 'containers', pathMatch: 'full'},
    ]
  },
  {path: '**', redirectTo: 'dashboard'},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class CoreRoutingModule {
}
