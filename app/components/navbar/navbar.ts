import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'pelago-navbar',
  templateUrl: 'app/components/navbar/navbar.html',
  styleUrls: ['app/components/navbar/navbar.css'],
  directives: [RouterLink]
})
export class NavbarComponent {}