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
import { useLocalStorageSavedGames } from './use-local-storage-saved-games';

export function useUserStats() {
  const storage = useLocalStorageSavedGames();
  const results = ref<SavedGames>(new EmptySavedGames());

  onMounted(async () => {
    results.value = await storage.get();
  });

  async function saveGameResult<T extends SavedGameName>(game: T, result: SavedGameResult<T>) {
    await storage.save(game, result);
    // @ts-expect-error ts is not understand dynamic types ¯\_(ツ)_/¯
    results.value[game].push(result);
  }

  return {
    results,
    saveGameResult,
  };
}
