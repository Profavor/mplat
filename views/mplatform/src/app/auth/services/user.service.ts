import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import {User} from '../models/user';
import {AuthenticationService} from './authentication.service';


@Injectable()
export class UserService {
    constructor(private http: HttpClient,
    private authenticationService: AuthenticationService) { }

    getAll() {
        return this.http.get('/api/users', this.authenticationService.jwt()).pipe(retry(3));
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.authenticationService.jwt()).pipe(retry(3));
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.authenticationService.jwt()).pipe(retry(3));
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.loginId, user, this.authenticationService.jwt()).pipe(retry(3));
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.authenticationService.jwt()).pipe(retry(3));
    }
}
