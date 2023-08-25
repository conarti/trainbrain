<script setup lang="ts">
import { RouteNames } from '@/shared/config/route-names';
import { BrandLogo } from '@/shared/ui/brand-logo';
import { APP_TITLE } from '../model';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <BrandLogo size="32" />
        <q-toolbar-title shrink>
          {{ APP_TITLE }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

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
