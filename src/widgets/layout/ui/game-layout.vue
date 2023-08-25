<script setup lang="ts">
import { computed } from 'vue';
import { useGameProgress } from '@/entities/game';
import { BrandLogo } from '@/shared/ui/brand-logo';
import { APP_TITLE } from '../model';
import GameLayoutActions from './game-layout-actions.vue';

const {
  isStarted,
  isNotStarted,
  isPaused,
  isResumed,
  isShowingResults,
  setProgressStarted,
  setProgressShowingResults,
  setProgressPaused,
  setProgressResumed,
} = useGameProgress();

const isPlaying = computed(() => isStarted.value || isResumed.value);
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
          :is-paused="isPaused"
          @pause="setProgressPaused"
          @resume="setProgressResumed"
        />
        <router-view
          :is-not-started="isNotStarted"
          :is-started="isStarted"
          :is-paused="isPaused"
          :is-resumed="isResumed"
          :is-showing-results="isShowingResults"
          @start="setProgressStarted"
          @show-result="setProgressShowingResults"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
