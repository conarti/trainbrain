<script setup lang="ts">
import {
  GAME_NAMES,
  GameCard,
} from '@/entities/game';
</script>

<template>
  <q-page
    class="row flex-center q-gutter-md"
    padding
  >
    <GameCard
      class="col-10 col-sm"
      :route-name="GAME_NAMES.MATH"
      label="Math"
      icon="sym_r_calculate"
    />
    <GameCard
      class="col-10 col-sm"
      :route-name="GAME_NAMES.SPEED_COUNTING"
      label="Speed Counting"
      icon="sym_r_record_voice_over"
    />
  </q-page>
</template>
