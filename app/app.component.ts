import {Component} from 'angular2/core';
import {DashboardComponent} from './dashboard';
import {LoginComponent} from './login';
import {HomeComponent} from './home';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


@RouteConfig([
  { path: "/home",      
    name: "Home",      
    component: HomeComponent, 
    useAsDefault: true },
 
  { path: "/login",     
    name: "Login",     
    component: LoginComponent },
 
  { path: "/dashboard", 
    name: "Dashboard", 
    component: DashboardComponent }
])

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    directives: [ROUTER_DIRECTIVES],
	providers: [
	  ROUTER_PROVIDERS	  
	]
})
export class AppComponent { }