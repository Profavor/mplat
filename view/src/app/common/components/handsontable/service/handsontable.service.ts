import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../auth/services/authentication.service";

@Injectable()
export class HandsontableService {
  constructor(private http: Http,
              private router: Router,
              private authenticationService: AuthenticationService ) {
  }


  save(headerList, recordList, saveType, parameter){
    let params: URLSearchParams = new URLSearchParams();

    params.set('saveType', saveType);
    params.set('headerList', JSON.stringify(headerList));
    params.set('recordList', JSON.stringify(recordList));

    if(saveType === 'COL'){
      params.set('dataList', parameter[0]);

    }else if(saveType === 'PASTE'){
      params.set('dataList', parameter[1]);

    }else if(saveType === 'UNDO'){
      params.set('row', parameter[0]);
      params.set('col', parameter[1]);
      params.set('newValue', parameter[3]);
      params.set('oldValue', parameter[2]);
    }else if(saveType === 'RECORD'){
      params.set('startRow', parameter[1].startRow);
      params.set('endRow', parameter[1].startRow);
      params.set('startCol', parameter[1].startCol);
      params.set('endCol', parameter[1].endCol);
    }
    return this.http.post('/api/mdm/prop/save', params, this.jwt())
      .map((response: Response) => {
        return response;
      });
  }



  private jwt() {
    // create authorization header with jwt token
    let headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json; charset=utf-8",
      "x-auth-token": this.authenticationService.getAccessToken()
    });

    return new RequestOptions({ headers: headers });
  }
}
