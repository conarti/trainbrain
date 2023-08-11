<script setup lang="ts">
import type { ExerciseWithSolution } from '../model';

interface Props {
  solutions: ExerciseWithSolution[]
}

defineProps<Props>();

/* @duplicate results-page + show-train-results */
function isInvalidResult(exerciseWithSolution: ExerciseWithSolution) {
  return exerciseWithSolution.solution !== exerciseWithSolution.result;
}
</script>

<template>
  <q-expansion-item
    label="Exercise solutions"
    class="shadow-1 overflow-hidden bg-blue-grey-1"
    header-class="text-bold"
    style="border-radius: 30px"
  >
    <q-card>
      <q-card-section>
        <div class="fit row wrap justify-start items-center content-center q-gutter-md">
          <p
            v-for="(exerciseWithSolution, index) in solutions"
            :key="exerciseWithSolution.id"
          >
            <b>{{ index + 1 }}.</b>
            {{ exerciseWithSolution.label }}
            <q-badge
              rounded
              :color="isInvalidResult(exerciseWithSolution) ? 'red' : 'green'"
            >
              {{ exerciseWithSolution.solution }}
            </q-badge>
          </p>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
