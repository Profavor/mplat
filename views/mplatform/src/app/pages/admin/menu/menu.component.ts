import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {AlertService} from '../../../common/services/alert.service';
import {MenuService} from './menu.service';
import {TranslateService} from '@ngx-translate/core';
import {MenuLevelComponent} from './menu-level.component';

declare var $: any;

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.css'],
  templateUrl: './menu.html'
})

export class MenuComponent implements OnInit, AfterViewInit {
  menuIdByLevel1 = '';
  menuIdByLevel2 = '';

  @ViewChild("level1")
  level1: MenuLevelComponent;

  @ViewChild("level2")
  level2: MenuLevelComponent;

  @ViewChild("level3")
  level3: MenuLevelComponent;

  constructor(
    private alertService: AlertService,
    private menuService: MenuService,
    private translate: TranslateService,
    private elementRef: ElementRef) { }

    ngOnInit() {
      this.level1.level = 1;
      this.level1.getMenuList();
    }

    ngAfterViewInit() {
     
    }

    selectLevel1(event) {
      this.level2.menuId = event;
      this.level2.selectedLevel = null;
      this.level2.getMenuList();
      this.level3.menuId = '';
      this.level3.selectedLevel = null;
      this.level3.getMenuList();
    }
    
    selectLevel2(event) {
      this.level3.menuId = event;
      this.level3.getMenuList();
    }
}
