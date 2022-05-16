import { Component, Input } from '@angular/core';

@Component({
  selector: 'quizz-main-page-layout',
  template:`<nb-layout>    
    <nb-layout-header fixed *ngIf="withHeader">
        <div class="w-100">
            <ng-content select="[header]"></ng-content>
        </div>
    </nb-layout-header>

    <nb-sidebar [responsive]="true" left tag="left" *ngIf="withMenu">
        <ng-content select="[menu]"></ng-content>
    </nb-sidebar>

    <nb-layout-column>
        <div class="my-3">
          <quizz-breadcrumb></quizz-breadcrumb>
        </div>
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