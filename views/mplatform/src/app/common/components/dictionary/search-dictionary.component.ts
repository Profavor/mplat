import {Component, OnInit, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {DictionaryService} from '../../../pages/admin/dictionary';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-search-dictionary',
  styleUrls: ['./search-dictionary.css'],
  templateUrl: './search-dictionary.html'
})

export class SearchDictionaryComponent implements OnInit, AfterViewInit {

    dicList: any = new Array();
    p: Number = 0;
    pageSize: Number = 5;
    totalCount: Number = 0;
    message = '';

    @Output()
    selectEvent: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
      this.getList();
    }

    ngAfterViewInit() {

    }

    onPageChange(e)  {
      this.getList();
    }

    search(e) {
      if (e.key === "Enter") {
        this.getList();
      }      
    }

    constructor(private alertService: AlertService,
      private dictionaryService: DictionaryService,
      private translate: TranslateService) {

      }

      getList() {
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

      selectDictionary(dicId: string) {
        this.selectEvent.emit({
          'dicId': dicId
        });
      }
}
