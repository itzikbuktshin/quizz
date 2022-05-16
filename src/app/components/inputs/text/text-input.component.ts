import { AfterViewInit, Component, forwardRef, Injector, Input, Provider, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInput } from '@angular/material/input';

class InputErrorMatcher implements ErrorStateMatcher {
  constructor(private control: FormControl) { }

  isErrorState(): boolean {
    return this.control && this.control.touched && (this.control.invalid);
  }
}

export type InputError = {
  [validation:string]:string
}

const TEXT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextInputComponent),
  multi: true,
};

@Component({
  selector: 'quizz-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [TEXT_CONTROL_VALUE_ACCESSOR]
})
export class TextInputComponent implements ControlValueAccessor, AfterViewInit {

  onChange: any = () => { };
  onTouched: any = () => { };

  @Input() border: boolean = true;
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() transparent: boolean = false;
  @Input() placeholder: string = '';
  @Input() errors: InputError = {};

  text: string = '';

  @ViewChild('input')
  //@ts-ignore
  input: MatInput;

  constructor(public injector: Injector) { }

  //@ts-ignore
  control: FormControl;

  ngAfterViewInit(): void {
    const ngControl = this.injector.get(NgControl, null);
    if (!ngControl) return;
    setTimeout(() => {
      this.control = ngControl.control as FormControl;
    }, 0)
  }

  writeValue(text: string): void {
    this.text = text;
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
  updateText(event: any) {
    const { value } = event.target as HTMLTextAreaElement;
    this.text = value;
    this.onTouched();
    this.onChange(this.text);
    this.input?.updateErrorState()
  }
  errorMatcher() {
    return new InputErrorMatcher(this.control)
  }
}