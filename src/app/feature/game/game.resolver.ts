import { Injectable } from '@angular/core';
import { Resolve, } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GameService } from './game.service';

@Injectable()
export class GameResolver implements Resolve<boolean> {

  constructor(private game: GameService) { }
  resolve(): Observable<boolean> {
    this.game.loadQuestion();
    return of(true);
  }
}
