import { Component, forwardRef, Input, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const DATE_TIME_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeInputComponent),
  multi: true,
};

@Component({
  selector: 'marvel-date-time-input',
  templateUrl: './date-time-input.component.html',
  styleUrls: ['./date-time-input.component.scss'],
  providers: [DATE_TIME_CONTROL_VALUE_ACCESSOR]
})
export class DateTimeInputComponent implements ControlValueAccessor {

  @Input() label:string = '';
  @Input() disabled:boolean = false;
  
  onChange: any = () => { };
  onTouched: any = () => { };
  date: Date | undefined = undefined;

  writeValue(date: any): void {
    this.date = new Date(date);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  setDate(event: any) {
    if(!this.date) return;
    this.date = event.value;
    this.onChange(this.date)
  }
}