<script setup lang="ts">
import { RouteNames } from '@/shared/config/route-names';
import { BrandLogo } from '@/shared/ui/brand-logo';

const APP_TITLE = 'TrainBrain';
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
      <q-tabs>
        <q-route-tab
          :to="{ name: RouteNames.Train }"
          label="Train"
        />
        <q-route-tab
          :to="{ name: RouteNames.Results }"
          label="Results"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
