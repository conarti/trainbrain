<script setup lang="ts">
import { ref } from 'vue';
import {
  GameProgress,
  useGameProgress,
} from '@/entities/game';
import GameWrapperHeader from './game-wrapper-header.vue';
import GameWrapperPause from './game-wrapper-pause.vue';

const {
  progress,
  setProgressStarted,
  setProgressShowingResults,
  setProgressPaused,
} = useGameProgress();

interface Game {
	pause: () => void;
	play: () => void;
}
const game = ref<Game>();

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
    <game-wrapper-header
      :progress="progress"
      @pause="handlePause"
      @play="handlePlay"
    />
    <q-page-container>
      <q-page padding>
        <game-wrapper-pause
          :is-visible="progress === GameProgress.Paused"
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
