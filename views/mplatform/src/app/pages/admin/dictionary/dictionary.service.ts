import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { AuthenticationService } from '../../../auth/services/authentication.service';
import { Dictionary } from './dictionary.component';
import { stringify } from '../../../../../node_modules/@angular/compiler/src/util';

@Injectable()
export class DictionaryService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {

        }

    getDictionaryList(pageSize: any, page: any) {
        const url = '/api/dictionary/getList';
        const param =  new HttpParams()
            .set('size', stringify(pageSize))
            .set('page', stringify(page - 1))
            .set('sort', 'createdDate,desc');

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

    deleteDictionary(array: Array<string>) {
        const url = '/api/dictionary/delete';
        const param =  new HttpParams()
            .set('dicId', array.toString());

        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }
}
