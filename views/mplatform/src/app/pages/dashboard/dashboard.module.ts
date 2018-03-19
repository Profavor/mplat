import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';
import {AuthGuard} from "../../auth/auth.guard";
import {AuthenticationService} from "../../auth/services/authentication.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    Dashboard
  ],
  providers: [
    AuthGuard, AuthenticationService
  ]
})
export class DashboardModule {}
