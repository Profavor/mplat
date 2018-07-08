import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {AuthenticationService} from '../../../auth/services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-menu-item',
  template: `
    <div *ngIf="menu.childMenu.length > 0" class="ui dropdown item">
        <label {{menu.dictionary.dicId | translate}} <i class="dropdown icon"></label>
      <div class="menu">
        <div *ngFor="let child of menu.childMenu">
          <app-menu-item [menu]="child"></app-menu-item>
        </div>
      </div>
    </div>
    <div *ngIf="menu.childMenu.length == 0">
    <div *ngFor="let role of menu.roles">
    <div *ngIf="roles.indexOf(role.roleId) > -1">
        <a class="item" routerLink="{{menu.path}}" routerLinkActive="active">{{menu.dictionary.dicId | translate}}</a>
    </div>
    </div>
    </div>
  `
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input() menu: any;

  roles: any = new Array();
    constructor(
      private authenticationService: AuthenticationService
      ) {
      }

    ngOnInit() {
      this.roles = this.authenticationService.decodeToken().authorities;
    }

    ngAfterViewInit() {
      $('.ui.dropdown')
      .dropdown({
        transition: 'drop'
      });
    }
}
