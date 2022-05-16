import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Theme, ThemeService } from "src/app/services/theme.service";
import { map, tap } from "rxjs/operators";
import { LocalStorageConstantce } from "../../constants/local-storage.constants";
import * as appActions from "./app-store.actions";
import * as fromApp from "./app-store.selectors";

@Injectable()
export class AppEffects {

    constructor(
        public store: Store,
        private actions$: Actions,
        private themeService: ThemeService) { }

    init$ = createEffect(() => this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT),
        map(() => {
            const darkModeString = localStorage.getItem(LocalStorageConstantce.quizz_DARK_MODE_THEME) || 'false';
            const darkMode = JSON.parse(darkModeString);
            const theme = darkMode ? Theme.DARK : Theme.DEFAULT;
            return { darkMode, theme };
        }),
        tap(({ theme }) => {
            this.themeService.changeTheme(theme);
        }),
        map(({ darkMode }) => appActions.toggleDarkModeSuccess({ darkMode }))
    ));

    toggleDarkMode$ = createEffect(() => this.actions$.pipe(
        ofType(appActions.toggleDarkMode),
        concatLatestFrom(() => this.store.select(fromApp.selectTheme)),
        map(([, darkMode]) => darkMode),
        tap((darkMode: boolean) => {
            const theme = darkMode ? Theme.DEFAULT : Theme.DARK;
            localStorage.setItem(LocalStorageConstantce.quizz_DARK_MODE_THEME, `${!darkMode}`);
            this.themeService.changeTheme(theme);
        }),
        map((darkMode: boolean) => appActions.toggleDarkModeSuccess({ darkMode: !darkMode }))
    ));
}