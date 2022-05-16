import { createAction, props } from "@ngrx/store";

const prefix = '[App Action]';

export const toggleDarkMode = createAction(`${prefix} Toggle dark mode`);
export const toggleDarkModeSuccess = createAction(`${prefix} Toggle dark mode success`, props<{ darkMode: boolean }>());
