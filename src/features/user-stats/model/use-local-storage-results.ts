import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';
import sortBy from 'lodash/sortBy';
import { LocalStorage } from 'quasar';
import { EmptySavedGames } from './empty-saved-games';
import type {
  MathGameResult,
  SavedGameName,
  SavedGameResult,
  SavedGames,
  StorageStrategy,
} from './types';

const LOCALSTORAGE_RESULTS_KEY = 'trainbrain-results';

export function useLocalStorageResults(): StorageStrategy {
  async function get(): Promise<SavedGames> {
    const savedResults = LocalStorage.getItem<SavedGames>(LOCALSTORAGE_RESULTS_KEY);

    /** Temporary logic for an automatic migrating old saved game type to new without lost saved data before.
     * TODO: delete this */
    const needMigrateResultsToNewType = isArray(savedResults);
    if (needMigrateResultsToNewType) {
      // eslint-disable-next-line no-inner-declarations
      function toNewSavedGames(oldMathSavedResults: any): SavedGames {
        return {
          math: oldMathSavedResults,
        };
      }

      const newSavedGames = toNewSavedGames(savedResults);
      LocalStorage.set(LOCALSTORAGE_RESULTS_KEY, newSavedGames);
      return get();
    }

    if (isNil(savedResults)) {
      return new EmptySavedGames();
    }

    function sortMathResults(results: MathGameResult[]): MathGameResult[] {
      return sortBy(results, (result) => -result.date);
    }

    /* sorted by date descending (first is the closest date) */
    const withSortedMathGame: SavedGames = { math: sortMathResults(savedResults.math) };
    return withSortedMathGame;
  }

  async function save(game: SavedGameName, result: SavedGameResult) {
    const savedResults = await get();
    const updatedSavedGames: SavedGames = {
      ...savedResults,
      [game]: [...savedResults[game], result],
    };
    LocalStorage.set(LOCALSTORAGE_RESULTS_KEY, updatedSavedGames);
  }

  return {
    get,
    save,
  };
}