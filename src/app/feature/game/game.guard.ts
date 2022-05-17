import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GameService } from './game.service';

@Injectable()
export class GameGuard implements CanActivate {
  constructor(private game: GameService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.game.player$.pipe(
      tap(player => {
        if(!player || !player.name){
          this.router.navigate(['game'])
        }
      }),
      map(player => !!player))
  }
}