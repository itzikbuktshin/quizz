import { Component, EventEmitter, forwardRef, Input, Output, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TOGGLE_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleInputComponent),
  multi: true,
};

@Component({
  selector: 'quizz-toggle-input',
  templateUrl: './toggle-input.component.html',
  styleUrls: ['./toggle-input.component.scss'],
  providers: [TOGGLE_CONTROL_VALUE_ACCESSOR]
})
export class ToggleInputComponent implements ControlValueAccessor {

  onChange: any = () => { };
  onTouched: any = () => { };
  disabled = false;

  @Input() label: string = '';
  @Input() checked: boolean = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  writeValue(checked: boolean): void {
    this.checked = checked;
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

  updateValue(checked:boolean) {
    this.checked = checked;
    this.onChange(checked);
    this.checkedChange.emit(checked);
  }
}