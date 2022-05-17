import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../model';

@Component({
  selector: 'quizz-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public selectedAnswer: number | null = null;

  @Input() currentQuestion: number | null = null;
  @Input() timeLeft: number = 0;
  @Input()
  set question(question: Question | null) {
    if (!question) return;
    this._question = question;
    this.selecteAnswer();
  }
  get question() {
    return this._question;
  }

  @Output() onAnswer = new EventEmitter<number>();

  private _question: Question | null = null;

  selecteAnswer(selectedAnswer?: number) {
    this.selectedAnswer = selectedAnswer ?? null;
  }

  answerQuestion() {
    this.onAnswer.emit(this.selectedAnswer ?? 0);
  }
}