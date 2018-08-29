import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {AlertService} from '../../../common/services/alert.service';
import {MenuService} from './menu.service';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-menu-level',
  styleUrls: ['./menu-level.css'],
  templateUrl: './menu-level.html'
})

export class MenuLevelComponent implements OnInit, AfterViewInit {
    @Input() title: any;
    @Input() level: number;

  constructor(
    private alertService: AlertService,
    private menuService: MenuService,
    private translate: TranslateService) { }

    ngOnInit() {

    }

    ngAfterViewInit() {
     
    }

}
