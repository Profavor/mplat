import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';

import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import {AlertService} from "./common/services/alert.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {AuthGuard} from "./auth/auth.guard";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {AuthenticationService} from "./auth/services/authentication.service";
import {GlobalState} from "./global.state";
import {NgaModule} from "./theme/nga.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PagesModule} from "./pages/pages.module";
import { routing } from './app.routing';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => sessionStorage.getItem('token')),
    globalHeaders: [{'Content-Type':'application/json; charset=utf-8'}],
  }), http, options);
}

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};
@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing

  ],
  providers: [AlertService, AuthGuard, AuthenticationService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }, APP_PROVIDERS
  ],
  bootstrap: [App],
})
export class AppModule { }
