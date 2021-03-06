import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router,  NavigationEnd, PRIMARY_OUTLET, UrlTree, UrlSegmentGroup, UrlSegment } from '@angular/router';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {MenuService} from '../services/menu.service';
import {AlertService} from '../../services/alert.service';

declare var $: any;


@Component({
  selector: 'app-leftside',
  templateUrl: 'leftside.component.html',
  styleUrls: ['leftside.component.css']
})
export class LeftsideComponent implements OnInit, AfterViewInit {
  sideMenu: any = new Array();
  langCode: string;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    private menuService: MenuService) {
  }

  getMenuList(url: string) {
    const tree: UrlTree = this.router.parseUrl(url);
    const urlSegmentGroup: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const urlSegment: UrlSegment[] = urlSegmentGroup.segments;

    this.langCode = localStorage.getItem('langCode');
    this.menuService.getSideMenu(url).subscribe(
      response => {
        this.sideMenu = response;
        if (!this.sideMenu.success) {
          this.alertService.error(this.sideMenu.message);
        }
      },
      error => {
        console.log(error);
        this.alertService.error(error);
      });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }

  logout() {
    this.authenticationService.logout();
  }
}
