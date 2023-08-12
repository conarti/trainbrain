<script setup lang="ts">
import { RouteNames } from '@/shared/config/route-names';
import { BrandLogo } from '@/shared/ui/brand-logo';

const APP_TITLE = 'TrainBrain';
</script>

<template>
  <q-header>
    <q-toolbar>
      <BrandLogo size="32" />
      <q-toolbar-title shrink>
        {{ APP_TITLE }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
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
</template>
