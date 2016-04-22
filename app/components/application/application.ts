import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {UserListComponent} from '../user-list/user-list';
import {NavbarComponent} from '../navbar/navbar';
import {FooterComponent} from '../footer/footer';
import {UserRegComponent} from '../user-reg/user-reg';
import {AppConfig} from '../../config/app-config';
import {UserService} from '../../services/user.service';
import {UserDeleteRequestService} from '../../services/user-delete-request.service';
import {UserDeleteRequestComponent} from '../user-delete-request/user-delete-request';
import {UserDeleteRequestListComponent} from '../user-delete-request-list/user-delete-request-list';

@Component({
    selector: 'pelago-app',
    templateUrl: 'app/components/application/application.html',
    styleUrls: ['app/components/application/application.css'],
    providers: [AppConfig, UserService, UserDeleteRequestService],
    directives: [
        ROUTER_DIRECTIVES,
        NavbarComponent,
        FooterComponent]
})
@RouteConfig([
    {path: '/home', name: 'Home', component: UserListComponent, useAsDefault: true},
    {path: '/register', name: 'Register', component: UserRegComponent},
    {path: '/userdeletereq', name: 'UserDeleteReqList', component: UserDeleteRequestListComponent},
    {path: '/userdeletereq/:email', name: 'UserDeleteReq', component: UserDeleteRequestComponent}
])
export class AppComponent { 
}