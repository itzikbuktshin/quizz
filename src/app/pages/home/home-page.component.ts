import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'marvel-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`<marvel-main-page-layout>
    <div header>
        <marvel-header></marvel-header>
    </div>
    <div menu>
        <marvel-menu></marvel-menu>
    </div>
    <div content>
        <p>Home</p>
    </div>
  </marvel-main-page-layout>`
})
export class HomePageComponent {}
