<script setup lang="ts">
import { FullscreenDialog } from '@/shared/ui/fullscreen-dialog';
import RegisterForm from './register-form.vue';
</script>

<template>
  <fullscreen-dialog title="Register">
    <q-card-section>
      <register-form />
    </q-card-section>
  </fullscreen-dialog>
</template>
