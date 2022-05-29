import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, map, retryWhen, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { GameApiService } from "../game-api.service";
import { Player } from "../model";

import * as gameActions from "./game-store.actions";
import * as fromGame from "./game-store.selectors";

@Injectable()
export class GameEffects {

    constructor(
        public actions$: Actions,
        public store: Store,
        public gameApi: GameApiService) { }

    loadQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(gameActions.loadQuestion),
        withLatestFrom(this.store.pipe(select(fromGame.selectPreviousQuestions))),
        switchMap(([action, previousQuestions]) => {
            return this.gameApi.loadQuestion()
                .pipe(
                    map(newQuestion => {
                        if (previousQuestions.includes(newQuestion)) {
                            throw newQuestion;
                        }
                        return newQuestion;
                    }),
                    retryWhen(errors => errors.pipe())
                )
        }),
        map(question => gameActions.loadQuestionSuccess({ question }))
    ));

    loadNextQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(...[gameActions.answerQuestionError, gameActions.answerQuestionSuccess]),
        withLatestFrom(this.store.pipe(select(fromGame.selectCountAnswers))),
        map(([action, { total, incorrect }]) => {
            if (total === 10 || incorrect === 3) {
                return gameActions.gameOver();
            }
            return gameActions.loadQuestion();
        }),
    ));

    answerQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(gameActions.answerQuestion),
        withLatestFrom(this.store.pipe(select(fromGame.selectQuestion))),
        map(([action, question]) => {
            const answer: string = question?.answers[action.answer] ?? '';
            const incorrectAnswer: boolean = question?.incorrect.includes(answer) ?? false;

            if (incorrectAnswer) {
                return gameActions.answerQuestionError();
            }
            else {
                return gameActions.answerQuestionSuccess();
            }
        }),
        catchError(() => of(gameActions.answerQuestionError()))
    ));

    gameOver$ = createEffect(() => this.actions$.pipe(
        ofType(gameActions.gameOver),
        withLatestFrom(this.store.pipe(select(fromGame.selectPlayer))),
        map(([action, currentPlayer]) => {
            const leader: Player = {
                name: currentPlayer.name,
                score: currentPlayer.score * 100
            }
            return gameActions.addLeader({ leader });
        }),
    ));
}