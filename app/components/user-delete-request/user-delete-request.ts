/**
 * Created by clarence on 21/4/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    FORM_PROVIDERS
} from 'angular2/common';
import {UserDeleteRequest, UserDeleteRequestService} from '../../services/user-delete-request.service';

@Component({
    selector: 'user-delete-request',
    providers: [FORM_PROVIDERS],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'app/components/user-delete-request/user-delete-request.html',
    styleUrls: ['app/components/user-delete-request/user-delete-request.css']
})
export class UserDeleteRequestComponent implements OnInit {

    userDeleteRequest = new UserDeleteRequest();

    // Indicate this form is active or not
    active = true;

    // Indicates whether submitting is in progress
    submitting = false;

    // Indicates where user reg was successful
    success = false;

    constructor(
        private _routerParams: RouteParams,
        private _userDeleteRequestService: UserDeleteRequestService
    ) {}

    ngOnInit() {
        this.userDeleteRequest.email = this._routerParams.get('email');
        console.log("User delete request for email: " + this.userDeleteRequest.email);
    }

    onUserDeleteReq() {
        this.active = false;
        this.submitting = true;

        console.log("Submit user delete request: " + JSON.stringify(this.userDeleteRequest));

        this._userDeleteRequestService.submitUserDeleteRequest(this.userDeleteRequest)
            .subscribe( res => {
                console.log("User delete request submitted successfully");
                this.submitting = false;
                this.success = true;
            });
    }

}