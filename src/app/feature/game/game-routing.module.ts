import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './board/game/game-board.component';
import { LeadersBoardComponent } from './board/leaders/leaders-board.component';
import { GameGuard } from './game.guard';
import { GameResolver } from './game.resolver';
import { GameOverComponent } from './over/game-over.component';
import { StartGameComponent } from './start/start-game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartGameComponent
  },
  {
    path: 'board',
    component: GameBoardComponent,
    resolve: {
      game: GameResolver
    },
    canActivate: [GameGuard]
  },
  {
    path: 'over',
    component: GameOverComponent,
    canActivate: [GameGuard]
  },
  {
    path: 'leaders',
    component: LeadersBoardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [GameResolver]
})
export class GameRoutingModule { }
