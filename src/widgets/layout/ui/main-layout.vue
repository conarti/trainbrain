<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import { RouteNames } from '@/shared/config/route-names';
import TheHeader from './the-header.vue';

interface NavigationTab {
  to: RouteLocationRaw;
  label: string;
  icon: string;
}

const NAVIGATION_TABS: NavigationTab[] = [
  /* {
    to: { name: RouteNames.Train },
    label: 'Train',
    icon: 'sym_r_psychology',
  }, */
  {
    to: { name: RouteNames.Games },
    label: 'Games',
    icon: 'sym_r_category',
  },
  {
    to: { name: RouteNames.Results },
    label: 'Stats',
    icon: 'sym_r_bar_chart_4_bars',
  },
  {
    to: { name: RouteNames.Profile },
    label: 'Profile',
    icon: 'sym_r_account_circle',
  },
];
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
          v-for="(tab, index) in NAVIGATION_TABS"
          :key="index"
          :to="tab.to"
          :label="tab.label"
          :icon="tab.icon"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
