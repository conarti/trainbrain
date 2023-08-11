<script setup lang="ts">
import { computed } from 'vue';
import { formatTime } from '@/features/timer';
import type { ExerciseWithSolution } from '../model';
import ExerciseSolutions from './exercise-solutions.vue';

interface Props {
  time: number;
  results: ExerciseWithSolution[]
}

const props = defineProps<Props>();

type Emits = (event: 'restart') => void

const emit = defineEmits<Emits>();

/* @duplicate exercise-solutions + results-page */
function isInvalidResult(exerciseWithSolution: ExerciseWithSolution) {
  return exerciseWithSolution.solution !== exerciseWithSolution.result;
}

/* @duplicate at results-page */
const mistakeSolutionsCount = computed(() => props.results.filter(isInvalidResult).length);
const exercisesCount = computed(() => props.results.length);
const mistakeSolutionsPercent = computed(() => Math.floor(mistakeSolutionsCount.value / exercisesCount.value * 100));
</script>

<template>
  <q-card flat>
    <q-card-section>
      <h6 class="q-ma-none text-center">
        Elapsed time:
      </h6>
      <p class="text-center text-h5">
        {{ formatTime(time) }}
      </p>
      <h6 class="q-ma-none text-center">
        Mistakes made:
      </h6>
      <p class="text-center text-h5">
        <span class="text-red">{{ mistakeSolutionsCount }}</span> ({{ mistakeSolutionsPercent }}%)
      </p>
    </q-card-section>
    <q-card-section>
      <ExerciseSolutions :solutions="results" />
    </q-card-section>
    <q-card-actions
      align="stretch"
      vertical
    >
      <q-btn
        label="Try again"
        push
        color="primary"
        @click="emit('restart')"
      />
    </q-card-actions>
  </q-card>
</template>
