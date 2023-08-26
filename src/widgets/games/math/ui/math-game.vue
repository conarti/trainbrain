<script setup lang="ts">
import { computed } from 'vue';
import { GameProgress } from '@/entities/game';
import {
  toExercisesWithSolutionsAdapter,
  useExercisesTrainer,
  useResults,
} from '../model';
import ShowTrainResults from './show-train-results.vue';
import SolveExercises from './solve-exercises.vue';
import StartGame from './start-game.vue';

interface Props {
  progress: GameProgress;
}
type Emits = (event: 'start' | 'showResult') => void;

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isInProgress = computed(() => props.progress === GameProgress.Started || props.progress === GameProgress.Paused);

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

defineExpose({
  play: resumeExerciseTrainer,
  pause: stopExerciseTrainer,
});
</script>

<template>
  <StartGame
    v-if="progress === GameProgress.NotStarted"
    @start="start"
  />
  <SolveExercises
    v-else-if="isInProgress"
    :time="gameTime"
    :exercises="exercises"
    @solved="showResults"
  />
  <ShowTrainResults
    v-else-if="progress === GameProgress.ShowingResults"
    :results="results"
    :time="resultTime"
    @restart="handleRestart"
  />
</template>
