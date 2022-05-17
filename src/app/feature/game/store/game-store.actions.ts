import { createAction, props } from "@ngrx/store";
import { Player, Question } from "../model";

const prefix = '[Game Action]';

export const savePlayer = createAction(`${prefix} Save player`, props<{ name: string }>());
export const loadQuestion = createAction(`${prefix} Load question`);
export const loadQuestionSuccess = createAction(`${prefix} Load question success`, props<{ question: Question }>());
export const loadQuestionError = createAction(`${prefix} Load question error`);

export const answerQuestion = createAction(`${prefix} Answer question`, props<{ answer: number }>());
export const answerQuestionSuccess = createAction(`${prefix} Answer question success`);
export const answerQuestionError = createAction(`${prefix} Answer question error`);

export const gameOver = createAction(`${prefix} Game over`);
export const gameReset = createAction(`${prefix} Game reset`);
export const addLeader = createAction(`${prefix} Add leader`, props<{ leader: Player }>());