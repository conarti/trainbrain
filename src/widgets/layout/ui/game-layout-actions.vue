<script setup lang="ts">
import { GameProgress } from '@/entities/game';
import { RouteNames } from '@/shared/config/route-names';

interface Props {
  progress: GameProgress;
}
type Emits = (event: 'pause' | 'resume') => void;
defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
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
      v-if="progress === GameProgress.Started"
      class="q-mb-md"
      icon="pause"
      round
      color="primary"
      outline
      @click="emit('pause')"
    />
    <q-btn
      v-else-if="progress === GameProgress.Paused"
      class="q-mb-md"
      icon="play_arrow"
      round
      color="primary"
      outline
      @click="emit('resume')"
    />
  </div>
</template>
