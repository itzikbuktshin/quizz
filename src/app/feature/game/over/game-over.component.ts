import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameService } from '../game.service';

@Component({
  selector: 'quizz-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit, OnDestroy {

  correct: number = 0;
  private _destroy = new Subject();

  constructor(private game: GameService) { }

  ngOnInit(): void {
    this.game.points$
      .pipe(takeUntil(this._destroy))
      .subscribe(correct => this.correct = correct
      )
  }

  ngOnDestroy(): void {
    this._destroy.next();
  }
}