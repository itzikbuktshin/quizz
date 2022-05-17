import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'quizz-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.scss']
})
export class PlayerInputComponent {

  formControl = new FormControl('', [Validators.required]);

  @Output()
  palyerSaved = new EventEmitter<string>();

  savePlayer(){
    if(this.formControl.invalid) {
      this.formControl.markAllAsTouched();
      return;
    };
    this.palyerSaved.emit(this.formControl.value);
  }
}