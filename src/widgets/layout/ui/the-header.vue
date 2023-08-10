<script setup lang="ts">
import { RouteNames } from '@/shared/config/route-names';

const APP_TITLE = 'TrainBrain App';
</script>

<template>
  <q-toolbar>
    <q-btn
      flat
      :label="APP_TITLE"
      disable
    />

    <q-space />

    <q-tabs shrink>
      <q-route-tab
        :to="{ name: RouteNames.Train }"
        label="Train"
      />
    </q-tabs>
  </q-toolbar>
</template>
