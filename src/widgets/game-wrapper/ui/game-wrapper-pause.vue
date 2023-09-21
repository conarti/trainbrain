<script setup lang="ts">
import { useHapticFeedbackStore } from '@/features/haptic-feedback';

interface Emits {
  (event: 'resume'): void;
  (event: 'exit'): void;
}

const emit = defineEmits<Emits>();

interface Props {
	isVisible: boolean
}

defineProps<Props>();

const hapticFeedbackStore = useHapticFeedbackStore();

function resume() {
  emit('resume');
}

function exit() {
  emit('exit');
}
</script>

<template>
  <q-dialog
    :model-value="isVisible"
    full-width
    no-backdrop-dismiss
    no-esc-dismiss
  >
    <q-card>
      <q-card-section class="row items-center">
        <h6 class="q-ma-none">
          Pause
        </h6>
      </q-card-section>

      <q-list>
        <q-item
          v-ripple
          tag="label"
        >
          <q-item-section>
            <q-item-label>Enable vibration</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="hapticFeedbackStore.isEnabled" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Exit"
          color="red"
          @click="exit"
        />
        <q-btn
          flat
          label="Continue"
          color="primary"
          @click="resume"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
