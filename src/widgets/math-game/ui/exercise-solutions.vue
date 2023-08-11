<script setup lang="ts">
import { useQuasar } from 'quasar';
import type { ExerciseWithSolution } from '../model';

interface Props {
  solutions: ExerciseWithSolution[]
}

defineProps<Props>();

const q = useQuasar();

/* @duplicate results-page + show-train-results */
function isInvalidResult(exerciseWithSolution: ExerciseWithSolution) {
  return exerciseWithSolution.solution !== exerciseWithSolution.result;
}
</script>

<template>
  <q-expansion-item
    label="Exercise solutions"
    class="shadow-1 overflow-hidden rounded-borders"
    :class="{
      'bg-blue-grey-1': !q.dark.isActive,
      'bg-grey-14': q.dark.isActive,
    }"
    header-class="text-bold"
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
