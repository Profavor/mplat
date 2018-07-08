import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AlertService} from './common/services';
import {ToastrModule} from 'ngx-toastr';
import {GlobalState} from './global.state';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import {PagesModule} from './pages/pages.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SharedPipesModule} from './common/pipes/shared-pipes.module';
import { JwtModule} from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/api/dictionary/', '.json');
}

const APP_PROVIDERS = [
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
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    SharedPipesModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        }
      }
    })
  ],
  providers: [APP_PROVIDERS, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
