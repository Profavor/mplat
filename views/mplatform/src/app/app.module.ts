import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AlertService} from "./common/services";
import {ToastrModule} from "ngx-toastr";
import {GlobalState} from "./global.state";
import { AppState, InternalStateType } from './app.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { routing } from './app.routing';
import {PagesModule} from "./pages/pages.module";
import {HttpModule} from '@angular/http';
import {TranslateModule} from '@ngx-translate/core';

const APP_PROVIDERS = [
  AppState,
  GlobalState
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    routing,
    PagesModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot()

  ],
  providers: [APP_PROVIDERS, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
