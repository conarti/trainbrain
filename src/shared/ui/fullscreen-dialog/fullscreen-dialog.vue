<script setup lang="ts">
import isNil from 'lodash/isNil';
import { useDialogPluginComponent } from 'quasar';
import { computed } from 'vue';

interface Props {
  title?: string;
}

const props = defineProps<Props>();

defineEmits([
  ...useDialogPluginComponent.emits,
]);

const {
  dialogRef,
  onDialogHide,
  onDialogCancel,
} = useDialogPluginComponent();

const hasTitle = computed(() => !isNil(props.title));
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
      <q-toolbar class="bg-primary text-white relative-position">
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
      </q-toolbar>

      <slot />
    </q-card>
  </q-dialog>
</template>
