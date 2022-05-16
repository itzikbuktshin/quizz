import { NgModule } from "@angular/core";
import { MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from "@angular/material/core";
import { NbButtonModule } from "@nebular/theme";
import { ButtonComponent } from "./button.component";

const globalRippleConfig: RippleGlobalOptions = {
    animation: {
        enterDuration: 1000,
        exitDuration: 0
    }
};

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        NbButtonModule,
        MatRippleModule, 
    ],
    exports: [
        NbButtonModule,
        ButtonComponent
    ],
    providers:[
        {
            provide: MAT_RIPPLE_GLOBAL_OPTIONS,
            useValue: globalRippleConfig
        }
    ]
})
export class ButtonModule { }