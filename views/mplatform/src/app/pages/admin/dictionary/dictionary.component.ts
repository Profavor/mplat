import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {AlertService} from '../../../common/services/alert.service';
import {DictionaryService} from './dictionary.service';
import {TranslateService} from '@ngx-translate/core';

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
  selectedValue: any = new Array();
  p: Number = 0;
  pageSize: Number = 5;
  totalCount: Number = 0;
  message = '';

  constructor(
    private alertService: AlertService,
    private dictionaryService: DictionaryService,
    private translate: TranslateService) { }

    ngOnInit() {
      this.dic = new Dictionary();
    }

    ngAfterViewInit() {
      this.getList();

      $('#allCheck')
        .checkbox({
          // check all children
          onChecked: function() {
           const $childCheckbox  = $('.checkbox');
           $childCheckbox.checkbox('check');
          },
          // uncheck all children
          onUnchecked: function() {
            const $childCheckbox  = $('.checkbox');
            $childCheckbox.checkbox('uncheck');
          }
      });
    }

    onPageChange(e)  {
      this.getList();
    }

    search(e) {
      if (e.key === "Enter") {
        this.getList();
      }      
    }

    getList() {
      console.log(this.message);
      this.dictionaryService.getDictionaryList(this.message, this.pageSize, this.p).subscribe(
        response => {
          this.dicList = response;
          if (!this.dicList.success) {
            this.alertService.error(this.dicList.message);
          }
          this.dicList = this.dicList.obj;
          this.pageSize = this.dicList.size;
          this.totalCount = this.dicList.totalElements;
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
        let message = '';
        this.translate.get('SUCCESSMSG').subscribe((res: string) => {
          message = res;
        });
        this.dicObj = response;
        if (!this.dicObj.success) {
          this.alertService.error(this.dicObj.message);
        } else {
          this.alertService.success(message);
          this.getList();
          $('.modal').modal('hide');
        }
      },
      error => {
        console.log(error);
      });
  }

  deleteDictionary() {
    let message = '';
    this.selectedValue = new Array();
    const array = new Array();
    $('input[name=checkedValue]:checked').each(function() {
      array.push($(this).val());
    });
    this.selectedValue = array;
    this.translate.get('DELETEMSG').subscribe((res: string) => {
      message = res;
    });

    if (array.length === 0) {
      return;
    }

    if (confirm(message)) {
        this.dictionaryService.deleteDictionary(array).subscribe(
          response => {
            if (!this.dicList.success) {
              this.alertService.error(this.dicList.message);
            }
            this.translate.get('SUCCESSMSG').subscribe((res: string) => {
              message = res;
            });
            this.alertService.success(message);
            this.getList();
          },
          error => {
            console.log(error);
          });
    }
  }

  selectData(obj: any) {
    if ($(obj).closest().find('.checkbox').checkbox('is checked')) {
      $(obj).closest().find('.checkbox').checkbox('uncheck');
    } else {
      $(obj).closest().find('.checkbox').checkbox('check');
    }
  }

}
