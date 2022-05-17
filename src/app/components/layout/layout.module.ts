import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule } from "@nebular/theme";
import { IconsModule } from "../icons/icons.module";
import { ToggleInputModule } from "../inputs/toggle/toggle-input.module";
import { MenuComponent } from "./menu/menu.component";
import { BlankPageLayoutComponent } from './page/blank/blank-page-layout.component';
import { MainPageLayoutComponent } from './page/main/main-page-layout.component';
import { BreadcrumbModule } from "../breadcrumb/breadcrumb.module";

const COMPONENTS = [
    MenuComponent,
    BlankPageLayoutComponent,
    MainPageLayoutComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        NbLayoutModule,
        ToggleInputModule,
        IconsModule,
        NbSidebarModule.forRoot(),
        NbThemeModule.forRoot({ name: 'default' }),
        NbMenuModule.forRoot(),
        NbEvaIconsModule,
        BreadcrumbModule
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class LayoutModule { }