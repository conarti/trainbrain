<script setup lang="ts">
import { RouteNames } from '@/shared/config/route-names';
import type { GAME_NAMES } from '../model';

interface Props {
  label: string,
  routeName: GAME_NAMES,
  icon: string,
}

defineProps<Props>();
</script>

<template>
  <router-link
    class="text-black"
    :to="{ name: RouteNames.Game, params: { name: routeName }}"
  >
    <q-card
      class="game-card"
      flat
      bordered
    >
      <q-card-section class="flex column flex-center full-height">
        <h6 class="q-mt-none q-mb-md text-center">
          {{ label }}
        </h6>
        <q-icon
          size="xl"
          :name="icon"
        />
      </q-card-section>
    </q-card>
  </router-link>
</template>

<style lang="scss" scoped>
.game-card {
  height: 200px;
}
</style>
