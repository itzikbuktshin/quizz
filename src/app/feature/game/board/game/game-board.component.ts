import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { GameService } from '../../game.service';

@Component({
  selector: 'quizz-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {

  public question$ = this.game.question$.pipe(
    tap(() => this._startTimer())
  );
  public lives$ = this.game.lives$;
  public points$ = this.game.points$;
  public totalAnswers$ = this.game.countAnswers$.pipe(map(answers => answers.total));
  public timeLeft: number = 0;

  private _destroy = new Subject();
  private _interval: any;

  constructor(private game: GameService,
    private router: Router) { }

  ngOnInit(): void {
    this.listenToGameOver();
  }

  answerQuestion(answer: number) {
    clearInterval(this._interval);
    this.game.answerQuestion(answer)
  }


  loadNextQuestion(){
    this.game.loadNextQuestion();
  }

  ngOnDestroy(): void {
    clearInterval(this._interval);
    this._destroy.next();
  }

  private _startTimer() {
    this.timeLeft = 100;
    clearInterval(this._interval);

    this._interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this._interval);
        this.game.skipQuestion()
      }
    }, 200)
  }

  private listenToGameOver() {
    this.game.gameOver$
      .pipe(takeUntil(this._destroy))
      .subscribe(() => this.router.navigate(['game/over']))
  }
}