<script setup lang="ts">
import isNumber from 'lodash/isNumber';
import type {
  NamedColor,
  TouchRepeatValue,
} from 'quasar';
import {
  doImpact,
  ImpactStyle,
} from '@/features/haptic-feedback';
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

async function doHaptics() {
  await doImpact(ImpactStyle.Light);
}

type TouchRepeatEvent = Parameters<Exclude<TouchRepeatValue, undefined>>[0];

async function press(event: TouchRepeatEvent) {
  if (props.disable) {
    return;
  }

  const isFirstInput = event.repeatCount === 1;
  if (isFirstInput) {
    await doHaptics();
  }
  emit('press', props.value);
}
</script>

<template>
  <q-btn
    v-touch-repeat:0:600:100.mouse="press"
    :color="chooseColor(value)"
    push
    size="lg"
    :icon="chooseIcon(value)"
    :disable="disable"
    :label="createLabel(value)"
  />
</template>
