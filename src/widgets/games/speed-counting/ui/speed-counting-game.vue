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
import { GameProgress } from '@/entities/game';
import GameResults from './game-results.vue';
import PlayGame from './play-game.vue';
import StartGame from './start-game.vue';

interface Props {
  progress: GameProgress;
}
type Emits = (event: 'start' | 'showResult') => void;

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
watchEffect(() => {
  if (props.progress === GameProgress.Paused) {
    stopStopwatch();
  } else if (props.progress === GameProgress.Resumed) {
    startStopwatch();
  }
});

const isInProgress = computed(() => props.progress === GameProgress.Started
    || props.progress === GameProgress.Paused
    || props.progress === GameProgress.Resumed,
);

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
    v-if="progress === GameProgress.NotStarted"
    @start="handleStartGame"
  />
  <PlayGame
    v-else-if="isInProgress"
    :time="formatTime(gameTime)"
    @finish="handleFinishGame"
  />
  <GameResults
    v-else-if="progress === GameProgress.ShowingResults"
    :time="formatTime(gameTime)"
    @restart="handleStartGame"
  />
</template>
