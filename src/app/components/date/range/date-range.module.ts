import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateProviders } from '../date.providers';

@NgModule({
  declarations: [
    DateRangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  exports: [
    DateRangeComponent
  ],
  providers: [DateProviders]
})

export class DateRangeModule { }
