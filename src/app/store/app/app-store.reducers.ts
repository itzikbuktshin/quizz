import { Injectable } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import * as appAction from './app-store.actions';

export interface AppState {
    darkMode: boolean;
}

@Injectable({ providedIn: 'root' })
export class AppStoreReducers {
    initialState: AppState = { darkMode: false }

    getReducer() {
        return createReducer({ ...this.initialState },
            on(appAction.toggleDarkModeSuccess, (state, { darkMode }) => {
                return { ...state, ...{ darkMode } }
            })
        )
    }
};