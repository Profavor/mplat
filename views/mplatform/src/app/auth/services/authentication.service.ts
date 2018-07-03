import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  private access_token: string;
  private refresh_token: string;

  /**
   * Authorization OAUTH2 Login Process
   * @param username
   * @param password
   * @returns {Observable<R>}
   */
  login(username: string, password: string) {
    // create authorization header with jwt token
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa(environment.oauth2_clientId + ':' + environment.oauth2_secret)
    });

    const httpOptions = {
      headers: headers
    };

    const params =  new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password')
    .set('scope', 'read')
    .set('redirect_uri', '/');

    return this.http.post('/oauth/token', params, httpOptions)
      .pipe();
  }

  /**
   * Authorization Logout Process
   */
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/login']);
  }

  /**
   * JWT Access Token
   * @returns {string}
   */
  getAccessToken() {
    return localStorage.getItem('access_token');
  }


  /**
   * JWT Refresh Token
   * @returns {string}
   */
  getRefreshToken() {
    return  localStorage.getItem('refresh_token');
  }


  /**
   * Login flag
   * @returns {boolean}
   */
  loggedIn() {
    return !this.isTokenExpired();
  }

  /**
   * Authorization information by token
   * @param token
   * @returns {any}
   */
  decodeToken() {
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(this.getAccessToken());
  }

  /**
   * Authorization expired date by token
   * @param token
   * @returns {Date}
   */
  getTokenExpirationDate() {
    const jwtHelper = new JwtHelperService();
    return jwtHelper.getTokenExpirationDate(this.getAccessToken());
  }

  /**
   * JWT expired flag by token
   * @param token
   * @returns {boolean}
   */
  isTokenExpired() {
    const jwtHelper = new JwtHelperService();
    return jwtHelper.isTokenExpired(this.getAccessToken());
  }

  jwt() {
    // create authorization header with jwt token
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json; charset=utf-8',
      'x-auth-token': this.getAccessToken()
    });

    const httpOptions = {
      headers: headers
    };

    return httpOptions;
  }
}
