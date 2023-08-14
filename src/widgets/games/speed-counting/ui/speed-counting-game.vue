<script setup lang="ts">
import { useSavedGames } from '@/features/saved-games';
import {
  formatTime,
  useStopwatch,
} from '@/features/stopwatch';
import {
  GameCard,
  useGameStore,
} from '@/entities/game';

const gameStore = useGameStore();
const {
  time: gameTime,
  start: startStopwatch,
  stop: stopStopwatch,
  reset: resetStopwatch,
} = useStopwatch();
const { saveGameResult } = useSavedGames();

function handleStartGame() {
  gameStore.start();
  resetStopwatch();
  startStopwatch();
}

function handleFinishGame() {
  gameStore.finish();
  stopStopwatch();
  saveGameResult('speedCounting', {
    date: Date.now(),
    time: gameTime.value,
  });
}
</script>

<template>
  <GameCard
    v-if="gameStore.isGameNotStarted"
    title="Speed Counting Game"
    description="Count out loud from 1 to 120 as fast as you can."
    icon="sym_r_123"
    @start="handleStartGame"
  >
    <template #additional-info>
      <p class="text-center q-mb-none">
        Be sure to pronounce each number clearly.
        <br>
        Press "DONE!" when you have finished the counting.
      </p>
    </template>
  </GameCard>
  <q-card
    v-else-if="gameStore.isGameInProgress"
    flat
    bordered
  >
    <q-card-section>
      <h4 class="q-ma-none q-mb-md text-center">
        {{ formatTime(gameTime) }}
      </h4>
    </q-card-section>
    <q-card-actions>
      <q-btn
        class="col"
        label="Done"
        push
        color="primary"
        @click="handleFinishGame"
      />
    </q-card-actions>
  </q-card>
  <q-card
    v-else-if="gameStore.isGameFinished"
    flat
    bordered
  >
    <q-card-section>
      <h6 class="q-ma-none q-mb-md text-center">
        Your time is {{ formatTime(gameTime) }}
      </h6>
    </q-card-section>
    <q-card-actions>
      <q-btn
        class="col"
        label="Try again"
        push
        color="primary"
        @click="handleStartGame"
      />
    </q-card-actions>
  </q-card>
</template>
