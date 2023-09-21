<script setup lang="ts">
import { formatTime } from '@/features/stopwatch';

interface Props {
  time: number;
}

const props = defineProps<Props>();

interface Emits {
  (event: 'finish', results: number): void;
}

const emit = defineEmits<Emits>();

function finish() {
  emit('finish', props.time);
}
</script>

<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <h4 class="q-ma-none q-mb-md text-center">
        {{ formatTime(time) }}
      </h4>
    </q-card-section>
    <q-card-actions>
      <q-btn
        class="col"
        label="Done"
        push
        color="primary"
        @click="finish"
      />
    </q-card-actions>
  </q-card>
</template>
