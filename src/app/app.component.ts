import { Component } from '@angular/core';

@Component({
  selector: 'quizz-root',
  template: `<quizz-blank-page-layout>
    <ng-container content>
        <router-outlet></router-outlet>
    </ng-container>
  </quizz-blank-page-layout>`
})
export class AppComponent {
  title = 'quizz';
}