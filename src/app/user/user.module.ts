import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserRoutingModule} from "./user-routing.module";
import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: []
})
export class UserModule { // This module is being consumed via app-routing.module, is part of the /user path

}
