import {
  onMounted,
  ref,
} from 'vue';
import { chooseStorageStrategy } from './choose-storage-strategy';
import { EmptySavedGames } from './empty-saved-games';
import type {
  SavedGameName,
  SavedGameResult,
  SavedGames,
} from './types';

export function useSavedGames() {
  const storage = chooseStorageStrategy();
  const savedGames = ref<SavedGames>(new EmptySavedGames());

  onMounted(async () => {
    savedGames.value = await storage.get();
  });

  async function save<T extends SavedGameName>(game: T, result: SavedGameResult<T>) {
    await storage.save(game, result);
    // @ts-expect-error ts is not understand dynamic types ¯\_(ツ)_/¯
    savedGames.value[game].push(result);
  }

  return {
    savedGames,
    save,
  };
}
