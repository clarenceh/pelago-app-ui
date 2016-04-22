import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {AppConfig} from '../../config/app-config';
import {User, UserService} from '../../services/user.service';
import {
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

    // Indicates whether there is error from server
    submitError = false;

    user = new User();
    
    nationalities: string[];
    errorMessages: string[];
    
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
        this.submitError = false;

        // Clear previous errors
        this.errorMessages = [];

        console.log("On user registration");
        console.log("User input: " + JSON.stringify(this.user));

        // Submit user info to backend API
        this._userService.addUser(this.user).subscribe(
            res => {
                console.log("User reg success: " + JSON.stringify(res));

                this.submitting = false;
                this.success = true;

                // Navigate to Home
                let link = ['Home'];

                // Show success message for 2 seconds and navigate to user list view
                setTimeout(function(self){self._router.navigate(link);}, 2000, this);
            },
            err => {
                if (err.status === 422) {
                    let errors = err.json();
                    console.error('Response status: ' + err.status);
                    console.error('Validation error: ' + JSON.stringify(err.json()));
                    this.submitError = true;
                    this.submitting = false;
                    for (var key in errors) {
                        var allValues = errors[key];
                        for (var keyValue in allValues) {
                            console.log('Key ' + key + ' has value : ' + allValues[keyValue]);
                            this.errorMessages.push(allValues[keyValue]);
                        }
                    }
                }
            }
        );
    }

    get diagnostic() { return JSON.stringify(this.user); }
    
}