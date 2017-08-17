import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
