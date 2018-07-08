import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    translate: TranslateService) {
      localStorage.setItem('langCode', translate.getBrowserLang().toUpperCase());
     // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('ko');
  }
}
