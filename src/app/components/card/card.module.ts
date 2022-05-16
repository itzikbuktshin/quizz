import { NgModule } from "@angular/core";
import { NbCardModule } from "@nebular/theme";
import { CardComponent } from "./card.component";
import { LoadingModule } from "../loading/loading.module";

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        NbCardModule,
        LoadingModule
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule { }