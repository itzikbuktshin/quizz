import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'quizz-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class BreadcrumbComponent {

  private location: Location;

  get breadcrumbs() {
    return this.location?.path()?.split('/');
  }

  constructor(location: Location, private route:Router) {
    this.location = location;
  }

  navigate(index:number){
    const routeCommands = this.location.path().split('/')
    .filter(item => !!item)
    .slice(0, index);
    this.route.navigate(routeCommands);
  }
}