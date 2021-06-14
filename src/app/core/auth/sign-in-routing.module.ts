import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./component/sign-in.component";

const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class  SignInRoutingModule {
}
