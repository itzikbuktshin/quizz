import { Component, forwardRef, Input, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type DateRange = {
  start: Date, end: Date
}

const DATE_RANGE_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateRangeComponent),
  multi: true,
};

@Component({
  selector: 'marvel-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [DATE_RANGE_CONTROL_VALUE_ACCESSOR]
})
export class DateRangeComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() disabled: boolean = false;

  onChange: any = () => { };
  onTouched: any = () => { };
  range: DateRange | undefined = undefined;

  writeValue(range: any): void {
    this.range = range;
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
  startChange(event: any) {
    if(!this.range) return;
    this.range.start = event.value;
    this.onChange(this.range)
  }
  endChange(event: any) {
    if(!this.range) return;
    this.range.end = event.value;
    this.onChange(this.range)
  }
}