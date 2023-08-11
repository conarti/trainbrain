<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue';
import type { Exercise } from '@/features/generate-exercises';
import { formatTime } from '@/features/timer';
import { EXERCISES_DEFAULT_COUNT } from '../config';

function isEmpty(value: unknown): value is null | undefined | '' {
  return value === null || value === '' || value === undefined;
}

type Emits = (event: 'solved', solutions: number[]) => void

const emit = defineEmits<Emits>();

interface Props {
  exercises: Exercise[];
  time: number;
}

const props = defineProps<Props>();

const input = ref();

function handleClick() {
  saveCurrentSolution();
  input.value?.focus();
}

const solutions = ref<number[]>([]);

const currentExerciseSolution = ref<number | null>(null);

const exercisesCount = computed(() => props.exercises.length);
const solvedExercisesCount = computed(() => solutions.value.length);
const currentExercise = computed(() => props.exercises[solvedExercisesCount.value]);
const solvedProgress = computed(() => solvedExercisesCount.value / exercisesCount.value);

function saveCurrentSolution() {
  if (isEmpty(currentExerciseSolution.value)) {
    return;
  }

  solutions.value.push(currentExerciseSolution.value);
  currentExerciseSolution.value = null;

  const isAllSolved = solvedExercisesCount.value === exercisesCount.value;
  if (isAllSolved) {
    emit('solved', solutions.value);
  }
}
</script>

<template>
  <q-card flat>
    <q-linear-progress
      :value="solvedProgress"
      stripe
      animation-speed="100"
      size="10"
    />
    <h6 class="q-ma-none q-mb-md text-center">
      Progress: {{ solvedExercisesCount }}/{{ exercisesCount }}
    </h6>
    <q-card-section>
      <h4 class="q-ma-none text-center">
        {{ formatTime(time) }}
      </h4>
    </q-card-section>
    <q-card-section>
      <h3 class="q-ma-none q-mb-md text-center">
        {{ currentExercise?.label }}
      </h3>
      <q-input
        ref="input"
        v-model.number="currentExerciseSolution"
        dense
        autofocus
        outlined
        mask="###"
        type="number"
        @keydown.enter="saveCurrentSolution"
      >
        <template #after>
          <q-btn
            round
            dense
            flat
            icon="send"
            @click="handleClick"
          />
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>
