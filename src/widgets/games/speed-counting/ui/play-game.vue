<script setup lang="ts">
interface Props {
  time: string;
}

defineProps<Props>();

type Emits = (event: 'finish') => void;

const emit = defineEmits<Emits>();

function finish() {
  emit('finish');
}
</script>

<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <h4 class="q-ma-none q-mb-md text-center">
        {{ time }}
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
