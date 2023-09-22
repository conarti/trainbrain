<script setup lang="ts">
import { useRouter } from 'vue-router';
import { GameProgress } from '@/entities/game';
import GameWrapperPause from './game-wrapper-pause.vue';

interface Props {
  progress: GameProgress;
}

defineProps<Props>();

interface Emits {
  (event: 'pause'): void
  (event: 'resume'): void
  (event: 'exit'): void
}

const emit = defineEmits<Emits>();

const router = useRouter();

function pause() {
  emit('pause');
}

function resume() {
  emit('resume');
}

function exit() {
  emit('exit');
}
</script>

<template>
  <q-header>
    <q-toolbar>
      <q-btn
        v-if="progress === GameProgress.NotStarted || progress === GameProgress.ShowingResults"
        icon="arrow_back"
        round
        flat
        @click="router.back()"
      />
      <q-space />
      <q-btn
        v-if="progress === GameProgress.Started || progress === GameProgress.Paused"
        icon="pause"
        round
        flat
        @click="pause"
      />
    </q-toolbar>
  </q-header>

  <game-wrapper-pause
    :is-visible="progress === GameProgress.Paused"
    @resume="resume"
    @exit="exit"
  />
</template>
