import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as appActions from "./store/app/app-store.actions";
import * as fromApp from "./store/app/app-store.selectors";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  get theme$() :Observable<boolean> {
    return this.store.select(fromApp.selectTheme)
  }

  constructor(private store: Store) { }

  toggleDarkMode() {
    this.store.dispatch(appActions.toggleDarkMode());
  }
}