<script setup lang="ts">
import type { ExerciseWithSolution } from '../model';

interface Props {
  time: string;
  results: ExerciseWithSolution[]
}

defineProps<Props>();

function isInvalidResult(exerciseWithSolutin: ExerciseWithSolution) {
  return exerciseWithSolutin.solution !== exerciseWithSolutin.result;
}
</script>

<template>
  <q-card flat>
    <q-card-section>
      <h4 class="q-ma-none text-center">
        {{ time }}
      </h4>
    </q-card-section>
    <q-card-section>
      <p
        v-for="result in results"
        :key="result.id"
      >
        {{ result.label }}
        <q-badge
          rounded
          :color="isInvalidResult(result) ? 'red' : 'green'"
        >
          {{ result.solution }}
        </q-badge>
      </p>
    </q-card-section>
  </q-card>
</template>
