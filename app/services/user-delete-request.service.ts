/**
 * Created by clarence on 21/4/2016.
 */
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import {AppConfig} from '../config/app-config';
import 'rxjs/add/operator/map';

export class UserDeleteRequest {
    public id: number;
    public email: string;
    public comment: string;
}

@Injectable()
export class UserDeleteRequestService {

    private apiBaseUrl: string;
    private apiUserDeleteReqUrl: string;

    constructor(
        private _http: Http
    ) {
        this.apiBaseUrl = AppConfig.REST_API_BASE_URL;
        this.apiUserDeleteReqUrl = this.apiBaseUrl + '/userdeletereq';
    }

    submitUserDeleteRequest(userDeleteRequest: UserDeleteRequest): Observable<UserDeleteRequest> {
        console.log("In UserDeleteRequestService: submitting user delete request: " + JSON.stringify(userDeleteRequest));

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http
            .post(this.apiUserDeleteReqUrl, JSON.stringify(userDeleteRequest), options)
            .map(response => response.json());
    }

}