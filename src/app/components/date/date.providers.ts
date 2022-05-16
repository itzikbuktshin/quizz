import { Platform } from "@angular/cdk/platform";
import { Inject } from "@angular/core";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter } from "@angular/material/core";

class AppDateAdapter extends NativeDateAdapter {
    constructor(@Inject('matDateLocale') matDateLocale: string, platform: Platform) {
        super(matDateLocale, platform)
    }

    parse(value: any): Date | null {
        if (!value) return null;
        return new Date(value);
    }

    format(date: Date, displayFormat: any): string {
        return new Date(date).toDateString();
    }
}

const AppDateFormats = {
    parse: {
        dateInput: 'DD.MM.YYYY',
    },
    display: {
        dateInput: 'DD.MM.YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    }
}

export const DateProviders = [
    {
        provide: DateAdapter,
        useClass: AppDateAdapter,
        deps: [MAT_DATE_LOCALE, Platform]
    },
    {
        provide: MAT_DATE_FORMATS,
        useValue: AppDateFormats
    }
]