<script setup lang="ts">
import { RouteNames } from '@/shared/config/route-names';
import TheHeader from './the-header.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <TheHeader />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs
        dense
        narrow-indicator
        no-caps
      >
        <q-route-tab
          :to="{ name: RouteNames.Train }"
          label="Train"
          icon="sym_r_psychology"
        />
        <q-route-tab
          :to="{ name: RouteNames.Games }"
          label="Games"
          icon="sym_r_category"
        />
        <q-route-tab
          :to="{ name: RouteNames.Results }"
          label="Stats"
          icon="sym_r_bar_chart_4_bars"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
