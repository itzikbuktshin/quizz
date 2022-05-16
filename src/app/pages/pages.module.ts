import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/home-page.component';
import { LayoutModule } from '../components/layout/layout.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [HomePageComponent]
})
export class PagesModule { }
