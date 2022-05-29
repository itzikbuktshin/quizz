import { Component, Input } from '@angular/core';

@Component({
  selector: 'quizz-main-page-layout',
  template:`<nb-layout>    
    <nb-layout-header fixed *ngIf="withHeader">
        <div class="w-100">
            <ng-content select="[header]"></ng-content>
        </div>
    </nb-layout-header>

    <nb-layout-column>
        <ng-content select="[content]"></ng-content>
    </nb-layout-column>
  </nb-layout>`
})
export class MainPageLayoutComponent {
  @Input()
  withHeader:boolean = true;

  @Input()
  withMenu:boolean = true;
}