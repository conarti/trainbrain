<script setup lang="ts">
import {
  GameCard,
  useGameStore,
} from '@/entities/game';

const { start } = useGameStore();
</script>

<template>
  <GameCard
    title="Speed Counting Game"
    description="Count out loud from 1 to 120 as fast as you can."
    icon="sym_r_123"
    @start="start"
  >
    <template #additional-info>
      <p class="text-center q-mb-none">
        Be sure to pronounce each number clearly.
        <br>
        Press "DONE!" when you have finished the counting.
      </p>
    </template>
  </GameCard>
</template>
