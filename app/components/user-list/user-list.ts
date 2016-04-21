import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {AppConfig} from '../../config/app-config';
import {User, UserService} from '../../services/user.service';

@Component({
    selector: 'user-list',
    templateUrl: 'app/components/user-list/user-list.html',
    styleUrls: ['app/components/user-list/user-list.css']
})
export class UserListComponent implements OnInit {
    
    private apiUrl: string;

    usersLoaded = false;

    users: User[];
    
    constructor(
        private _router: Router,
        private _userService: UserService
    ) {}

    ngOnInit() {
        this.apiUrl = AppConfig.REST_API_BASE_URL;
        console.log('API Url: ' + this.apiUrl);
        
        // Retrieve user list
        this._userService.getUserList().subscribe( res => {
            console.log("Response: " + JSON.stringify(res));
            this.users = res;
            this.usersLoaded = true;
        });
    }

    onReqUserDeletion(email: string) {
        console.log("Request deletion for email: " + email);
        this._router.navigate(['UserDeleteReq', {email: email}]);
    }
}