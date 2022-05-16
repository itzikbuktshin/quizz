import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'marvel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkMode$: Observable<boolean> = of(false);

  constructor(private appService: AppService,
    private sidebarService: NbSidebarService) { }

  ngOnInit() {
    this.darkMode$ = this.appService.theme$;
  }

  toggleSideNav() {
    this.sidebarService.toggle(true, 'left');
  }

  changeTheme() {
    this.appService.toggleDarkMode();
  }
}
