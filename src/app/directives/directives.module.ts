import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSelectDirective } from './file-select/file-select.directive';

@NgModule({
  declarations: [
    FileSelectDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[FileSelectDirective]
})
export class DirectivesModule { }