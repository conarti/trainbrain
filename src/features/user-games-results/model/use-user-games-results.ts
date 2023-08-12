import {
  onMounted,
  ref,
} from 'vue';
import type { MathGameResult } from './types';
import { useLocalStorageResults } from './use-local-storage-results';

export function useUserGamesResults() {
  const storage = useLocalStorageResults();
  const results = ref<MathGameResult[]>([]);

  onMounted(async () => {
    results.value = await storage.get();
  });

  async function saveUserGameResult(result: MathGameResult) {
    await storage.save(result);
    results.value.push(result);
  }

  return {
    results,
    saveUserGameResult,
  };
}
