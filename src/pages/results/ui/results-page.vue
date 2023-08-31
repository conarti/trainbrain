<script setup lang="ts">
import { computed } from 'vue';
import {
  getMistakeSolutionsCount,
  getMistakeSolutionsPercent,
} from '@/widgets/games/math';
import { useSavedGames } from '@/features/saved-games';
import EmptyResults from './empty-results.vue';
import GameResults from './game-results.vue';

const { savedGames } = useSavedGames();

const hasNoResults = computed(() => !hasMathResults.value && !hasSpeedCountingResults.value);
const mathResults = computed(() => savedGames.value.math);
const speedCountingResults = computed(() => savedGames.value.speedCounting);
</script>

<template>
  <q-page padding>
    <EmptyResults v-if="hasNoResults" />

    <game-results
      title="Math Game"
      :results="mathResults"
    >
      <template #result-body="{ value }">
        Mistakes:
        <span class="text-red">{{
          getMistakeSolutionsCount(value.solutions)
        }}</span>/{{ value.solutions.length }} ({{ getMistakeSolutionsPercent(value.solutions) }}%)
      </template>
    </game-results>

    <game-results
      title="Speed Counting Game"
      :results="speedCountingResults"
    />
  </q-page>
</template>
