import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "./services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('token')) {
            // logged in so return true
          if(this.authenticationService.loggedIn()){
            return true;
          }else{
            this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url }});
            return false;
          }
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
