import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'menu-item',
  template: `
    <div *ngIf="menu.childMenu.length > 0" class="ui dropdown item">
      <div *ngFor="let lang of menu.dictionary.dictionaryLang"> 
        <label *ngIf="lang.lang == langCode">{{lang.message}} <i class="dropdown icon"></i> </label>
      </div>   
      <div class="menu">   
        <div *ngFor="let child of menu.childMenu">
          <menu-item [menu]="child" [langCode]="langCode"></menu-item> 
        </div>
      </div>
    </div>
    <div *ngIf="menu.childMenu.length == 0">
      <div *ngFor="let lang of menu.dictionary.dictionaryLang"> 
        <a class="item" *ngIf="lang.lang == langCode" routerLink="{{menu.path}}" routerLinkActive="active">{{lang.message}}</a>
      </div> 
    </div>
  `
})
export class MenuComponent implements OnInit, AfterViewInit{   

  @Input('menu') menu: any;
  @Input('langCode') langCode: string;

    constructor(
      ) {
 
      }

    ngOnInit() {  
      
    }

    ngAfterViewInit(){
      $('.ui.dropdown')
      .dropdown({
        transition: 'drop'
      });
    }
}