<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  icon: string;
}

defineProps<Props>();

type Emits = (event: 'submit') => void;

const emit = defineEmits<Emits>();

function handleFormSubmit() {
  emit('submit');
}
</script>

<template>
  <q-card
    flat
    bordered
    tag="form"
    @submit.prevent.stop="handleFormSubmit"
  >
    <q-card-section>
      <div class="flex flex-center q-mb-sm">
        <q-icon
          class="q-mr-sm"
          size="sm"
          :name="icon"
        />
        <h5 class="q-ma-none text-center">
          {{ title }}
        </h5>
      </div>
      <p class="text-subtitle2 text-center">
        {{ description }}
      </p>
      <slot name="additional-info" />
    </q-card-section>
    <q-card-actions>
      <q-btn
        class="col"
        label="Start"
        push
        color="primary"
        type="submit"
      />
    </q-card-actions>
  </q-card>
</template>
