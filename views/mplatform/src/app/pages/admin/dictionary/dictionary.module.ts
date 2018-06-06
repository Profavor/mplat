import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryComponent } from './dictionary.component';
import { routing } from './dictionary.routing';
import {AdminGuard} from '../../../auth';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {SharedPipesModule} from '../../../common/pipes/shared-pipes.module';
@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedPipesModule
  ],
  declarations: [
    DictionaryComponent
  ],
  providers: [
    AdminGuard, AuthenticationService
  ]
})
export class DictionaryModule {}
