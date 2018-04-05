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
  }

  topMenu: any = new Array();

  ngOnInit() {
    $('.menu .browse')
      .popup({
        inline     : true,
        hoverable  : true,
        position   : 'bottom left',
        delay: {
          show: 300,
          hide: 800
        }
      });

      this.getTopMenu();
      console.log(this.translate.getBrowserLang());
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
