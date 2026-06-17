import { FieldTree } from '@angular/forms/signals';

export interface IInputFormConfig {
  type: TInputTypes;
  hasLabel?: boolean;
  hasSpecialConfig: boolean;
  formData: FieldTree<string | number | boolean | Date | null>;
  label?: string;
  inputId?: string;
  options?: TOptionsConfig[];
  typeInput?: TTypeInputs;
  inputConfig?: TInputConfig;
}

export type TInputTypes = 'select' | 'input';

export type TOptionsConfig = {
  value: string;
  label: string;
};

export type TTypeInputs = 'text' | 'email' | 'password';

export type TInputConfig = {
  placeholder?: string;
  classSpecial?: string;
};
