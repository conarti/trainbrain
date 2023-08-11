<script setup lang="ts">
import { computed } from 'vue';
import { formatTime } from '@/features/timer';
import { EXERCISES_COUNT } from '../config';
import type { ExerciseWithSolution } from '../model';
import MathGameResults from './math-game-results.vue';

interface Props {
  time: number;
  results: ExerciseWithSolution[]
}

const props = defineProps<Props>();

type Emits = (event: 'restart') => void

const emit = defineEmits<Emits>();

/* @duplicate */
function isInvalidResult(exerciseWithSolution: ExerciseWithSolution) {
  return exerciseWithSolution.solution !== exerciseWithSolution.result;
}

const mistakeSolutionsCount = computed(() => props.results.filter(isInvalidResult).length);
const mistakeSolutionsPercent = computed(() => Math.floor(mistakeSolutionsCount.value / EXERCISES_COUNT * 100));
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
      <MathGameResults :results="results" />
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
