/**
 * Created by clarence on 22/4/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {UserDeleteRequest, UserDeleteRequestService} from '../../services/user-delete-request.service';

@Component({
    selector: 'user-delete-request-list',
    templateUrl: 'app/components/user-delete-request-list/user-delete-request-list.html',
    styleUrls: ['app/components/user-delete-request-list/user-delete-request-list.css']
})
export class UserDeleteRequestListComponent implements OnInit {

    userDeleteRequests: UserDeleteRequest[];
    userDeleteRequestsLoaded = false;

    constructor(
        private _userDeleteRequestService: UserDeleteRequestService
    ) {}

    ngOnInit() {
        // Retrieve user list
        this._userDeleteRequestService.getUserDeleteRequestList().subscribe( data => {
            console.log("Response: " + JSON.stringify(data));
            this.userDeleteRequests = data;
            this.userDeleteRequestsLoaded = true;
        });
    }

}
