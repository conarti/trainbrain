<script setup lang="ts">
import {
  toExercisesWithSolutionsAdapter,
  useExercisesTrainer,
  useGameProgress,
  useResults,
} from '../model';
import ShowTrainResults from './show-train-results.vue';
import SolveExercises from './solve-exercises.vue';
import StartGame from './start-game.vue';

const {
  isNotStarted,
  isStarted,
  isShowingResults,
  setProgressStarted,
  setProgressShowingResults,
} = useGameProgress();

const {
  gameTime,
  exercises,
  start: startExerciseTrainer,
  stop: stopExerciseTrainer,
} = useExercisesTrainer();

const {
  results,
  resultTime,
  updateResults,
} = useResults();

function start() {
  setProgressStarted();
  startExerciseTrainer();
}

function showResults(solutions: number[]) {
  stopExerciseTrainer();
  updateResults(toExercisesWithSolutionsAdapter(solutions, exercises.value), gameTime.value);
  setProgressShowingResults();
}
</script>

<template>
  <StartGame
    v-if="isNotStarted"
    @start="start"
  />
  <SolveExercises
    v-else-if="isStarted"
    :time="gameTime"
    :exercises="exercises"
    @solved="showResults"
  />
  <ShowTrainResults
    v-else-if="isShowingResults"
    :results="results"
    :time="resultTime"
  />
</template>
