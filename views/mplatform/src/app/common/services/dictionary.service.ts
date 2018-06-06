import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { URLSearchParams} from '@angular/http';
import { Observable, Subject, ErrorObserver } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { AuthenticationService } from '../../auth/services/authentication.service';

@Injectable()
export class DictionaryService {
    langCode: string = localStorage.getItem('langCode');

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService
    ) {  }

    getTranslate(dicId: string) {
        const url = '/api/dictionary/getDictionary';
        const params = new HttpParams().set('dicId', dicId);

        return this.http.post(url, params, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }
}
