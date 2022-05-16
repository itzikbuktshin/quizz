import { Component } from '@angular/core';

@Component({
  selector: 'marvel-root',
  template: `<marvel-blank-page-layout>
    <ng-container content>
        <router-outlet></router-outlet>
    </ng-container>
  </marvel-blank-page-layout>`
})
export class AppComponent {
  title = 'marvel';
}