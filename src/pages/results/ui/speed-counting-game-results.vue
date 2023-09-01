<script setup lang="ts">
import type { SpeedCountingGameResult } from '@/features/saved-games';
import { formatTime } from '@/features/stopwatch';
import GameResults from './game-results.vue';

interface Props {
	results: SpeedCountingGameResult[];
}

defineProps<Props>();
</script>

<template>
  <game-results
    title="Speed Counting Game"
    :results="results"
  >
    <template #result-body="{ value }">
      <q-item-label>
        Time: {{ formatTime(value.time) }}
      </q-item-label>
    </template>
  </game-results>
</template>
