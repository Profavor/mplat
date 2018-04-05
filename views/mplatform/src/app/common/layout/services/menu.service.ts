import {Injectable} from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry, map } from 'rxjs/operators';
import { AuthenticationService } from '../../../auth/services/authentication.service';

@Injectable()
export class MenuService {

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {

        }

    getTopMenu(){
        const url = '/api/menu/getTopMenu';
        const param =  new HttpParams();
        param.set('test', 'test');
        
        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(      
                retry(3)
            );
        }
    }
