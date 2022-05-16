import { Component } from '@angular/core';

@Component({
  selector: 'quizz-menu',
  template: `<nb-menu tag="menu" [items]="items"></nb-menu>`,
})
export class MenuComponent {

  items = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true
    }
  ];
}