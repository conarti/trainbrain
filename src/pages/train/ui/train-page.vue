<script setup lang="ts">
import { MathGame } from '@/widgets/games/math';
import { SpeedCountingGame } from '@/widgets/games/speed-counting';
</script>

<template>
  <q-page
    class="q-gutter-sm"
    padding
  >
    <MathGame />
    <SpeedCountingGame />
  </q-page>
</template>
