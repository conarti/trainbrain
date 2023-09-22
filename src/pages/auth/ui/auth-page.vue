<script setup lang="ts">
import AuthPageButtons from './auth-page-buttons.vue';
import AuthPageWelcome from './auth-page-welcome.vue';
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page
        padding
        class="bg-primary text-white"
      >
        <div class="column items-center q-pa-lg fullscreen">
          <q-space />
          <AuthPageWelcome />
          <q-space />
          <AuthPageButtons />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
