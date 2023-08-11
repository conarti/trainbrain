<script setup lang="ts">
import { computed } from 'vue';
import { EXERCISES_COUNT } from '../config';
import type { ExerciseWithSolution } from '../model';

interface Props {
  time: string;
  results: ExerciseWithSolution[]
}

const props = defineProps<Props>();

type Emits = (event: 'restart') => void

const emit = defineEmits<Emits>();

function isInvalidResult(exerciseWithSolutin: ExerciseWithSolution) {
  return exerciseWithSolutin.solution !== exerciseWithSolutin.result;
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
        {{ time }}
      </p>
      <h6 class="q-ma-none text-center">
        Mistakes made:
      </h6>
      <p class="text-center text-h5">
        <span class="text-red">{{ mistakeSolutionsCount }}</span> ({{ mistakeSolutionsPercent }}%)
      </p>
    </q-card-section>
    <q-card-section>
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
