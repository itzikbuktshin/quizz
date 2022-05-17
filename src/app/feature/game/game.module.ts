import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartGameComponent } from './start/start-game.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { GameRoutingModule } from './game-routing.module';
import { GameStoreModule } from './store/game-store.module';
import { GameService } from './game.service';
import { GameBoardComponent } from './board/game/game-board.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { GameComponent } from './components/game/game.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { GameApiService } from './game-api.service';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { GameOverComponent } from './over/game-over.component';
import { ProgressBarModule } from 'src/app/components/progress-bar/progress-bar.module';
import { IconsModule } from 'src/app/components/icons/icons.module';
import { PlayerInputComponent } from './components/player-input/player-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from 'src/app/components/inputs/text/text-input.module';
import { GameGuard } from './game.guard';
import { LeadersBoardComponent } from './board/leaders/leaders-board.component';
import { ListModule } from 'src/app/components/list/list.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    StartGameComponent,
    GameBoardComponent,
    GameHeaderComponent,
    GameComponent,
    GameOverComponent,
    PlayerInputComponent,
    LeadersBoardComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    GameStoreModule,
    LayoutModule,
    ButtonModule,
    LoadingModule,
    ProgressBarModule,
    IconsModule,
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    TextInputModule,
    ListModule,
    PipesModule
  ],
  providers: [GameService, GameApiService, GameGuard]
})
export class GameModule { }
