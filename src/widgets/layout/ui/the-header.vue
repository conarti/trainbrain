<script setup lang="ts">
import { RouteNames } from '@/shared/config/route-names';

const APP_TITLE = 'TrainBrain';
</script>

<template>
  <q-header class="bg-blue-grey-8">
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
        <q-route-tab
          :to="{ name: RouteNames.Results }"
          label="Results"
        />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>
