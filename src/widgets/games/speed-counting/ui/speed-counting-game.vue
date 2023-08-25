<script setup lang="ts">
import {
  computed,
  watchEffect,
} from 'vue';
import { useSavedGames } from '@/features/saved-games';
import {
  formatTime,
  useStopwatch,
} from '@/features/stopwatch';
import GameResults from './game-results.vue';
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

const isInProgress = computed(() => props.isStarted || props.isPaused || props.isResumed);

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
    v-else-if="isInProgress"
    :time="formatTime(gameTime)"
    @finish="handleFinishGame"
  />
  <GameResults
    v-else-if="isShowingResults"
    :time="formatTime(gameTime)"
    @restart="handleStartGame"
  />
</template>
