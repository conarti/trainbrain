import { onBeforeUnmount } from 'vue';
import { App } from '@capacitor/app';

/**
 * Will execute callback 'handlePause' when the application is minimized
 */
export function useAppPause(handlePause: () => void) {
  let listener: ReturnType<typeof App.addListener>;

  App.removeAllListeners().then(() => {
    listener = App.addListener('pause', handlePause);
  });

  onBeforeUnmount(() => {
    listener.remove();
  });
}
