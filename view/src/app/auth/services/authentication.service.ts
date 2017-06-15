import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {environment} from "environments/environment";
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {
  constructor(private http: Http,
              private router: Router) {
  }

  private access_token: string;
  private refresh_token: string;
  jwtHelper: JwtHelper = new JwtHelper();

  /**
   * Authorization OAUTH2 Login Process
   * @param username
   * @param password
   * @returns {Observable<R>}
   */
  login(username: string, password: string) {
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
      "Authorization": "Basic " + btoa(environment.oauth2_clientId + ':' + environment.oauth2_secret)
    });

    let options = new RequestOptions({headers: headers});
    params.set('username', username);
    params.set('password', password);
    params.set('grant_type', 'password');
    params.set('scope', 'read');
    params.set('redirect_uri', '/');

    return this.http.post('/oauth/token', params, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        //access_token, expires_in, scope, refresh_token, token_type, jti
        let data = response.json();
        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("refresh_token", data.refresh_token);
        return response;
      });
  }

  /**
   * Authorization Logout Process
   */
  logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refresh_token");
    this.router.navigate(['/login']);
  }

  /**
   * JWT Access Token
   * @returns {string}
   */
  getAccessToken() {
    return sessionStorage.getItem("token");
  }


  /**
   * JWT Refresh Token
   * @returns {string}
   */
  getRefreshToken() {
    return  sessionStorage.getItem("refresh_token");
  }


  /**
   * Login flag
   * @returns {boolean}
   */
  loggedIn() {
    return tokenNotExpired("token", sessionStorage.getItem("token"));
  }

  /**
   * Authorization information by token
   * @param token
   * @returns {any}
   */
  decodeToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  /**
   * Authorization expired date by token
   * @param token
   * @returns {Date}
   */
  getTokenExpirationDate(token) {
    return this.jwtHelper.getTokenExpirationDate(token);
  }

  /**
   * JWT expired flag by token
   * @param token
   * @returns {boolean}
   */
  isTokenExpired(token) {
    return this.jwtHelper.isTokenExpired(token);
  }

  private jwt() {
    // create authorization header with jwt token
    let headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json; charset=utf-8",
      "x-auth-token": this.getAccessToken()
    });

    return new RequestOptions({ headers: headers });
  }
}
