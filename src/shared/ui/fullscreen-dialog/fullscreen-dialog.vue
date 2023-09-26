<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar';
import { computed } from 'vue';

interface Props {
  title?: string;
  /**
   * Adds a button with type "submit" and an event "submit". Wraps content in "q-form"
   */
  hasSubmit?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  hasSubmit: false,
});

const emit = defineEmits({
  ...useDialogPluginComponent.emitsObject,
  submit: () => true,
});

const {
  dialogRef,
  onDialogOK,
  onDialogHide,
  onDialogCancel,
} = useDialogPluginComponent();

const hasTitle = computed(() => props.title === '');

function handleSubmit() {
  if (!props.hasSubmit) {
    return;
  }

  emit('submit');
  onDialogOK();
}
</script>

<template>
  <q-dialog
    ref="dialogRef"
    maximized
    transition-show="jump-up"
    transition-hide="jump-down"
    @hide="onDialogHide"
  >
    <q-card class="q-dialog-plugin">
      <q-form @submit="handleSubmit">
        <q-toolbar class="bg-primary text-white relative-position justify-between">
          <q-btn
            flat
            round
            color="white"
            icon="arrow_back"
            @click="onDialogCancel"
          />
          <q-toolbar-title
            v-if="hasTitle"
            class="absolute-center q-pa-none"
            shrink
          >
            {{ title }}
          </q-toolbar-title>
          <q-btn
            v-if="hasSubmit"
            flat
            round
            color="white"
            icon="sym_r_done"
            type="submit"
          />
        </q-toolbar>

        <slot />
      </q-form>
    </q-card>
  </q-dialog>
</template>
