<script setup lang="ts">
import { defineModel } from 'vue';
import { VALIDATION_RULES } from '@/shared/constants/validation-rules';

const username = defineModel<string>();
</script>

<template>
  <q-input
    v-model="username"
    label="Username"
    lazy-rules
    :rules="[VALIDATION_RULES.username]"
  />
</template>
