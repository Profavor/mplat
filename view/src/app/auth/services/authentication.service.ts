import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {environment} from "environments/environment";
import {JwtHelper, tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }

  private access_token: string;
  private expires_in: number;
  private scope: string;
  private refresh_token: string;
  private token_type: string;
  private jti: string;
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
        this.access_token = data.access_token;
        this.expires_in = data.expires_in;
        this.scope = data.scope;
        this.refresh_token = data.refresh_token;
        this.token_type = data.token_type;
        this.jti = data.jti;
        sessionStorage.setItem("token", this.access_token);
        return response;
      });
  }

  /**
   * Authorization Logout Process
   */
  logout() {
    sessionStorage.removeItem("token");
    this.access_token = "";
    this.expires_in = 0;
    this.scope = "";
    this.refresh_token = "";
    this.token_type = "";
    this.jti = "";
  }

  /**
   * JWT Access Token
   * @returns {string}
   */
  getAccessToken() {
    return this.access_token;
  }

  /**
   * JWT Expired date
   * @returns {number}
   */
  getExpiresIn() {
    return this.expires_in;
  }

  /**
   * JWT Scope
   * @returns {string}
   */
  getScope() {
    return this.scope;
  }

  /**
   * JWT Refresh Token
   * @returns {string}
   */
  getRefreshToken() {
    return this.refresh_token;
  }

  /**
   * JWT Token Type
   * @returns {string}
   */
  getTokenType() {
    return this.token_type;
  }

  /**
   * JWT Token ID
   * @returns {string}
   */
  getJti() {
    return this.jti;
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
}
