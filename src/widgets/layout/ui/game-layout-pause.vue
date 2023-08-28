<script setup lang="ts">
type Emits = (event: 'play') => void

const emit = defineEmits<Emits>();

interface Props {
	isVisible: boolean
}

defineProps<Props>();

function handleHide() {
  emit('play');
}
</script>

<template>
  <q-dialog
    :model-value="isVisible"
    full-width
    @hide="handleHide"
  >
    <q-card>
      <q-card-section class="row items-center">
        <h6 class="q-ma-none">
          Pause
        </h6>
      </q-card-section>

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
