import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../../common/services/alert.service";
import {Router} from "@angular/router";

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'auth-loginForm',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  closeResult: string;


  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private modalService: NgbModal,
              private alertService: AlertService) {
  }

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

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
