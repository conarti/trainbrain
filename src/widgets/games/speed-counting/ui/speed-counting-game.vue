<script setup lang="ts">
import { GameWrapper } from '@/widgets/game-wrapper';
import {
  type SavedGameResult,
  useSavedGames,
} from '@/features/saved-games';
import { useStopwatch } from '@/features/stopwatch';
import GameResults from './game-results.vue';
import PlayGame from './play-game.vue';
import StartGame from './start-game.vue';

const {
  time: gameTime,
  start: startStopwatch,
  stop: stopStopwatch,
  reset: resetStopwatch,
} = useStopwatch();
const { save } = useSavedGames();

function handleGameStart() {
  resetStopwatch();
  startStopwatch();
}

function toSpeedCountingResult({
  todayDate,
  result,
}: {
  todayDate: ReturnType<typeof Date.now>,
  result: number,
}): SavedGameResult<'speedCounting'> {
  return {
    date: todayDate,
    time: result,
  };
}

function handleShowResults(result: any) {
  stopStopwatch();

  const todayDate = Date.now();
  save('speedCounting', toSpeedCountingResult({
    todayDate,
    result,
  }));
}

function handleGameResume() {
  startStopwatch();
}

function handleGamePause() {
  stopStopwatch();
}
</script>

<template>
  <game-wrapper
    @start="handleGameStart"
    @resume="handleGameResume"
    @pause="handleGamePause"
    @show-results="handleShowResults"
  >
    <template #start="{ handleStart }">
      <StartGame @start="handleStart" />
    </template>

    <template #trainer="{ handleSolved }">
      <PlayGame
        :time="gameTime"
        @finish="handleSolved"
      />
    </template>

    <template #results="{ handleRestart }">
      <GameResults
        :time="gameTime"
        @restart="handleRestart"
      />
    </template>
  </game-wrapper>
</template>
