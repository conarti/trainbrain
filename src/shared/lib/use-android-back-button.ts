import { onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { App } from '@capacitor/app';

/**
 * Allows you to set the behavior of the android "back" button. Overwrites the button's default behavior.
 * @param customHandleBackButton A click handler that should return true/false. If it returns true, the default button action will be executed (`router.back()`)
 */
export function useAndroidBackButton(customHandleBackButton: () => boolean) {
  const router = useRouter();

  let listener: ReturnType<typeof App.addListener>;

  function handleBackButton() {
    if (customHandleBackButton()) {
      router.back();
    }
  }

  App.removeAllListeners().then(() => {
    listener = App.addListener('backButton', handleBackButton);
  });

  onBeforeUnmount(() => {
    listener.remove();
  });
}
