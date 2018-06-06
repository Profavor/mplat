import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeComponent } from './coffee.component';
import { routing } from './coffee.routing';
import {AuthGuard} from '../../auth/auth.guard';
import {AuthenticationService} from '../../auth/services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    CoffeeComponent
  ],
  providers: [
    AuthGuard, AuthenticationService
  ]
})
export class CoffeeModule {}
