<script setup lang="ts">
import { GameCard } from '@/entities/game';
import { GAME_CARDS_LIST } from '../config';
</script>

<template>
  <q-page
    class="row justify-center content-start q-gutter-md q-pa-md"
    padding
  >
    <div
      v-for="(card, idx) in GAME_CARDS_LIST"
      :key="idx"
      class="col-all"
    >
      <GameCard
        :route-name="card.routeName"
        :label="card.label"
        :icon="card.icon"
      />
    </div>
  </q-page>
</template>
