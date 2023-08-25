<script setup lang="ts">
import { StartGameCard } from '@/entities/game';
type Emits = (event: 'start') => void;
const emit = defineEmits<Emits>();

function start() {
  emit('start');
}
</script>

<template>
  <StartGameCard
    title="Speed Counting Game"
    description="Count out loud from 1 to 120 as fast as you can."
    icon="sym_r_record_voice_over"
    @start="start"
  >
    <template #additional-info>
      <p class="text-center q-mb-none">
        Be sure to pronounce each number clearly.
        <br>
        Press "DONE!" when you have finished the counting.
      </p>
    </template>
  </StartGameCard>
</template>
