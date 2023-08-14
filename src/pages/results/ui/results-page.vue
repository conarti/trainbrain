<script setup lang="ts">
import groupBy from 'lodash/groupBy';
import { date } from 'quasar';
import { computed } from 'vue';
import {
  getMistakeSolutionsCount,
  getMistakeSolutionsPercent,
} from '@/widgets/games/math';
import {
  type MathGameResult,
  type SpeedCountingGameResult,
  useSavedGames,
} from '@/features/saved-games';
import { formatTime } from '@/features/stopwatch';

const DATE_WITH_TIME_UI_FORMAT = 'D MMM YYYY / HH:mm';
const DATE_UI_FORMAT = 'D MMM YYYY';

const { savedGames } = useSavedGames();

const mathResults = computed(() => savedGames.value.math);
const speedCountingResults = computed(() => savedGames.value.speedCounting);
const mathResultsGroupedByDay = computed(() => {
  return groupBy(mathResults.value, (mathGameResult: MathGameResult) => {
    return date.formatDate(mathGameResult.date, DATE_UI_FORMAT);
  });
});
const speedCountingResultsGroupedByDay = computed(() => {
  return groupBy(speedCountingResults.value, (speedCountingGameResult: SpeedCountingGameResult) => {
    return date.formatDate(speedCountingGameResult.date, DATE_UI_FORMAT);
  });
});

const hasMathResults = computed(() => mathResults.value.length > 0);
const hasSpeedCountingResults = computed(() => speedCountingResults.value?.length > 0);
const hasNoResults = computed(() => !hasMathResults.value && !hasSpeedCountingResults.value);
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
      <!--   TODO @refactor - extract to components   -->
      <template v-if="hasMathResults">
        <h6 class="q-ma-sm">
          Math Game
        </h6>
        <q-list
          class="rounded-borders"
          bordered
          padding
        >
          <template
            v-for="(dayResults, day) in mathResultsGroupedByDay"
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
                    getMistakeSolutionsPercent(result.solutions)
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
      <template v-if="hasSpeedCountingResults">
        <h6 class="q-ma-sm">
          Speed Counting Game
        </h6>
        <q-list
          class="rounded-borders"
          bordered
          padding
        >
          <template
            v-for="(dayResults, day) in speedCountingResultsGroupedByDay"
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
    </template>
  </q-page>
</template>
