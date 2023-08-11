<script setup lang="ts">
type Emits = (event: 'start') => void;

const emit = defineEmits<Emits>();

function handleStartClick() {
  emit('start');
}
</script>

<template>
  <q-card flat>
    <q-card-section>
      <h6 class="q-ma-none">
        Press 'Start' to play daily session
      </h6>
    </q-card-section>
    <q-card-actions
      align="stretch"
      vertical
    >
      <q-btn
        label="Start"
        push
        color="primary"
        @click="handleStartClick"
      />
    </q-card-actions>
  </q-card>
</template>
