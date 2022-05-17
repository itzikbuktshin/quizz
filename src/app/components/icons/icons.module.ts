import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalendarIconComponent } from "./calendar/calendar-icon.component";
import { EditIconComponent } from "./edit/edit-icon.component";
import { HumburgerIconComponent } from "./humburger/humburger-icon.component";
import { MoonIconComponent } from "./moon/moon-icon.component";
import { SunIconComponent } from "./sun/sun-icon.component";
import { HeartIconComponent } from './heart/heart-icon.component';

const COMPONENTS = [
    CalendarIconComponent,
    EditIconComponent,
    HumburgerIconComponent,
    MoonIconComponent,
    SunIconComponent,
    HeartIconComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class IconsModule { }