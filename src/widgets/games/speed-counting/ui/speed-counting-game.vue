<script setup lang="ts">
import { watchEffect } from 'vue';
import { useSavedGames } from '@/features/saved-games';
import {
  formatTime,
  useStopwatch,
} from '@/features/stopwatch';
import PlayGame from './play-game.vue';
import StartGame from './start-game.vue';

interface Props {
  isNotStarted: boolean;
  isStarted: boolean;
  isPaused: boolean;
  isResumed: boolean;
  isShowingResults: boolean;
}
type Emits = (event: 'start' | 'showResult') => void;

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
watchEffect(() => {
  if (props.isPaused) {
    stopStopwatch();
  } else if (props.isResumed) {
    startStopwatch();
  }
});

const {
  time: gameTime,
  start: startStopwatch,
  stop: stopStopwatch,
  reset: resetStopwatch,
} = useStopwatch();
const { save } = useSavedGames();

function handleStartGame() {
  emit('start');
  resetStopwatch();
  startStopwatch();
}

function handleFinishGame() {
  emit('showResult');
  stopStopwatch();
  save('speedCounting', {
    date: Date.now(),
    time: gameTime.value,
  });
}
</script>

<template>
  <StartGame
    v-if="isNotStarted"
    @start="handleStartGame"
  />
  <PlayGame
    v-else-if="isStarted || isPaused || isResumed"
    :time="formatTime(gameTime)"
    @finish="handleFinishGame"
  />
  <q-card
    v-else-if="isShowingResults"
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
