<script setup lang="ts">
import { GameProgress } from '@/entities/game';
import { RouteNames } from '@/shared/config/route-names';

interface Props {
  progress: GameProgress;
}

defineProps<Props>();

type Emits = (event: 'pause' | 'play') => void;

const emit = defineEmits<Emits>();

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
        :to="{ name: RouteNames.Games }"
        icon="arrow_back"
        round
        flat
      />
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
