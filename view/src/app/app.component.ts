import {Component} from "@angular/core";
import {AuthHttp, JwtHelper} from "angular2-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  thing: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public authHttp: AuthHttp) {}

  useJwtHelper() {
    var token = localStorage.getItem('token');

    console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
    );
  }
}
