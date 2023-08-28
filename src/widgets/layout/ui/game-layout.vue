<script setup lang="ts">
import { ref } from 'vue';
import {
  GameProgress,
  useGameProgress,
} from '@/entities/game';
import { BrandLogo } from '@/shared/ui/brand-logo';
import { APP_TITLE } from '../config';
import GameLayoutActions from './game-layout-actions.vue';
import GameLayoutPause from './game-layout-pause.vue';

const {
  progress,
  setProgressStarted,
  setProgressShowingResults,
  setProgressPaused,
} = useGameProgress();

const game = ref<{ pause: () => void, play: () => void }>();

function handlePause() {
  setProgressPaused();
  game.value?.pause();
}

function handlePlay() {
  setProgressStarted();
  game.value?.play();
}
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
          :progress="progress"
          @pause="handlePause"
          @play="handlePlay"
        />
        <game-layout-pause
          :is-paused="progress === GameProgress.Paused"
          @play="handlePlay"
        />
        <router-view
          v-slot="{ Component }"
          :progress="progress"
          @start="setProgressStarted"
          @show-result="setProgressShowingResults"
        >
          <component
            :is="Component"
            ref="game"
          />
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
