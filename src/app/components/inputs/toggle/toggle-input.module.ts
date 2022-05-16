import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleInputComponent } from './toggle-input.component';
import { NbToggleModule } from '@nebular/theme';

@NgModule({
  declarations: [
    ToggleInputComponent
  ],
  imports: [
    CommonModule,
    NbToggleModule
  ],
  exports:[ToggleInputComponent]

})
export class ToggleInputModule { }
