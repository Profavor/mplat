import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {MenuService} from '../services/menu.service';
import {AlertService} from '../../services/alert.service';
import { Location } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(
    private authenticationService: AuthenticationService,
    private menuService: MenuService,
    private alertService: AlertService,
    private location: Location,
    private router: Router,
    private translate: TranslateService
  ) {
  }

  topMenu: any = new Array();
  langCode: string = localStorage.getItem('langCode');

  ngOnInit() {
      this.getTopMenu();
  }

  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }

  setLanguage(lang: string) {
    localStorage.setItem('langCode', lang);
    this.translate.use(lang.toLocaleLowerCase());
    this.langCode = lang;
    this.router.navigated = false;
    this.router.navigateByUrl(this.router.url);
  }

  getTopMenu() {
    this.menuService.getTopMenu()
    .subscribe(
      response => {
        this.topMenu = response;
        if (!this.topMenu.success) {
          this.alertService.error(this.topMenu.message);
        }
      },
      error => {
        console.log(error);
      });
  }

  logout() {
    this.authenticationService.logout();
  }
}
