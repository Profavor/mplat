import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth.routing";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthenticationService} from "./services/authentication.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "./services/user.service";
import {AlertService} from "../common/services/alert.service";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthenticationService, UserService, AlertService
  ]
})
export class AuthModule { }
