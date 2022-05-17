import { Component, Input } from '@angular/core';

@Component({
  selector: 'quizz-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {

  @Input() value : number = 0;
  
}