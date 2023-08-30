<script setup lang="ts">
import { GameLink } from '@/entities/game';
import { GAME_CARDS_LIST } from '../config';
</script>

<template>
  <q-page padding>
    <div class="row justify-center content-start q-col-gutter-sm">
      <div
        v-for="(card, idx) in GAME_CARDS_LIST"
        :key="idx"
        class="col-all"
      >
        <GameLink
          :route-name="card.routeName"
          :label="card.label"
          :icon="card.icon"
        />
      </div>
    </div>
  </q-page>
</template>
