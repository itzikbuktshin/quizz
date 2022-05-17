import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NbProgressBarModule } from '@nebular/theme';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    NbProgressBarModule
  ],
  exports: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule { }
