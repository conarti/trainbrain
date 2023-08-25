<script setup lang="ts">
import { useGameProgress } from '@/entities/game';
import {
  toExercisesWithSolutionsAdapter,
  useExercisesTrainer,
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

function start(exercisesCount: number) {
  setProgressStarted();
  startExerciseTrainer(exercisesCount);
}

function showResults(solutions: number[]) {
  stopExerciseTrainer();
  const exerciseWithSolution = toExercisesWithSolutionsAdapter(solutions, exercises.value);
  updateResults(exerciseWithSolution, gameTime.value);
  setProgressShowingResults();
}

function handleRestart() {
  const solvedExercisesCount = exercises.value.length;
  start(solvedExercisesCount);
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
    @restart="handleRestart"
  />
</template>
