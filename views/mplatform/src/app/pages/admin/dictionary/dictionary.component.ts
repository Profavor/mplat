import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../common/services/alert.service";
declare var $ :any;

@Component({
  selector: 'dictionary',
  styleUrls: ['./dictionary.css'],
  templateUrl: './dictionary.html'
})
export class DictionaryComponent implements OnInit{
 
  constructor(
    private alertService: AlertService) { }

    ngOnInit()
    {
     
    }
  }