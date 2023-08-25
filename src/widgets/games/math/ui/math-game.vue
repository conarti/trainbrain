<script setup lang="ts">
import {
  computed,
  watchEffect,
} from 'vue';
import {
  toExercisesWithSolutionsAdapter,
  useExercisesTrainer,
  useResults,
} from '../model';
import ShowTrainResults from './show-train-results.vue';
import SolveExercises from './solve-exercises.vue';
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
    stopExerciseTrainer();
  } else if (props.isResumed) {
    resumeExerciseTrainer();
  }
});

const isInProgress = computed(() => props.isStarted || props.isPaused || props.isResumed);

const {
  gameTime,
  exercises,
  start: startExerciseTrainer,
  resume: resumeExerciseTrainer,
  stop: stopExerciseTrainer,
} = useExercisesTrainer();

const {
  results,
  resultTime,
  updateResults,
} = useResults();

function start(exercisesCount: number) {
  emit('start');
  startExerciseTrainer(exercisesCount);
}

function showResults(solutions: number[]) {
  stopExerciseTrainer();
  const exerciseWithSolution = toExercisesWithSolutionsAdapter(solutions, exercises.value);
  updateResults(exerciseWithSolution, gameTime.value);
  emit('showResult');
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
    v-else-if="isInProgress"
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
