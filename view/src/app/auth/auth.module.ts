import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth.routing";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthenticationService} from "./services/authentication.service";
import {UserService} from "./services/user.service";
import {AlertService} from "../common/services/alert.service";
import {EqualValidator} from "../common/directives/equal-validator.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppTranslationModule} from "../app.translation.module";
import {MdCardModule,MdInputModule,MdButtonModule,MdCheckboxModule} from '@angular/material';
import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    LoginComponent, RegisterComponent, EqualValidator
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    AppTranslationModule,
    ReactiveFormsModule,
    SuiModule,
    MdCardModule,MdInputModule,MdButtonModule,MdCheckboxModule
  ],
  providers: [
    AuthenticationService, UserService, AlertService
  ]
})
export class AuthModule { }
