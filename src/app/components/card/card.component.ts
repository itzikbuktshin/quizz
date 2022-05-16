import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quizz-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() header: boolean = false;
  @Input() loading: boolean = false;
  @Input() padding: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
