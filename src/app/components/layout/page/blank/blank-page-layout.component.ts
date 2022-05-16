import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'marvel-blank-page-layout',
  template:`
  <nb-layout>
    <nb-layout-column class="p-0">
        <ng-content select="[content]"></ng-content>
    </nb-layout-column>
  </nb-layout>`
})
export class BlankPageLayoutComponent  {}