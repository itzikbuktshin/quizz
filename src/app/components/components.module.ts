import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './table/table.module';
import { CardModule } from './card/card.module';
import { ButtonModule } from './button/button.module';
import { TextInputModule } from './inputs/text/text-input.module';
import { LoadingModule } from './loading/loading.module';
import { ToggleInputModule } from './inputs/toggle/toggle-input.module';
import { DateRangeModule } from './date/range/date-range.module';
import { DateTimeInputModule } from './date/time/date-time-input.module';
import { AvatarModule } from './avatar/avatar.module';
import { IconsModule } from "./icons/icons.module";
import { LayoutModule } from './layout/layout.module';

const MODULES = [
  TableModule,
  CardModule,
  ButtonModule,
  TextInputModule,
  DateTimeInputModule,
  LoadingModule,
  ToggleInputModule,
  DateRangeModule,
  AvatarModule,
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
