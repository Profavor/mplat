import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService,  private router: Router) { }
    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

  public logout(): void{
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }

  public login(): void{
    this.router.navigate(['/auth/login']);
  }
}
