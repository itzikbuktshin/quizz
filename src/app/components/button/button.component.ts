import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ButtonColor = 'primary';
export type ButtonShape = 'rectangle' | 'round';

export interface ButtonConfig {
  click: () => void;
  color?: ButtonColor;
  shape?: ButtonShape
}

@Component({
  selector: 'quizz-button',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() config: ButtonConfig | undefined = undefined;
  @Input() disabled: boolean = false;
  color:ButtonColor = 'primary';
  shape:ButtonShape = 'round';
}