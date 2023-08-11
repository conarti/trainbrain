<script setup lang="ts">
import groupBy from 'lodash/groupBy';
import { date } from 'quasar';
import { computed } from 'vue';
import type { ExerciseWithSolution } from '@/widgets/math-game';
import { formatTime } from '@/features/timer';
import {
  type MathGameResult,
  useUserGamesResults,
} from '@/features/user-games-results';

const DATE_WITH_TIME_UI_FORMAT = 'D MMM YYYY / HH:mm';
const DATE_UI_FORMAT = 'D MMM YYYY';

const { results } = useUserGamesResults();

const resultsGroupedByDay = computed(() => {
  return groupBy(results.value, (mathGameResult: MathGameResult) => {
    return date.formatDate(mathGameResult.date, DATE_UI_FORMAT);
  });
});

const hasNoResults = computed(() => results.value.length === 0);

/* @duplicate show-train-results + exercise-solutions */
function isInvalidResult(exerciseWithSolution: ExerciseWithSolution) {
  return exerciseWithSolution.solution !== exerciseWithSolution.result;
}

/* @duplicate show-train-results */
function getMistakeSolutionsCount(solutions: ExerciseWithSolution[]): number {
  return solutions.filter(isInvalidResult).length;
}
function getMistakeSolutionsPercent(mistakeSolutionsCount: number, totalSolutionsCount: number): number {
  return Math.floor(mistakeSolutionsCount / totalSolutionsCount * 100);
}
</script>

<template>
  <q-page padding>
    <h5
      v-if="hasNoResults"
      class="text-center"
    >
      No results
    </h5>
    <template v-else>
      <h6 class="q-ma-sm">
        Math Game
      </h6>
      <q-list
        bordered
        padding
      >
        <template
          v-for="(dayResults, day) in resultsGroupedByDay"
          :key="day"
        >
          <q-item-label
            header
            caption
          >
            {{ day }}
          </q-item-label>

          <q-item
            v-for="(result, index) in dayResults"
            :key="index"
          >
            <q-item-section>
              <q-item-label>
                Time: {{ formatTime(result.time) }}
              </q-item-label>
              <q-item-label caption>
                Mistakes:
                <span class="text-red">{{
                  getMistakeSolutionsCount(result.solutions)
                }}</span>/{{ result.solutions.length }} ({{
                  getMistakeSolutionsPercent(getMistakeSolutionsCount(result.solutions), result.solutions.length)
                }}%)
              </q-item-label>
            </q-item-section>
            <q-item-section
              side
              top
            >
              <q-item-label caption>
                {{ date.formatDate(result.date, DATE_WITH_TIME_UI_FORMAT) }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </template>
  </q-page>
</template>
