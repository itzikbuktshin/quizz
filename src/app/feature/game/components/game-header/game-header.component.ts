import { Component, Input } from '@angular/core';

@Component({
  selector: 'quizz-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss']
})
export class GameHeaderComponent {

  Array = Array;
  
  @Input() currentQuestion: number | null = null;
  @Input() lives: number | null = null;
  @Input() points: number | null = null;

}