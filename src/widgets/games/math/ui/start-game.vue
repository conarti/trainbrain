<script setup lang="ts">
import isNumber from 'lodash/isNumber';
import { ref } from 'vue';
import { EXERCISES_COUNT_DEFAULT } from '../config';

type Emits = (event: 'start', exercisesCount: number) => void;

const emit = defineEmits<Emits>();

const exercisesCount = ref<number>(EXERCISES_COUNT_DEFAULT);
const exercisesCountRef = ref();
const settingsExpanded = ref(false);

function start() {
  emit('start', exercisesCount.value);
}

function handleStart() {
  exercisesCountRef.value?.validate();

  if (exercisesCountRef.value?.hasError) {
    return;
  }

  start();
}
</script>

<template>
  <q-card
    flat
    bordered
    tag="form"
    @submit.prevent.stop="handleStart"
  >
    <q-card-section>
      <div class="flex flex-center">
        <q-icon
          class="q-mr-sm"
          size="sm"
          name="sym_r_calculate"
        />
        <h5 class="q-ma-none text-center">
          Math Game
        </h5>
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn
        class="col"
        label="Start"
        push
        color="primary"
        type="submit"
      />
      <q-btn
        class="col"
        label="Settings"
        flat
        :icon="settingsExpanded ? 'sym_r_keyboard_arrow_up' : 'sym_r_keyboard_arrow_down'"
        @click="settingsExpanded = !settingsExpanded"
      />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="settingsExpanded">
        <q-separator />
        <q-card-section>
          <q-input
            ref="exercisesCountRef"
            v-model.number="exercisesCount"
            label="Exercises count"
            type="number"
            :rules="[(value) => isNumber(value) || 'Please write valid number']"
          />
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>
