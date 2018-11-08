import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../../../auth/services/authentication.service';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable()
export class MenuService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {

    }

    getList(parentId: string) {
        const url = '/api/menu/getTopMenuByParentId';
        const param =  new HttpParams().set('parentId', parentId);

        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }

    getRootList() {
        const url = '/api/menu/getTopMenu';
        const param =  new HttpParams();

        return this.http.post(url, param, this.authenticationService.jwt())
            .pipe(
                retry(3)
        );
    }
}
