<script setup lang="ts">
import {
  QLayout,
  QPageContainer,
} from 'quasar';
import TheHeader from './the-header.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <TheHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
