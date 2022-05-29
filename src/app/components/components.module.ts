import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { TextInputModule } from './inputs/text/text-input.module';
import { LoadingModule } from './loading/loading.module';
import { ToggleInputModule } from './inputs/toggle/toggle-input.module';
import { IconsModule } from "./icons/icons.module";
import { LayoutModule } from './layout/layout.module';

const MODULES = [
  ButtonModule,
  TextInputModule,
  LoadingModule,
  ToggleInputModule,
  IconsModule,
  LayoutModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class ComponentsModule { }
