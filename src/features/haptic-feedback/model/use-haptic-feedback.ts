import {
  ref,
  watchEffect,
} from 'vue';
import { EmptyHapticFeedback } from './empty-haptic-feedback';
import { HapticFeedback } from './haptic-feedback';
import type { BaseHapticFeedback } from './types';
import { useHapticFeedbackStore } from './use-haptic-feedback-store';

export function useHapticFeedback() {
  const hapticInstance = ref<BaseHapticFeedback>(new EmptyHapticFeedback());
  const store = useHapticFeedbackStore();

  function getHapticInstance(isHapticsEnabled: boolean) {
    if (isHapticsEnabled) {
      return new HapticFeedback();
    }

    return new EmptyHapticFeedback();
  }

  watchEffect(() => {
    hapticInstance.value = getHapticInstance(store.isEnabled);
  });

  return hapticInstance;
}
