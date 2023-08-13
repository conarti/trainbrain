import isNumber from 'lodash/isNumber';
import type { ValidationRule } from 'quasar';

type ValidationRuleName = 'number';

export const VALIDATION_RULES: Record<ValidationRuleName, Exclude<ValidationRule<unknown>, 'EmbeddedValidationRule'>> = {
  number: (value) => isNumber(value) || 'Please write valid number',
};
