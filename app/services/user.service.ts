import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import {AppConfig} from '../config/app-config';
import 'rxjs/add/operator/map';

export class User {
    public id: number;
    public name: string;
    public email: string;
    public tel: string;
    public nationality: string;
}

@Injectable()
export class UserService {
    
    private apiBaseUrl: string;
    
    constructor(private _http: Http) {
        this.apiBaseUrl = AppConfig.REST_API_BASE_URL;
    }
    
    getUserList(): Observable<User[]> {
        return this._http
            .get(this.apiBaseUrl + '/user')
            .map(response => response.json());
    }
    
}