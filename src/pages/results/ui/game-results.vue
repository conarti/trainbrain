<script setup lang="ts" generic="T extends BaseGameResult">
import groupBy from 'lodash/groupBy';
import { date } from 'quasar';
import { computed } from 'vue';
import type { BaseGameResult } from '@/features/saved-games';

const DATE_WITH_TIME_UI_FORMAT = 'D MMM YYYY / HH:mm';
const DATE_UI_FORMAT = 'D MMM YYYY';

interface Props {
	title: string;
	results: T[];
}

const props = defineProps<Props>();

const resultsGroupedByDay = computed(() => groupBy(props.results, (gameResult: T) => {
  return date.formatDate(gameResult.date, DATE_UI_FORMAT);
}));
</script>

<template>
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
          <slot
            name="result-body"
            :value="result"
          />
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
