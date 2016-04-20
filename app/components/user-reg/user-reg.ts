import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {AppConfig} from '../../config/app-config';
import {User, UserService} from '../../services/user.service';
import {
  Validators,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FORM_PROVIDERS
} from 'angular2/common';

@Component({
    selector: 'user-reg',
    providers: [FORM_PROVIDERS],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'app/components/user-reg/user-reg.html',
    styleUrls: ['app/components/user-reg/user-reg.css']
})
export class UserRegComponent implements OnInit {
    
    private apiUrl: string;
    
    user = new User();
    
    nationalities: string[];
    
    constructor(
        private _router: Router,
        private _userService: UserService
    ) {}
    
    ngOnInit() {
        this.apiUrl = AppConfig.REST_API_BASE_URL;
        console.log('API Url: ' + this.apiUrl);
        
        this.nationalities = ['Hong Kong', 'Macau', 'China', 'Taiwan', 'Singapore', 'Philippine'];
        console.log('Nationalities: ' + this.nationalities);
    }
    
    onUserReg() {
        console.log("On user registration");
        console.log("User input: " + JSON.stringify(this.user));
        
        // Submit user info to backend API
        this._userService.addUser(this.user).subscribe( res => {
            console.log("User reg success: " + JSON.stringify(res));     
        });
    }
    
}