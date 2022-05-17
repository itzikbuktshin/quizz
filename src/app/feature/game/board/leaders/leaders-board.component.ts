import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { GameService } from '../../game.service';
import { Player } from '../../model';

@Component({
  selector: 'quizz-leaders-board',
  templateUrl: './leaders-board.component.html',
  styleUrls: ['./leaders-board.component.scss']
})
export class LeadersBoardComponent implements OnInit {

  public leaders$: Observable<Player[]> = this.game.leaders$;

  constructor(private game: GameService) { }

  ngOnInit(): void {
  }

  gameReset(){
    this.game.gameReset()
  }
}
