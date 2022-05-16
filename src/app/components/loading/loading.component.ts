import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'marvel-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="spinner invert">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>`,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {}
