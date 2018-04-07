import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { routing }       from './pages.routing';

import { Pages } from './pages.component';
import {AuthGuard} from "../auth/auth.guard";
import {AuthenticationService} from "../auth/services/authentication.service";
import {HeaderComponent, LeftsideComponent, FooterComponent, HeaderMenuComponent} from "../common/layout";
import {MenuService} from "../common/layout/services/menu.service";

@NgModule({
  imports: [
    CommonModule, 
    routing,
    HttpClientModule
  ],
  declarations: [Pages, HeaderComponent, LeftsideComponent, FooterComponent, HeaderMenuComponent],
  providers: [AuthGuard, AuthenticationService, MenuService]
})
export class PagesModule {
}
