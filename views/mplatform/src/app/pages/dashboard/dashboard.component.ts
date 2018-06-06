import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../common/services/alert.service';

declare var $: any;
declare function videojs(id: any, options: any, ready: any): any;


@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.css'],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
  public videos = ['http://vjs.zencdn.net/v/oceans.mp4'];

  constructor(
    private alertService: AlertService) { }

    ngOnInit() {
      $('.tabular.menu .item').tab();

      $('.ui.dropdown')
      .dropdown({
        useLabels: false
      });
    }
  }
