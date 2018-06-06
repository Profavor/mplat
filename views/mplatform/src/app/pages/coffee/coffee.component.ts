import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AlertService} from '../../common/services/alert.service';
declare var $: any;

@Component({
  selector: 'app-coffee',
  styleUrls: ['./coffee.css'],
  templateUrl: './coffee.html'
})
export class CoffeeComponent implements OnInit, AfterViewInit {
  constructor(
    private alertService: AlertService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $('.ui.dropdown')
      .dropdown()
    ;
  }
}
