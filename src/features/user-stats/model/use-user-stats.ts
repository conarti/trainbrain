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

  async function saveGameResult<T extends SavedGameName>(game: T, result: SavedGameResult<T>) {
    await storage.save(game, result);
    // @ts-ignore IDK why typescript merges all types here
    results.value[game].push(result);
  }

  return {
    results,
    saveGameResult,
  };
}
