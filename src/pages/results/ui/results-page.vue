<script setup lang="ts">
import groupBy from 'lodash/groupBy';
import { date } from 'quasar';
import { computed } from 'vue';
import {
  getMistakeSolutionsCount,
  getMistakeSolutionsPercent,
} from '@/widgets/games/math';
import { formatTime } from '@/features/stopwatch';
import {
  type MathGameResult,
  useUserStats,
} from '@/features/user-stats';

const DATE_WITH_TIME_UI_FORMAT = 'D MMM YYYY / HH:mm';
const DATE_UI_FORMAT = 'D MMM YYYY';

const { results } = useUserStats();

const mathResults = computed(() => results.value.math);
const mathResultsGroupedByDay = computed(() => {
  return groupBy(mathResults.value, (mathGameResult: MathGameResult) => {
    return date.formatDate(mathGameResult.date, DATE_UI_FORMAT);
  });
});

const hasNoResults = computed(() => mathResults.value.length === 0);
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
          v-for="(dayResults, day) in mathResultsGroupedByDay"
          :key="day"
        >
          <q-item-label
            header
            caption
          >
            {{ day }}
          </q-item-label>
          class="rounded-borders"

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
  </q-page>
</template>
