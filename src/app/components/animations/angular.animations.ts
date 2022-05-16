import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInOutAnimationFunc = (triggerName: string, time: number = 200) => {
    return trigger(triggerName, [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(time, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(time, style({ opacity: 0 }))
        ])
    ]);
};