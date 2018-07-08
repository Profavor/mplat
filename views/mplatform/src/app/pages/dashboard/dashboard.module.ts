import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';
import {AuthGuard} from '../../auth/auth.guard';
import {AuthenticationService} from '../../auth/services/authentication.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    AuthGuard, AuthenticationService
  ]
})
export class DashboardModule {}
