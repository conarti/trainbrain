import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IS_HAPTICS_ENABLED_DEFAULT } from '../config';

export const useHapticFeedbackStore = defineStore('haptic-feedback', () => {
  const isEnabled = ref(IS_HAPTICS_ENABLED_DEFAULT);

  return {
    isEnabled,
  };
});
