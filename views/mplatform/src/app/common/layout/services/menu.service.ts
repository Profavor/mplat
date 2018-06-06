import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { AuthenticationService } from '../../../auth/services/authentication.service';

@Injectable()
export class MenuService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {

        }

    getTopMenu() {
        const url = '/api/menu/getTopMenu';
        const param =  new HttpParams();

        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }

    getSideMenu(path: string) {
        const url = '/api/menu/getSideMenu';
        const param =  new HttpParams().set('path', path);

        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }
}
