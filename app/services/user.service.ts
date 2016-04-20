import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import {AppConfig} from '../config/app-config';
import 'rxjs/add/operator/map';

export class User {
    public id: number;
    public name: string;
    public email: string;
    public tel: string;
    public nationality: string;
    public password: string;
}

@Injectable()
export class UserService {
    
    private apiBaseUrl: string;
    private apiUserUrl: string;
    
    constructor(private _http: Http) {
        this.apiBaseUrl = AppConfig.REST_API_BASE_URL;
        this.apiUserUrl = this.apiBaseUrl + '/user';
    }
    
    getUserList(): Observable<User[]> {
        return this._http
            .get(this.apiUserUrl)
            .map(response => response.json());
    }
    
    addUser(user: User): Observable<User> {
        console.log("Registering new user: " + JSON.stringify(user));
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http
            .post(this.apiUserUrl, JSON.stringify(user), options)
            .map(response => response.json());
    }
    
}