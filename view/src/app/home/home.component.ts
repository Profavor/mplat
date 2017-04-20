import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../auth/services/authentication.service";
import {Router} from "@angular/router";
import {AlertService} from "../common/services/alert.service";

@Component({
    templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],

})

export class HomeComponent implements OnInit {

    ngOnInit() {
    }

  loading = false;

  constructor(private authenticationService: AuthenticationService,  private router: Router,
              private alertService: AlertService){
  }

  public logout(): void{
    this.loading = true;
    this.authenticationService.logout();
  }

  public login(): void{
    this.loading = true;
    this.router.navigate(['/auth/login']);
  }


}
