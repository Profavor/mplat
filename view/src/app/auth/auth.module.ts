import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth.routing";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthenticationService} from "./services/authentication.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "./services/user.service";
import {AlertService} from "../common/services/alert.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppTranslationModule} from "../app.translation.module";
@NgModule({
  declarations: [
    LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    AppTranslationModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService, UserService, AlertService
  ]
})
export class AuthModule { }
