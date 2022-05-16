import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeInputComponent } from './date-time-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateProviders } from '../date.providers';
 
@NgModule({
  declarations: [
    DateTimeInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ], exports: [
    DateTimeInputComponent
  ],
  providers: [DateProviders]
})
export class DateTimeInputModule { }