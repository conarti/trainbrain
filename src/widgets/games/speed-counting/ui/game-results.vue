<script setup lang="ts">
import { formatTime } from '@/features/stopwatch';

interface Props {
  time: number;
}

defineProps<Props>();

type Emits = (event: 'restart') => void;

const emit = defineEmits<Emits>();

function restart() {
  emit('restart');
}
</script>

<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <h6 class="q-ma-none q-mb-md text-center">
        Your time is {{ formatTime(time) }}
      </h6>
    </q-card-section>
    <q-card-actions>
      <q-btn
        class="col"
        label="Try again"
        push
        color="primary"
        @click="restart"
      />
    </q-card-actions>
  </q-card>
</template>
