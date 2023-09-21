<script setup lang="ts">
import {
  GameProgress,
  useGameProgress,
} from '@/entities/game';
import GameWrapperHeader from './game-wrapper-header.vue';

interface Emits {
  (event: 'start', settings: any): void; // todo
  (event: 'pause'): void;
  (event: 'resume'): void;
  (event: 'show-results', results: any): void; // todo
}

const emit = defineEmits<Emits>();

const {
  progress,
  setProgressNotStarted,
  setProgressStarted,
  setProgressShowingResults,
  setProgressPaused,
} = useGameProgress();

function pause() {
  emit('pause');
}

function handlePause() {
  setProgressPaused();
  pause();
}

function start(settings: any /* todo */) {
  emit('start', settings);
}

function handleStart(settings: any /* todo */) {
  setProgressStarted();
  start(settings);
}

function resume() {
  emit('resume');
}

function handleResume() {
  setProgressStarted();
  resume();
}

function showResults(results: any /* todo */) {
  emit('show-results', results);
}

function handleSolved(results: any /* todo */) {
  setProgressShowingResults();
  showResults(results);
}

function handleRestart() {
  setProgressNotStarted();
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <game-wrapper-header
      :progress="progress"
      @pause="handlePause"
      @resume="handleResume"
    />
    <q-page-container>
      <q-page padding>
        <slot
          v-if="progress === GameProgress.NotStarted"
          name="start"
          :handle-start="handleStart"
        />
        <slot
          v-else-if="progress === GameProgress.Started || progress === GameProgress.Paused"
          name="trainer"
          :handle-solved="handleSolved"
        />
        <slot
          v-else-if="progress === GameProgress.ShowingResults"
          name="results"
          :handle-restart="handleRestart"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
