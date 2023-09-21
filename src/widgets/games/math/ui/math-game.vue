<script setup lang="ts">
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { GameWrapper } from '@/widgets/game-wrapper'; // todo
import {
  toExercisesWithSolutionsAdapter,
  useExercisesTrainer,
  useResults,
} from '../model';
import ShowTrainResults from './show-train-results.vue';
import SolveExercises from './solve-exercises.vue';
import StartGame from './start-game.vue';

const {
  gameTime,
  exercises,
  start,
  resume,
  stop,
} = useExercisesTrainer();

const {
  results,
  resultTime,
  updateResults,
} = useResults();

function handleGameStart(settings: number) {
  start(settings);
}

function handleGamePause() {
  stop();
}

function handleGameResume() {
  resume();
}

function handleGameSolved(solutions: number[]) {
  stop();
  const exerciseWithSolution = toExercisesWithSolutionsAdapter(solutions, exercises.value);
  updateResults(exerciseWithSolution, gameTime.value);
}
</script>

<template>
  <game-wrapper
    @start="handleGameStart"
    @pause="handleGamePause"
    @resume="handleGameResume"
    @show-results="handleGameSolved"
  >
    <template #start="{ handleStart }">
      <StartGame @start="handleStart" />
    </template>

    <template #trainer="{ handleSolved }">
      <SolveExercises
        :time="gameTime"
        :exercises="exercises"
        @solved="handleSolved"
      />
    </template>

    <template #results="{ handleRestart }">
      <ShowTrainResults
        :results="results"
        :time="resultTime"
        @restart="handleRestart"
      />
    </template>
  </game-wrapper>
</template>
