import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';
import {AuthGuard} from '../../auth/auth.guard';
import {AuthenticationService} from '../../auth/services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    AuthGuard, AuthenticationService
  ]
})
export class DashboardModule {}
