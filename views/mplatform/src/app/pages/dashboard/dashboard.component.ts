import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../common/services/alert.service";
declare var $ :any;

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.css'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit{
 
  constructor(
    private alertService: AlertService) { }

    ngOnInit()
    {
      $('.tabular.menu .item').tab();

      $('.ui.dropdown')
      .dropdown({
        useLabels: false
      });
    }
  }