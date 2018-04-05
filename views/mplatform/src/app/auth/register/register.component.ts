import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";
import {AlertService} from "../../common/services/alert.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "../models/user";



@Component({
  selector: 'auth-regForm',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class RegisterComponent {
  loading = false;
  user: User = new User();
  public regForm:FormGroup;

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService) {
    this.regForm = new FormGroup({
      'loginId': new FormControl(this.user.loginId, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl(this.user.password,  Validators.required),
      'confirmPassword': new FormControl(this.user.confirmPassword, Validators.required),
      'email': new FormControl(this.user.email, Validators.required),
      'agree': new FormControl(this.user.agree)
    });
  }

  register() {
    this.loading = true;
    this.userService.create(this.user)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
