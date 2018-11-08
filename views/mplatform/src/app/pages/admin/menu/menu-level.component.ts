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
    @Input() menuId: string;

    @Output()
    selectEvent: EventEmitter<any> = new EventEmitter<any>();

    selectedLevel: number;
    menuObj: any = new Array();


  constructor(
    private alertService: AlertService,
    private menuService: MenuService,
    private translate: TranslateService) { }

    ngOnInit() {
      
    }

    ngAfterViewInit() {
     
    }

    setActive(index) {
      this.selectedLevel = index;
      this.menuId = this.menuObj.obj[this.selectedLevel].id;
      this.selectEvent.emit(
        this.menuId
      );
    }

    getMenuList() {
      if(this.level == 1) {
        this.menuService.getRootList().subscribe(
          response => {
            this.menuObj = response;
            if (!this.menuObj.success) {
              this.alertService.error(this.menuObj.message);
            }
            console.log(this.menuObj);
          },
          error => {
            console.log(error);
      });

     } else if(this.menuId != '') {
       console.log(this.menuId);
      this.menuService.getList(this.menuId).subscribe(
        response => {
          this.menuObj = response;
          if (!this.menuObj.success) {
            this.alertService.error(this.menuObj.message);
          }
          console.log(this.menuObj);
        },
        error => {
          console.log(error);
      });
    } else {
      this.menuObj = new Array();
    }
    }
}
