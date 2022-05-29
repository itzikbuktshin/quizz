import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../model';

@Component({
  selector: 'quizz-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public selectedAnswer: number | null = null;
  public incorrectAnswer: boolean | null = null;

  @Input() currentQuestion: number | null = null;
  @Input() timeLeft: number = 0;
  @Input()
  set question(question: Question | null) {
    if (!question) return;
    this._question = question;
    this.incorrectAnswer = null;
  }
  get question() {
    return this._question;
  }

  @Output() onAnswer = new EventEmitter<number>();
  @Output() onNext = new EventEmitter();

  private _question: Question | null = null;

  selecteAnswer(selectedAnswer: number) {
    const answer: string = this._question?.answers[selectedAnswer] ?? '';
    this.incorrectAnswer = this.question?.incorrect.includes(answer) ?? false;
    this.onAnswer.emit(selectedAnswer ?? 0);
    this.selectedAnswer = selectedAnswer ?? null;
  }

  nextQuestion() {
    this.onNext.emit();
  }
}