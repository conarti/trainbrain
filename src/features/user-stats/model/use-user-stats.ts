import {
  onMounted,
  ref,
} from 'vue';
import { EmptySavedGames } from './empty-saved-games';
import type {
  SavedGameName,
  SavedGameResult,
  SavedGames,
} from './types';
import { useLocalStorageResults } from './use-local-storage-results';

export function useUserStats() {
  const storage = useLocalStorageResults();
  const results = ref<SavedGames>(new EmptySavedGames());

  onMounted(async () => {
    results.value = await storage.get();
  });

  async function saveGameResult(game: SavedGameName, result: SavedGameResult) {
    await storage.save(game, result);
    results.value[game].push(result);
  }

  return {
    results,
    saveGameResult,
  };
}
