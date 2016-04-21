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

    // Indicates whether this form is active
    active = true;

    // Indicates whether submitting is in progress
    submitting = false;

    // Indicates where user reg was successful
    success = false;

    // Indicates where email was already taken
    emailTaken = false;

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

        // Inactivate the form
        this.active = false;

        this.submitting = true;

        console.log("On user registration");
        console.log("User input: " + JSON.stringify(this.user));

        // Submit user info to backend API
        this._userService.addUser(this.user).subscribe( res => {
            console.log("User reg success: " + JSON.stringify(res));

            this.submitting = false;
            this.success = true;

            // Navigate to Home
            let link = ['Home'];

            // Show success message for 2 seconds and navigate to user list view
            setTimeout(function(self){self._router.navigate(link);}, 2000, this);

        });
    }

    onEmailBlur(emailValid: boolean) {

        console.log("On email blur: " + this.user.email);
        console.log("Email valid: " + emailValid);
        if (emailValid) {

            // Check email existence from server
            console.log("Check email existence");

            this._userService.checkEmailExist(this.user.email).subscribe(
                res => {
                    console.log("User email exist");
                    this.emailTaken = true;
                },
                err => {
                    // TODO - should check the response code is 404
                    console.log("User email not exist");
                    this.emailTaken = false;
                }
            )
        }
    }

    get diagnostic() { return JSON.stringify(this.user); }
    
}