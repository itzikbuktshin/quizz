import { createSelector } from "@ngrx/store";

const selectApp = (state: any) => { return state.app };

export const selectTheme = createSelector(
    selectApp,
    (state) => state.darkMode
);