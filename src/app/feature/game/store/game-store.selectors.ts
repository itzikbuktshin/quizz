import { createSelector } from "@ngrx/store";
import { GameState } from "./game-store.reducers";

const selectGame = (state: any): GameState => { return state?.game };

export const selectPlayer = createSelector(
    selectGame,
    (state) => {
        return {
            name: state.playerName,
            score: state.correct
        }
    }
);

export const selectQuestion = createSelector(
    selectGame,
    (state) => state.currentQuestion
);

export const selectPreviousQuestions = createSelector(
    selectGame,
    (state) => state.previousQuestions
);

export const selectLives = createSelector(
    selectGame,
    (state) => state.lives
);

export const selectCorrect = createSelector(
    selectGame,
    (state) => state.correct
);

export const selectCountAnswers = createSelector(
    selectGame,
    (state) => {
        return {
            correct: state.correct,
            incorrect: state.incorrect,
            total: state.correct + state.incorrect
        }
    }
);

export const selectLeaders = createSelector(
    selectGame,
    (state) => state.leaders
);