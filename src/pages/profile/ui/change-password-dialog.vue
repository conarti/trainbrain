<script setup lang="ts">
import { ref } from 'vue';
import { InputPassword } from '@/features/auth';
import { FullscreenDialog } from '@/shared/ui/fullscreen-dialog/';

const oldPassword = ref<string>();
const newPassword = ref<string>();
</script>

<template>
  <fullscreen-dialog
    title="Edit Name"
    has-submit
  >
    <q-card-section>
      <InputPassword
        v-model="oldPassword"
        autocomplete="current-password"
        label="Current password"
      />
      <InputPassword
        v-model="newPassword"
        autocomplete="new-password"
        label="New password"
      />
    </q-card-section>
  </fullscreen-dialog>
</template>
