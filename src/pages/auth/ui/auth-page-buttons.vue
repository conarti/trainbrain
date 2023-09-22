<script setup lang="ts">
import { useAuthDialog } from '@/features/auth';

const {
  openLogin,
  openRegister,
} = useAuthDialog();
</script>

<template>
  <div class="column items-stretch q-gutter-sm q-mt-auto">
    <p>
      Authorization is required to use the application
    </p>

    <q-btn
      padding="sm md"
      unelevated
      rounded
      color="white"
      text-color="primary"
      @click="openRegister"
    >
      Register
    </q-btn>

    <q-btn
      padding="sm md"
      outline
      rounded
      color="white"
      @click="openLogin"
    >
      Login
    </q-btn>
  </div>
</template>
