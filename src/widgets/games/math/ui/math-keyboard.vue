<script setup lang="ts">
import { isNull } from 'lodash';
import toNumber from 'lodash/toNumber';
import { computed } from 'vue';
import type { MathKeyboardKey } from '../model';
import MathKeyboardButton from './math-keyboard-button.vue';

interface Props {
  modelValue: number | null
}

interface Emits {
  (event: 'update:model-value', newValue: Props['modelValue']): void;
  (event: 'done'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const NUMBERS_KEYMAP: MathKeyboardKey[] = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9,
  'reset', 0, 'done',
];

const innerModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: Props['modelValue']) {
    emit('update:model-value', newValue);
  },
});

const isEmptyInput = computed(() => innerModelValue.value === null);

function isDoneKey(key: MathKeyboardKey): key is 'done' {
  return key === 'done';
}

function concatenate(number: number, toInput: number | null): number {
  if (isNull(toInput)) {
    return number;
  }

  return toNumber(`${toInput}${number}`);
}

function erase(input: number | null): number | null {
  if (isNull(input)) {
    return null;
  }

  const inputString = input.toString();

  const hasOnlyOneSymbol = inputString.length === 1;
  if (hasOnlyOneSymbol) {
    return null;
  }

  const withoutLastSymbol = inputString.substring(0, inputString.length - 1);
  return toNumber(withoutLastSymbol);
}

function done() {
  emit('done');
}

function handleKeyPress(keyValue: MathKeyboardKey) {
  switch (keyValue) {
  case 'reset':
    innerModelValue.value = erase(innerModelValue.value);
    break;
  case 'done':
    done();
    break;
  default:
    innerModelValue.value = concatenate(keyValue, innerModelValue.value);
  }
}
</script>

<template>
  <div class="fit row wrap">
    <div
      v-for="key in NUMBERS_KEYMAP"
      :key="key"
      class="col-4 q-pa-sm"
    >
      <div class="fit row">
        <MathKeyboardButton
          class="col-grow"
          :value="key"
          :disable="isEmptyInput && isDoneKey(key)"
          @press="handleKeyPress"
        />
      </div>
    </div>
  </div>
</template>
