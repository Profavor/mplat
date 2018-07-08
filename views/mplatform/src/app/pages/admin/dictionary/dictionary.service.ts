import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { AuthenticationService } from '../../../auth/services/authentication.service';
import { Dictionary } from './dictionary.component';

@Injectable()
export class DictionaryService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {

        }

    getDictionaryList() {
        const url = '/api/dictionary/getList';
        const param =  new HttpParams();
        // 페이지 번호
        //

        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }

    getDicionary(dicId: string) {
        const url = '/api/dictionary/' + dicId;
        const param =  new HttpParams();
        param.set('dicId', dicId);
        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }

    saveDictionary(dic: Dictionary) {
        const url = '/api/dictionary/save';
        const param =  new HttpParams()
            .set('dicId', dic.dicId)
            .set('message_ko', dic.message_ko)
            .set('message_en', dic.message_en);

        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }
}
