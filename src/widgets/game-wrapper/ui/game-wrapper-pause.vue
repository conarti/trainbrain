<script setup lang="ts">
import { useHapticFeedbackStore } from '@/features/haptic-feedback';

type Emits = (event: 'play') => void

const emit = defineEmits<Emits>();

interface Props {
	isVisible: boolean
}

defineProps<Props>();

const hapticFeedbackStore = useHapticFeedbackStore();

function play() {
  emit('play');
}
</script>

<template>
  <q-dialog
    :model-value="isVisible"
    full-width
    @hide="play"
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
          v-close-popup
          flat
          label="Continue"
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
