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
      <q-page padding>
        <q-btn
          class="q-mb-md"
          :to="{ name: RouteNames.Games }"
          icon="arrow_back"
          round
          color="primary"
          outline
        />
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
