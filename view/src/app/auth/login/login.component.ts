import {Component, OnInit, ViewChild} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../../common/services/alert.service";
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {User} from "../models/user";
import {RegisterComponent} from "../register/register.component"

export interface IContext {
  data:string;
}

@Component({
  selector: 'auth-loginForm',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  user:User = new User();

  loginForm: FormGroup;

  loading = false;

  @ViewChild('modalTemplate')
  public modalTemplate:ModalTemplate<IContext, string, string>;

  @ViewChild(RegisterComponent)
  public register: RegisterComponent;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              public modalService:SuiModalService) {
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

    ngOnInit()
    {
      this.authenticationService.logout();
    }

    login()
    {
      this.loading = true;
      this.authenticationService.login(this.user.loginId, this.user.password)
        .subscribe(
          response => {
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

  public open(dynamicContent:string = "Example") {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = "closed!";
    config.context = { data: dynamicContent };

    this.modalService
      .open(config)
      .onApprove(result => {
          console.log(this.register);
      })
      .onDeny(result => { /* deny callback */});
  }
  }

