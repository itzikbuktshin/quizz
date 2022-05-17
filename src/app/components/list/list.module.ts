import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NbCardModule, NbListModule } from '@nebular/theme';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
