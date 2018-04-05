import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {MenuService} from "../services/menu.service";
import {AlertService} from "../../services/alert.service";
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private menuService: MenuService,
    private alertService: AlertService,
    private translate: TranslateService
  ) {
    this.langCode = this.translate.getBrowserLang().toUpperCase();
  }

  topMenu: any = new Array();
  langCode: string;

  ngOnInit() {
      this.getTopMenu();

      $('.ui.dropdown')
        .dropdown({
          transition: 'drop'
        });
  }
  getTopMenu(){
    this.menuService.getTopMenu()
    .subscribe(
      response => {  
        this.topMenu = response; 
        console.log(this.topMenu);
        if(!this.topMenu.success){
          this.alertService.error(this.topMenu.message);
        }
      },
      error => {
        console.log(error);
      });
  }

  logout(){
    this.authenticationService.logout();
  }
}
