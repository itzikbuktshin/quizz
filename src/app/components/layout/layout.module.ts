import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule } from "@nebular/theme";
import { AvatarModule } from "../avatar/avatar.module";
import { IconsModule } from "../icons/icons.module";
import { ToggleInputModule } from "../inputs/toggle/toggle-input.module";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { BlankPageLayoutComponent } from './page/blank/blank-page-layout.component';
import { MainPageLayoutComponent } from './page/main/main-page-layout.component';
import { BreadcrumbModule } from "../breadcrumb/breadcrumb.module";

const COMPONENTS = [
    HeaderComponent,
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
        AvatarModule,
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