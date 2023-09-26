<script setup lang="ts">
import { ref } from 'vue';
import {
  InputFirstName,
  InputLastName,
} from '@/features/auth';
import { FullscreenDialog } from '@/shared/ui/fullscreen-dialog/';

const firstName = ref<string>();
const lastName = ref<string>();
</script>

<template>
  <fullscreen-dialog
    title="Edit Name"
    has-submit
  >
    <q-card-section>
      <InputFirstName v-model="firstName" />
      <InputLastName v-model="lastName" />
    </q-card-section>
  </fullscreen-dialog>
</template>
