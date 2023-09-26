<script setup lang="ts">
import { defineModel } from 'vue';
import { VALIDATION_RULES } from '@/shared/constants/validation-rules';

const lastName = defineModel<string>();
</script>

<template>
  <q-input
    v-model="lastName"
    label="Last name"
    lazy-rules
    :rules="[VALIDATION_RULES.required]"
  />
</template>
