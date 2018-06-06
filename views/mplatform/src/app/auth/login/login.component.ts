import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AlertService} from '../../common/services/alert.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {RegisterComponent} from '../register/register.component';

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User = new User();
  token: any = new Array();

  loginForm: FormGroup;

  loading = false;

  @ViewChild(RegisterComponent)
  public register: RegisterComponent;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {
    this.loginForm = new FormGroup({
      'loginId': new FormControl(this.user.loginId, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)]),
      'password':
        new FormControl(this.user.password, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)])
    });
  }

    ngOnInit() {
      this.authenticationService.logout();
    }

    login() {
      this.loading = true;
      this.authenticationService.login(this.user.loginId, this.user.password)
        .subscribe(
          response => {
            this.token = response;
            localStorage.setItem('access_token', this.token.access_token);
            localStorage.setItem('refresh_token', this.token.refresh_token);
            this.alertService.success('Login Success');
            this.router.navigate(['/']);
            this.loading = true;
          },
          error => {
            this.alertService.error('Login Failure');
            this.user.password = '';
            this.loading = false;
          });
    }
  }

