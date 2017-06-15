import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import {AuthGuard} from "../auth/auth.guard";
import {AuthenticationService} from "../auth/services/authentication.service";

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages],
  providers: [AuthGuard, AuthenticationService]
})
export class PagesModule {
}
