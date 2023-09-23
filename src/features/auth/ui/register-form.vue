<script setup lang="ts">
import { ref } from 'vue';
import { VALIDATION_RULES } from '@/shared/constants/validation-rules';
import InputPassword from './input-password.vue';
import InputUsername from './input-username.vue';

const firstname = ref<string>('');
const lastname = ref<string>('');
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
    <q-input
      v-model="firstname"
      label="Firstname"
      lazy-rules
      :rules="[VALIDATION_RULES.required]"
    />
    <q-input
      v-model="lastname"
      label="Lastname"
      lazy-rules
      :rules="[VALIDATION_RULES.required]"
    />
    <InputUsername v-model="username" />
    <InputPassword v-model="password" />
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
