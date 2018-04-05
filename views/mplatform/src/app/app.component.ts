import { Component } from '@angular/core';
import { GlobalState } from './global.state';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _state: GlobalState,
    translate: TranslateService) {
     // this language will be used as a fallback when a translation isn't found in the current language
     //translate.setDefaultLang('ko');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
     //translate.use('ko');
  }
}
