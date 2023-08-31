<script setup lang="ts">
import groupBy from 'lodash/groupBy';
import isEmpty from 'lodash/isEmpty';
import { date } from 'quasar';
import { computed } from 'vue';
import type { SavedGameResult } from '@/features/saved-games';
import { formatTime } from '@/features/stopwatch';

const DATE_WITH_TIME_UI_FORMAT = 'D MMM YYYY / HH:mm';
const DATE_UI_FORMAT = 'D MMM YYYY';

interface Props {
	title: string;
	results: SavedGameResult<unknown>;
}

const props = defineProps<Props>();

const hasResults = computed(() => !isEmpty(props.results));
const resultsGroupedByDay = computed(() => groupBy(props.results, (gameResult: SavedGameResult<unknown>) => {
  return date.formatDate(gameResult.date, DATE_UI_FORMAT);
}));
</script>

<template>
  <template v-if="hasResults">
    <h6 class="q-ma-sm">
      {{ title }}
    </h6>
    <q-list
      class="rounded-borders"
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
              <slot
                name="result-body"
                :value="result"
              />
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
