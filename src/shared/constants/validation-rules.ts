import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import type { ValidationRule } from 'quasar';

type ValidationRuleName = 'number'
  | 'username'
  | 'password';

export const VALIDATION_RULES: Record<ValidationRuleName, Exclude<ValidationRule<unknown>, 'EmbeddedValidationRule'>> = {
  number: (value) => isNumber(value) || 'Please write valid number',
  username: (value) => isString(value) && value.length > 4 || 'Username must have at least 5 characters',
  password: (value) => isString(value) && value.length > 6 || 'Password must have at least 7 characters',
};
