import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../../common/services/alert.service";
import {Router} from "@angular/router";

@Component({
    selector: 'auth-loginForm',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

  ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                response => {
                      this.alertService.success('Login Success');
                      this.router.navigate(['/']);
                      this.loading = true;
                },
                error => {
                    this.alertService.error('Login Failure');
                    this.model.password = '';
                    this.loading = false;
                });
        //this.authenticationService.getAuthInfoByToken();
    }
}
