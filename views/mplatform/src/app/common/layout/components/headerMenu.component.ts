import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'header-menu',
  template: `
    <div *ngIf="menu.childMenu.length > 0" class="ui dropdown item">
      <div *ngFor="let lang of menu.dictionary.dictionaryLang"> 
        <label *ngIf="lang.lang == langCode">{{lang.message}} <i class="dropdown icon"></i> </label>
      </div>      
      <div class="menu" *ngFor="let child of menu.childMenu">
      <div *ngIf="child.childMenu.length > 0"> 
        <header-menu [menu]="child" [langCode]="langCode"></header-menu>
      </div>
        <div *ngIf="child.childMenu.length == 0">
          <div *ngFor="let lang of child.dictionary.dictionaryLang">
            <a class="item" *ngIf="lang.lang == langCode" >{{lang.message}}</a>  
          </div>  
        </div>     
      </div>
    </div>
    <div *ngIf="menu.childMenu.length ==0">
      <div *ngFor="let lang of menu.dictionary.dictionaryLang"> 
        <a class="item" *ngIf="lang.lang == langCode">{{lang.message}}</a>
      </div> 
    </div>
  `
})
export class HeaderMenuComponent implements OnInit, AfterViewInit{   

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