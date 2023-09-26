<script setup lang="ts">
import { ref } from 'vue';
import InputFirstName from './input-first-name.vue';
import InputLastName from './input-last-name.vue';
import InputPassword from './input-password.vue';
import InputUsername from './input-username.vue';

const firstName = ref<string>('');
const lastName = ref<string>('');
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
    <InputFirstName v-model="firstName" />
    <InputLastName v-model="lastName" />
    <InputUsername v-model="username" />
    <InputPassword
      v-model="password"
      autocomplete="new-password"
    />
    <q-btn
      type="submit"
      push
      color="primary"
      padding="sm md"
      rounded
    >
      Sign Up
    </q-btn>
  </q-form>
</template>
