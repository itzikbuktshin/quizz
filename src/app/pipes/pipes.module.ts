import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySortPipe } from './array/array-sort.pipe';

@NgModule({
  declarations: [
    ArraySortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ArraySortPipe]
})
export class PipesModule { }
