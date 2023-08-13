<script setup lang="ts">
import { useQuasar } from 'quasar';
import {
  isInvalidResult,
  type ExerciseWithSolution,
} from '../model';

interface Props {
  solutions: ExerciseWithSolution[]
}

defineProps<Props>();

const q = useQuasar();
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
        <q-list dense>
          <q-item
            v-for="(exerciseWithSolution, index) in solutions"
            :key="exerciseWithSolution.id"
          >
            <q-item-section>
              <p class="q-ma-none">
                <b>{{ index + 1 }}.</b>&nbsp;
                {{ exerciseWithSolution.label }}
                <q-badge
                  rounded
                  :color="isInvalidResult(exerciseWithSolution) ? 'red' : 'green'"
                >
                  {{ exerciseWithSolution.solution }}
                </q-badge>
              </p>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
