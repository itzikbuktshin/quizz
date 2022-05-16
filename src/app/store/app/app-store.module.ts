import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
// import { State, AppStoreReducers, metaReducers } from "./app-store.reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app-store.effects';
import { AppState, AppStoreReducers } from './app-store.reducers';

// const APP_REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('App reducers',);
const APP_REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('App reducers',);

const reducersFactory = (appReducers: AppStoreReducers) => {
  return {
    app: appReducers.getReducer()
  }
}

const STORE_PROVIDERS = [AppStoreReducers, {
  provide: APP_REDUCERS_TOKEN,
  deps: [AppStoreReducers],
  useFactory: reducersFactory
}];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(APP_REDUCERS_TOKEN),
    // StoreModule.forRoot(APP_REDUCERS_TOKEN, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    ...STORE_PROVIDERS
  ]
})
export class AppStoreModule { }