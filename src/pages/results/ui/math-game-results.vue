<script setup lang="ts">
import {
  getMistakeSolutionsCount,
  getMistakeSolutionsPercent,
} from '@/widgets/games/math';
import type { MathGameResult } from '@/features/saved-games';
import { formatTime } from '@/features/stopwatch';
import GameResults from './game-results.vue';

interface Props {
	results: MathGameResult[];
}

defineProps<Props>();
</script>

<template>
  <game-results
    title="Math Game"
    :results="results"
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
</template>
