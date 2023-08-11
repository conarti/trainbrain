<script setup lang="ts">
import type { ExerciseWithSolution } from '../model';

interface Props {
  results: ExerciseWithSolution[]
}

defineProps<Props>();

/* @duplicate */
function isInvalidResult(exerciseWithSolution: ExerciseWithSolution) {
  return exerciseWithSolution.solution !== exerciseWithSolution.result;
}
</script>

<template>
  <q-expansion-item
    label="Full results"
    class="shadow-1 overflow-hidden bg-blue-grey-1"
    header-class="text-bold"
    style="border-radius: 30px"
  >
    <q-card>
      <q-card-section>
        <div class="fit row wrap justify-start items-center content-center q-gutter-md">
          <p
            v-for="(result, index) in results"
            :key="result.id"
          >
            <b>{{ index + 1 }}.</b>
            {{ result.label }}
            <q-badge
              rounded
              :color="isInvalidResult(result) ? 'red' : 'green'"
            >
              {{ result.solution }}
            </q-badge>
          </p>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
