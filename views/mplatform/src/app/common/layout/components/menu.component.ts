import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {AuthenticationService} from '../../../auth/services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-menu-item',
  template: `
    <div *ngIf="menu.childMenu.length > 0" class="ui dropdown item">
      <div *ngFor="let lang of menu.dictionary.dictionaryLang">
        <label *ngIf="lang.lang == langCode">{{lang.message}} <i class="dropdown icon"></i> </label>
      </div>
      <div class="menu">
        <div *ngFor="let child of menu.childMenu">
          <app-menu-item [menu]="child" [langCode]="langCode"></app-menu-item>
        </div>
      </div>
    </div>
    <div *ngIf="menu.childMenu.length == 0">
    <div *ngFor="let role of menu.roles">
    <div *ngIf="roles.indexOf(role.roleId) > -1">
      <div *ngFor="let lang of menu.dictionary.dictionaryLang">
        <a class="item" *ngIf="lang.lang == langCode" routerLink="{{menu.path}}" routerLinkActive="active">{{lang.message}}</a>
      </div>
    </div>
    </div>
    </div>
  `
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input('menu') menu: any;
  @Input('langCode') langCode: string;

  roles: any = new Array();
    constructor(
      private authenticationService: AuthenticationService
      ) {
      }

    ngOnInit() {
      this.roles = this.authenticationService.decodeToken().authorities;
      console.log(this.roles);
    }

    ngAfterViewInit() {
      $('.ui.dropdown')
      .dropdown({
        transition: 'drop'
      });
    }
}
