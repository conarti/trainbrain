<script setup lang="ts">
import isNumber from 'lodash/isNumber';
import { ref } from 'vue';
import { EXERCISES_DEFAULT_COUNT } from '../config';

type Emits = (event: 'start', exercisesCount: number) => void;

const emit = defineEmits<Emits>();

const exercisesCount = ref<number>(EXERCISES_DEFAULT_COUNT);
const exercisesCountRef = ref();

function start() {
  emit('start', exercisesCount.value);
}

function handleStart() {
  exercisesCountRef.value?.validate();

  if (exercisesCountRef.value?.hasError) {
    return;
  }

  start();
}
</script>

<template>
  <q-card
    flat
    tag="form"
    @submit.prevent.stop="handleStart"
  >
    <q-card-section>
      <h5 class="q-ma-none text-center">
        Welcome to Math Game
      </h5>
    </q-card-section>
    <q-card-section>
      <q-input
        ref="exercisesCountRef"
        v-model.number="exercisesCount"
        label="Exercises count"
        type="number"
        :rules="[(value) => isNumber(value) || 'Please write valid number']"
      />
    </q-card-section>
    <q-card-actions
      align="stretch"
      vertical
    >
      <q-btn
        label="Start"
        push
        color="primary"
        type="submit"
      />
    </q-card-actions>
  </q-card>
</template>
