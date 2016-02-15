import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {DashboardComponent} from './dashboard'
import {LoginComponent} from './login'
import {HomeComponent} from './home'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
