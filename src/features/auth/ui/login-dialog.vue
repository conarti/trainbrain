<script setup lang="ts">
import { FullscreenDialog } from '@/shared/ui/fullscreen-dialog';
import LoginForm from './login-form.vue';
</script>

<template>
  <fullscreen-dialog title="Login">
    <q-card-section>
      <login-form />
    </q-card-section>
  </fullscreen-dialog>
</template>
