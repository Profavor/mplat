import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {AlertService} from '../../../common/services/alert.service';
import {DictionaryService} from './dictionary.service';
declare var $: any;

export class Dictionary {
  dicId: string;
  message_ko: string;
  message_en: string;
  readonly: boolean;

  constructor () {
    this.dicId = '';
    this.message_en = '';
    this.message_ko = '';
    this.readonly = false;
  }
}

@Component({
  selector: 'app-dictionary',
  styleUrls: ['./dictionary.css'],
  templateUrl: './dictionary.html'
})

export class DictionaryComponent implements OnInit, AfterViewInit {
  dic: Dictionary = new Dictionary();
  dicList: any = new Array();
  dicObj: any = new Array();

  constructor(
    private alertService: AlertService,
    private dictionaryService: DictionaryService) { }

    ngOnInit() {
      this.dic = new Dictionary();
    }

    ngAfterViewInit() {
      this.getList();
    }

    getList() {
      this.dictionaryService.getDictionaryList().subscribe(
        response => {
          this.dicList = response;
          if (!this.dicList.success) {
            this.alertService.error(this.dicList.message);
          }
        },
        error => {
          console.log(error);
        });
    }

    showDictionary(dicId: string) {
      this.dic = new Dictionary();
      $('.modal')
        .modal('show')
      ;
      if (dicId !== '') {
        this.getDictionary(dicId);
      }
    }

    getDictionary(dicId: string) {
      this.dictionaryService.getDicionary(dicId).subscribe(
        response => {
          this.dicObj = response;
          if (!this.dicObj.success) {
            this.alertService.error(this.dicObj.message);
          }
          this.dic.dicId = this.dicObj.obj.dicId;
          const dicLang = this.dicObj.obj.dictionaryLang;
          for (let i = 0; i < dicLang.length; i++) {
            if (dicLang[i].lang === 'KO') {
              this.dic.message_ko = dicLang[i].message;
            } else if (dicLang[i].lang === 'EN') {
              this.dic.message_en = dicLang[i].message;
            }
          }
          this.dic.readonly = true;
        },
        error => {
          console.log(error);
    });
  }

  saveDictionary() {
    this.dictionaryService.saveDictionary(this.dic).subscribe(
      response => {
        this.dicList = response;
        if (!this.dicList.success) {
          this.alertService.error(this.dicList.message);
        }
        this.alertService.success('Success!!');
        this.getList();
      },
      error => {
        console.log(error);
      });
  }
}
