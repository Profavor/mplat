import {Component} from '@angular/core';
import {AlertService} from "../../common/services/alert.service";

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
 
  constructor(
    private alertService: AlertService) { }
  }