import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'quizz-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`<quizz-main-page-layout>
    <div header>
        <quizz-header></quizz-header>
    </div>
    <div menu>
        <quizz-menu></quizz-menu>
    </div>
    <div content>
        <p>Home</p>
    </div>
  </quizz-main-page-layout>`
})
export class HomePageComponent {}
