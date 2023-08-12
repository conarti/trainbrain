import {
  onMounted,
  ref,
} from 'vue';
import type { MathGameResult } from './types';
import { useLocalStorageResults } from './use-local-storage-results';

export function useUserStats() {
  const storage = useLocalStorageResults();
  const results = ref<MathGameResult[]>([]);

  onMounted(async () => {
    results.value = await storage.get();
  });

  async function saveGameResult(result: MathGameResult) {
    await storage.save(result);
    results.value.push(result);
  }

  return {
    results,
    saveGameResult,
  };
}
