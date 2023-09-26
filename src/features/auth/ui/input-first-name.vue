<script setup lang="ts">
import { defineModel } from 'vue';
import { VALIDATION_RULES } from '@/shared/constants/validation-rules';

const firstName = defineModel<string>();
</script>

<template>
  <q-input
    v-model="firstName"
    label="First name"
    lazy-rules
    :rules="[VALIDATION_RULES.required]"
  />
</template>
