import type { StorageStrategy } from './types';
import { useLocalStorageSavedGames } from './use-local-storage-saved-games';

export function chooseStorageStrategy(): StorageStrategy {
  return useLocalStorageSavedGames();
}
