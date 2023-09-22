import type { Ref } from 'vue';
import { GameProgress } from '@/entities/game';
import { useAndroidBackButton } from '@/shared/lib/use-android-back-button';

/**
 * Prevents exiting the game using the "back" button and pauses if the button was pressed during the game
 */
export function useBackButtonGuard(progress: Ref<GameProgress>, handlePause: () => void) {
  function handleBackButtonListener(): boolean {
    if (progress.value === GameProgress.Started) {
      handlePause();
      return false;
    }

    const canLeaveRoute = progress.value !== GameProgress.Paused;
    return canLeaveRoute;
  }

  useAndroidBackButton(handleBackButtonListener);
}
