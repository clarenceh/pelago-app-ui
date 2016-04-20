import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {UserListComponent} from '../user-list/user-list';
import {NavbarComponent} from '../navbar/navbar';
import {AppConfig} from '../../config/app-config';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'pelago-app',
    templateUrl: 'app/components/application/application.html',
    styleUrls: ['app/components/application/application.css'],
    providers: [AppConfig, UserService],
    directives: [
        ROUTER_DIRECTIVES,
        NavbarComponent]
})
@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: UserListComponent,
        useAsDefault: true
    }
])
export class AppComponent { 
}