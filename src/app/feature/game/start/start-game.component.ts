import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'quizz-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

  constructor(public gameService: GameService,
    public router: Router
  ) { }

  savePlayer(name: string) {
    this.gameService.savePlayer(name);
    this.router.navigate(['game/board'])
  }
}