<script setup lang="ts">
import { GameCard } from '@/entities/game';
import { GAME_CARDS_LIST } from '../config';
</script>

<template>
  <q-page
    class="row flex-center q-gutter-md"
    padding
  >
    <GameCard
      v-for="(card, idx) in GAME_CARDS_LIST"
      :key="idx"
      class="col-10 col-sm"
      :route-name="card.routeName"
      :label="card.label"
      :icon="card.icon"
    />
  </q-page>
</template>
