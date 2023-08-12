<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue';
import { formatTime } from '@/features/timer';
import type { Exercise } from '../model';

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
  <q-card
    flat
    bordered
  >
    <q-linear-progress
      :value="solvedProgress"
      animation-speed="500"
      size="26px"
    >
      <div class="absolute-full flex flex-center">
        <q-chip
          disable
          dense
          color="transparent"
          size="12px"
        >
          <b>
            Progress: {{ solvedExercisesCount }}/{{ exercisesCount }}
          </b>
        </q-chip>
      </div>
    </q-linear-progress>
    <q-card-section>
      <h4 class="q-ma-none q-mb-md text-center">
        {{ formatTime(time) }}
      </h4>
      <h3 class="q-ma-none q-mb-md text-center">
        {{ currentExercise?.label }}
      </h3>
      <q-input
        ref="input"
        v-model.number="currentExerciseSolution"
        dense
        autofocus
        outlined
        rounded
        prefix="="
        mask="###"
        type="number"
        @keydown.enter="saveCurrentSolution"
      >
        <template #append>
          <q-btn
            flat
            round
            dense
            color="primary"
            icon="sym_r_done"
            @click="handleClick"
          />
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>
