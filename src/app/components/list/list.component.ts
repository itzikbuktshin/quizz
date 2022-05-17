import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'quizz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  itemTemplate: TemplateRef<any> | null = null;

  @Input()
  title: string = '';

  @Input()
  list: any[] | null = [];
}