import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "./services/authentication.service";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('access_token')) {
            // Admin 권한 체크

          if(this.authenticationService.loggedIn()){
            return true;
          }else{
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
            return false;
          }
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
