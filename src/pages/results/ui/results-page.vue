<script setup lang="ts">
import isEmpty from 'lodash/isEmpty';
import { computed } from 'vue';
import { useSavedGames } from '@/features/saved-games';
import EmptyResults from './empty-results.vue';
import MathGameResults from './math-game-results.vue';
import SpeedCountingGameResults from './speed-counting-game-results.vue';

const { savedGames } = useSavedGames();

const mathResults = computed(() => savedGames.value.math);
const speedCountingResults = computed(() => savedGames.value.speedCounting);
const hasNoResults = computed(() => isEmpty(mathResults) && isEmpty(speedCountingResults));
</script>

<template>
  <q-page padding>
    <EmptyResults v-if="hasNoResults" />
    <MathGameResults :results="mathResults" />
    <SpeedCountingGameResults :results="speedCountingResults" />
  </q-page>
</template>
