import { Component, input } from '@angular/core';
import { IInputFormConfig } from './interfaces/input-form-config';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-input-form',
  imports: [FormField],
  templateUrl: './input-form.html',
  styleUrl: './input-form.scss',
})
export class InputForm {
  inputFormConfig = input.required<IInputFormConfig>();
}
