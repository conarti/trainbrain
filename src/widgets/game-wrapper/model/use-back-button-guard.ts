import {
  onBeforeUnmount,
  type Ref,
} from 'vue';
import { useRouter } from 'vue-router';
import { App } from '@capacitor/app';
import { GameProgress } from '@/entities/game';

/**
 * Prevents exiting the game using the "back" button and pauses if the button was pressed during the game
 */
export function useBackButtonGuard(progress: Ref<GameProgress>, handlePause: () => void) {
  const router = useRouter();

  function handleBackButtonListener() {
    if (progress.value === GameProgress.Started) {
      handlePause();
      return;
    }

    if (progress.value === GameProgress.Paused) {
      return;
    }

    router.back();
  }

  let listener: ReturnType<typeof App.addListener>;

  App.removeAllListeners().then(() => {
    listener = App.addListener('backButton', handleBackButtonListener);
  });

  onBeforeUnmount(() => {
    listener.remove();
  });
}
