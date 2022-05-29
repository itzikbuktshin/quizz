import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Player, Question } from './model';

import * as gameActions from "./store/game-store.actions";
import * as fromGame from "./store/game-store.selectors";

@Injectable()
export class GameService {

  public readonly question$: Observable<Question | null> = this.store.select(fromGame.selectQuestion).pipe(
    filter(question => !!question)
  );

  public readonly lives$: Observable<number> = this.store.select(fromGame.selectLives).pipe(
    filter(lives => !!lives)
  );

  public readonly gameOver$: Observable<boolean> = this.store.select(fromGame.selectLives).pipe(
    filter(lives => lives === 0),
    map(() => true)
  );

  public readonly points$: Observable<number> = this.store.select(fromGame.selectCorrect);
  public readonly countAnswers$: Observable<{ correct: number; incorrect: number; total: number; }> = this.store.select(fromGame.selectCountAnswers);
  public readonly player$: Observable<Player | null> = this.store.select(fromGame.selectPlayer);
  public readonly leaders$: Observable<Player[]> = this.store.select(fromGame.selectLeaders);

  constructor(private store: Store) { }

  savePlayer(name: string) {
    this.store.dispatch(gameActions.savePlayer({ name }));
  }

  loadQuestion() {
    this.store.dispatch(gameActions.loadQuestion());
  }

  loadNextQuestion() {
    this.store.dispatch(gameActions.loadNextQuestion());
  }

  answerQuestion(answer: number) {
    this.store.dispatch(gameActions.answerQuestion({ answer }));
  }

  skipQuestion() {
    this.store.dispatch(gameActions.answerQuestionError());
  }

  gameReset() {
    this.store.dispatch(gameActions.gameReset());
  }
}