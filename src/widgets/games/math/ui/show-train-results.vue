<script setup lang="ts">
import { computed } from 'vue';
import { formatTime } from '@/features/stopwatch';
import {
  type ExerciseWithSolution,
  getMistakeSolutionsCount,
  getMistakeSolutionsPercent,
} from '../model';
import ExerciseSolutions from './exercise-solutions.vue';

interface Props {
  time: number;
  results: ExerciseWithSolution[]
}

const props = defineProps<Props>();

type Emits = (event: 'restart') => void

const emit = defineEmits<Emits>();

const mistakeSolutionsCount = computed(() => getMistakeSolutionsCount(props.results));
const mistakeSolutionsPercent = computed(() => getMistakeSolutionsPercent(props.results));

function restart() {
  emit('restart');
}
</script>

<template>
  <q-card
    flat
    bordered
  >
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
        @click="restart"
      />
    </q-card-actions>
  </q-card>
</template>
