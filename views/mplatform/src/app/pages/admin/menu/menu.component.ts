import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {AlertService} from '../../../common/services/alert.service';
import {MenuService} from './menu.service';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.css'],
  templateUrl: './menu.html'
})

export class MenuComponent implements OnInit, AfterViewInit {
  menu1 = 'test1';

  constructor(
    private alertService: AlertService,
    private menuService: MenuService,
    private translate: TranslateService) { }

    ngOnInit() {

    }

    ngAfterViewInit() {
     
    }

}
