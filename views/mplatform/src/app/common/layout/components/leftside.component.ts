import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router,  NavigationEnd, PRIMARY_OUTLET, UrlTree, UrlSegmentGroup, UrlSegment } from '@angular/router';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {MenuService} from '../services/menu.service';
import {AlertService} from "../../services/alert.service";

declare var $: any;


@Component({
  selector: 'left-side',
  templateUrl: 'leftside.component.html',
  styleUrls: ['leftside.component.css']
})
export class LeftsideComponent implements OnInit, AfterViewInit{
  sideMenu: any = new Array();
  langCode: string;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    private menuService: MenuService) {
      let _this = this;

      this.router.events.subscribe(function (s) {
        if (s instanceof NavigationEnd && s.urlAfterRedirects.startsWith("/pages/")) {
          _this.getMenuList(s.urlAfterRedirects);
        }
      });
  
  }

  getMenuList(url:string){
    const tree:UrlTree = this.router.parseUrl(url);
    const urlSegmentGroup:UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const urlSegment:UrlSegment[] = urlSegmentGroup.segments;

    this.langCode = localStorage.getItem('langCode');    
    this.menuService.getSideMenu(url).subscribe(
      response => {  
        this.sideMenu = response; 
        if(!this.sideMenu.success){
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

  ngAfterViewInit(){

  }

  logout(){
    this.authenticationService.logout();
  }
}
