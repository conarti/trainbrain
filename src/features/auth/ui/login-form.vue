<script setup lang="ts">
import { ref } from 'vue';
import InputPassword from './input-password.vue';
import InputUsername from './input-username.vue';

const username = ref<string>('');
const password = ref<string>('');

function handleSubmit() {
  // TODO
}
</script>

<template>
  <q-form
    class="column q-gutter-y-md"
    @submit="handleSubmit"
  >
    <InputUsername v-model="username" />
    <InputPassword v-model="password" />
    <q-btn
      type="submit"
      push
      color="primary"
      padding="sm md"
      rounded
    >
      Sign In
    </q-btn>
  </q-form>
</template>
