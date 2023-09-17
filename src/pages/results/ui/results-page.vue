<script setup lang="ts">
import isEmpty from 'lodash/isEmpty';
import { computed } from 'vue';
import { useSavedGames } from '@/features/saved-games';
import EmptyResults from './empty-results.vue';
import MathGameResults from './math-game-results.vue';
import SpeedCountingGameResults from './speed-counting-game-results.vue';

const { savedGames } = useSavedGames();

const mathResults = computed(() => savedGames.value.math);
const hasMathResults = computed(() => !isEmpty(mathResults.value));
const speedCountingResults = computed(() => savedGames.value.speedCounting);
const hasSpeedCountingResults = computed(() => !isEmpty(speedCountingResults.value));
const hasNoResults = computed(() => !hasMathResults.value && !hasSpeedCountingResults.value);
</script>

<template>
  <q-page padding>
    <EmptyResults v-if="hasNoResults" />
    <MathGameResults
      v-if="hasMathResults"
      :results="mathResults"
    />
    <SpeedCountingGameResults
      v-if="hasSpeedCountingResults"
      :results="speedCountingResults"
    />
  </q-page>
</template>
