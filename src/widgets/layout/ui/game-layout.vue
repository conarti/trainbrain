<script setup lang="ts">
import { computed } from 'vue';
import {
  GameProgress,
  useGameProgress,
} from '@/entities/game';
import { BrandLogo } from '@/shared/ui/brand-logo';
import { APP_TITLE } from '../config';
import GameLayoutActions from './game-layout-actions.vue';

const {
  progress,
  setProgressStarted,
  setProgressShowingResults,
  setProgressPaused,
  setProgressResumed,
} = useGameProgress();

const isPlaying = computed(() => progress.value === GameProgress.Started || progress.value === GameProgress.Resumed);
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <BrandLogo size="32" />
        <q-toolbar-title shrink>
          {{ APP_TITLE }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page padding>
        <game-layout-actions
          :is-in-progress="isPlaying"
          :is-paused="progress === GameProgress.Paused"
          @pause="setProgressPaused"
          @resume="setProgressResumed"
        />
        <h6
          v-show="progress === GameProgress.Paused"
          class="text-center"
        >
          The game is paused!
        </h6>
        <router-view
          v-show="progress !== GameProgress.Paused"
          :is-not-started="progress !== GameProgress.NotStarted"
          :is-started="progress !== GameProgress.Started"
          :is-paused="progress !== GameProgress.Paused"
          :is-resumed="progress !== GameProgress.Resumed"
          :is-showing-results="progress !== GameProgress.ShowingResults"
          @start="setProgressStarted"
          @show-result="setProgressShowingResults"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
