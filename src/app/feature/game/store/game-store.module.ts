import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './game-store.effects';
import { GameReducers } from './game-store.reducers';

const GAME_REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<GameReducers>>('Game reducers');

const reducersFactory = (gameReducers: GameReducers) => {
  return gameReducers.getReducer()
}

const STORE_PROVIDERS = [GameReducers, {
  provide: GAME_REDUCERS_TOKEN,
  deps: [GameReducers],
  useFactory: reducersFactory
}];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('game', GAME_REDUCERS_TOKEN),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forFeature([GameEffects])
  ],
  providers: [
    ...STORE_PROVIDERS
  ]
})
export class GameStoreModule { }