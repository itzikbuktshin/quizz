import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    IconsModule
  ],
  exports: [AvatarComponent]
})
export class AvatarModule { }
