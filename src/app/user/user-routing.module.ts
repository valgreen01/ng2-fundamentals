import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile.component";

export const userRoutes: Routes = [
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
