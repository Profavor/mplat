import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { DictionaryComponent } from './dictionary.component';
import { routing }       from './dictionary.routing';
import {AdminGuard} from "../../../auth";
import {AuthenticationService} from "../../../auth/services/authentication.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    DictionaryComponent
  ],
  providers: [
    AdminGuard, AuthenticationService
  ]
})
export class DictionaryModule {}
