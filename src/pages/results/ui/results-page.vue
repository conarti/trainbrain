<script setup lang="ts">
import isEmpty from 'lodash/isEmpty';
import { computed } from 'vue';
import {
  getMistakeSolutionsCount,
  getMistakeSolutionsPercent,
} from '@/widgets/games/math';
import { useSavedGames } from '@/features/saved-games';
import { formatTime } from '@/features/stopwatch';
import EmptyResults from './empty-results.vue';
import GameResults from './game-results.vue';

const { savedGames } = useSavedGames();

const mathResults = computed(() => savedGames.value.math);
const speedCountingResults = computed(() => savedGames.value.speedCounting);
const hasNoResults = computed(() => isEmpty(mathResults) && isEmpty(speedCountingResults));
</script>

<template>
  <q-page padding>
    <EmptyResults v-if="hasNoResults" />

    <game-results
      title="Math Game"
      :results="mathResults"
    >
      <template #result-body="{ value }">
        <q-item-label>
          Time: {{ formatTime(value.time) }}
        </q-item-label>
        <q-item-label caption>
          Mistakes:
          <span class="text-red">{{
            getMistakeSolutionsCount(value.solutions)
          }}</span>/{{ value.solutions.length }} ({{ getMistakeSolutionsPercent(value.solutions) }}%)
        </q-item-label>
      </template>
    </game-results>

    <game-results
      title="Speed Counting Game"
      :results="speedCountingResults"
    >
      <template #result-body="{ value }">
        <q-item-label>
          Time: {{ formatTime(value.time) }}
        </q-item-label>
      </template>
    </game-results>
  </q-page>
</template>
