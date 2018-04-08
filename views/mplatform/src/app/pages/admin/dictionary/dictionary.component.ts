import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {AlertService} from "../../../common/services/alert.service";
declare var $ :any;

@Component({
  selector: 'dictionary',
  styleUrls: ['./dictionary.css'],
  templateUrl: './dictionary.html'
})
export class DictionaryComponent implements OnInit, AfterViewInit{
  @Input() popup: string;

  test:string = 'SYS0001';

  constructor(
    private alertService: AlertService) { }

    ngOnInit()
    {
     
    }

    ngAfterViewInit(){

    }
  }