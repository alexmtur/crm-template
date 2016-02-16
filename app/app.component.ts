/* MAIN IMPORTS */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

/* STATIC WEBSITE COMPONENT */
import {HomeComponent}   from './static/home/home.component';
import {MentorsComponent}   from './static/mentors/mentors.component';

/* MENTOR LOGIN COMPONENTS */
/* STARTUP LOGIN COMPONENTS */
/* ADMIN LOGIN COMPONENTS */


@Component({
  selector: 'impact-crm',
  templateUrl: 'app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/mentors', name: 'Mentors', component: MentorsComponent}
])

export class AppComponent { }