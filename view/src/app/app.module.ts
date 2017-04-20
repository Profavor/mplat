import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing";
import {AlertService} from "./common/services/alert.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {AuthGuard} from "./auth/auth.guard";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {AuthenticationService} from "./auth/services/authentication.service";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => sessionStorage.getItem('token')),
    globalHeaders: [{'Content-Type':'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [AlertService, AuthGuard, AuthenticationService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
