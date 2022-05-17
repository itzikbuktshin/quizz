import { Injectable } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import { Player, Question } from '../model';

import * as appAction from './game-store.actions';

export interface GameState {
    playerName: string | null;
    previousQuestion: Question | null;
    currentQuestion: Question | null;
    correct: number;
    incorrect: number;
    lives: number;
    leaders: Player[]
}

@Injectable()
export class GameReducers {
    initialState: GameState = {
        leaders: [],
        playerName: null,
        currentQuestion: null,
        previousQuestion: null,
        correct: 0,
        lives: 3,
        incorrect: 0
    }

    getReducer() {
        return createReducer({ ...this.initialState },
            on(appAction.savePlayer, (state, { name }) => {
                return { ...state, ...{ playerName: name } }
            }),
            on(appAction.loadQuestionSuccess, (state, { question }) => {
                return { ...state, ...{ currentQuestion: question } }
            }),
            on(appAction.answerQuestionSuccess, (state) => {
                const correct = state.correct + 1;
                return { ...state, ...{ correct } }
            }),
            on(appAction.answerQuestionError, (state) => {
                const lives = Math.max(state.lives - 1, 0);
                const incorrect = state.incorrect + 1;
                return { ...state, ...{ lives, incorrect } }
            }),
            on(appAction.gameOver, (state) => {
                const lives = 0;
                return { ...state, ...{ lives } }
            }),
            on(appAction.addLeader, (state, { leader }) => {
                const leaders = [
                    ...state.leaders,
                    leader
                ];
                return { ...state, ...{ leaders } }
            }),
            on(appAction.gameReset, (state) => {
                const newGame = {
                    ...state,
                    playerName: null,
                    currentQuestion: null,
                    correct: 0,
                    lives: 3,
                    incorrect: 0
                };
                return { ...state, ...newGame }
            })
        )
    }
};