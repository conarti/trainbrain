<script setup lang="ts">
import {
  computed,
  ref,
  defineModel,
} from 'vue';
import { VALIDATION_RULES } from '@/shared/constants/validation-rules';

const modelValue = defineModel<string>();
const isTypePassword = ref(true);

const iconName = computed(() => isTypePassword.value ? 'visibility_off' : 'visibility');
const inputType = computed(() => isTypePassword.value ? 'password' : 'text');

function toggleInputType() {
  isTypePassword.value = !isTypePassword.value;
}
</script>

<template>
  <q-input
    v-model="modelValue"
    label="Password"
    lazy-rules
    :type="inputType"
    :rules="[VALIDATION_RULES.password]"
  >
    <template #append>
      <q-icon
        :name="iconName"
        class="cursor-pointer"
        @click="toggleInputType"
      />
    </template>
  </q-input>
</template>
