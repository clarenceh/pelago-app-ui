import {bootstrap}    from 'angular2/platform/browser';
import {FORM_PROVIDERS} from 'angular2/common';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './components/application/application';

bootstrap(AppComponent, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);