import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

export enum Theme {
  DARK = 'dark',
  DEFAULT = 'default'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private nbThemeService: NbThemeService) { }

  changeBranding(primaryColor: string) {
    for (let index = 1; index < 10; index++) {
      document.documentElement.style.setProperty(`--primary-color-${index * 100}`, primaryColor);
    }
  }

  changeTheme(theme: Theme) {
    this.nbThemeService.changeTheme(theme);
    if(theme === Theme.DARK){
      document.body.classList.add('marvel--darkMode')
    }
    else if(theme === Theme.DEFAULT){
      document.body.classList.remove('marvel--darkMode');
    }
  }
}