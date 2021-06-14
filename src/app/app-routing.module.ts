import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {path: '', redirectTo: 'containers', pathMatch: 'full'},
  {path: 'containers', canActivate: [AuthGuard], loadChildren: () => import('@app/containers/module/containers.module').then(m => m.ContainersModule)},
  {path: 'control', canActivate: [AuthGuard], loadChildren: () => import('@app/control/module/control.module').then(m => m.ControlModule)},
  {path: '**', redirectTo: 'containers', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
