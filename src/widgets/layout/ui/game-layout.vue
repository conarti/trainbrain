<script setup lang="ts">
import { useGameProgress } from '@/entities/game';
import { RouteNames } from '@/shared/config/route-names';
import { BrandLogo } from '@/shared/ui/brand-logo';
import { APP_TITLE } from '../model';

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
        <div class="row justify-between">
          <q-btn
            class="q-mb-md"
            :to="{ name: RouteNames.Games }"
            icon="arrow_back"
            round
            color="primary"
            outline
          />
          <q-btn
            v-if="isStarted || isResumed"
            class="q-mb-md"
            icon="pause"
            round
            color="primary"
            outline
            @click="setProgressPaused"
          />
          <q-btn
            v-else-if="isPaused"
            class="q-mb-md"
            icon="play_arrow"
            round
            color="primary"
            outline
            @click="setProgressResumed"
          />
        </div>
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
