<script setup lang="ts">
import { useRouter } from 'vue-router';
import { GameProgress } from '@/entities/game';

interface Props {
  progress: GameProgress;
}

defineProps<Props>();

interface Emits {
  (event: 'play'): void
  (event: 'pause'): void
}

const emit = defineEmits<Emits>();

const router = useRouter();

function pause() {
  emit('pause');
}

function play() {
  emit('play');
}
</script>

<template>
  <q-header>
    <q-toolbar>
      <q-btn
        icon="arrow_back"
        round
        flat
        @click="router.back()"
      />
      <q-space />
      <q-btn
        v-if="progress === GameProgress.Started"
        icon="pause"
        round
        flat
        @click="pause"
      />
      <q-btn
        v-else-if="progress === GameProgress.Paused"
        icon="play_arrow"
        round
        flat
        @click="play"
      />
    </q-toolbar>
  </q-header>
</template>
