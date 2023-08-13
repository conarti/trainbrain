<script setup lang="ts">
import { ref } from 'vue';
import { VALIDATION_RULES } from '@/shared/constants/validation-rules';
import { EXERCISES_COUNT_DEFAULT } from '../config';

type Emits = (event: 'start', exercisesCount: number) => void;

const emit = defineEmits<Emits>();

const exercisesCount = ref<number>(EXERCISES_COUNT_DEFAULT);
const exercisesCountRef = ref();
const settingsExpanded = ref(false);

function start() {
  emit('start', exercisesCount.value);
}

function hasInvalidSettings() {
  exercisesCountRef.value?.validate();
  return exercisesCountRef.value?.hasError;
}

function handleStart() {
  if (hasInvalidSettings()) {
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
      <div class="flex flex-center q-mb-sm">
        <q-icon
          class="q-mr-sm"
          size="sm"
          name="sym_r_calculate"
        />
        <h5 class="q-ma-none text-center">
          Math Game
        </h5>
      </div>
      <p class="text-subtitle2 text-center">
        Solve simple math exercises against the clock.
      </p>
      <p class="text-center q-mb-none">
        Recommended exercises count is 50.
        <br>
        Play this game every day at same time.
        (I recommend do it after breakfast for better results)
      </p>
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
            :rules="[VALIDATION_RULES.number]"
          />
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>
