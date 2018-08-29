import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../../../auth/services/authentication.service';

@Injectable()
export class MenuService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {

        }
}
