<script setup lang="ts">
import { RouteNames } from '@/shared/config/route-names';

const APP_TITLE = 'TrainBrain';
</script>

<template>
  <q-toolbar>
    <q-toolbar-title>
      {{ APP_TITLE }}
    </q-toolbar-title>

    <q-space />

    <q-tabs shrink>
      <q-route-tab
        :to="{ name: RouteNames.Train }"
        label="Train"
      />
    </q-tabs>
  </q-toolbar>
</template>
