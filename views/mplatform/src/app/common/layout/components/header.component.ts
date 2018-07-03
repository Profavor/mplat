import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {MenuService} from '../services/menu.service';
import {AlertService} from '../../services/alert.service';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private menuService: MenuService,
    private alertService: AlertService,
    private location: Location,
    private router: Router
  ) {
  }

  topMenu: any = new Array();
  langCode: string = localStorage.getItem('langCode');

  ngOnInit() {
      this.getTopMenu();

      $('.ui.dropdown')
        .dropdown({
          transition: 'drop'
        });
  }

  setLanguage(lang: string) {
    localStorage.setItem('langCode', lang);
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
