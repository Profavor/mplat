import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";
import {AlertService} from "../../common/services/alert.service";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'auth-regForm',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegisterComponent {
  model: any = {};
  loading = false;

  public form:FormGroup;

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService) {
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
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

  public onSubmit(values: Object): void {
    this.loading = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}
