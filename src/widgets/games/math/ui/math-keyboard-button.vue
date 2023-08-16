<script setup lang="ts">
import isNumber from 'lodash/isNumber';
import type { NamedColor } from 'quasar';
import type { MathKeyboardKey } from '../model';

interface Props {
  value: MathKeyboardKey;
  disable?: boolean;
}

type Emits = (event: 'press', key: MathKeyboardKey) => void

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function createLabel(keyValue: MathKeyboardKey): string | number | undefined {
  if (isNumber(keyValue)) {
    return keyValue;
  }

  return undefined;
}

function chooseColor(keyValue: MathKeyboardKey): NamedColor {
  switch (keyValue) {
  case 'done':
    return 'green';
  case 'reset':
    return 'red';
  default:
    return 'primary';
  }
}

function chooseIcon(keyValue: MathKeyboardKey): string | undefined {
  switch (keyValue) {
  case 'done':
    return 'sym_r_done';
  case 'reset':
    return 'sym_r_backspace';
  default:
    return undefined;
  }
}

function handleClick() {
  emit('press', props.value);
}
</script>

<template>
  <q-btn
    :color="chooseColor(value)"
    push
    :icon="chooseIcon(value)"
    :disable="disable"
    :label="createLabel(value)"
    @click="handleClick"
  />
</template>
