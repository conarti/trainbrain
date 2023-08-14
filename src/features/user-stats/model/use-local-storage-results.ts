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

type LocalStorageSavedGames = Partial<SavedGames> | null;

function toSavedGames(localStorageSavedGames: LocalStorageSavedGames): SavedGames {
  const emptySavedGames = new EmptySavedGames();

  if (isNil(localStorageSavedGames)) {
    return emptySavedGames;
  }

  function sortMathResults(results: MathGameResult[]): MathGameResult[] {
    return sortBy(results, (result) => -result.date);
  }

  /* need to replace undefined after adding new games to SavedGames */
  const withoutUndefinedResults: SavedGames = { // TODO use function
    math: localStorageSavedGames.math || emptySavedGames.math,
    speedCounting: localStorageSavedGames.speedCounting || emptySavedGames.speedCounting,
  };

  /* sorted by date descending (first is the closest date) */
  const withSortedMathGame: SavedGames = {
    ...withoutUndefinedResults,
    math: sortMathResults(withoutUndefinedResults.math),
  };

  return withSortedMathGame;
}

function toLocalStorageSavedGames<T extends SavedGameName>(
  alreadySavedGames: SavedGames,
  game: T,
  result: SavedGameResult<T>,
): LocalStorageSavedGames {
  return {
    ...alreadySavedGames,
    [game]: [...alreadySavedGames[game], result],
  };
}

export function useLocalStorageResults(): StorageStrategy {
  async function get(): Promise<SavedGames> {
    const savedResults = LocalStorage.getItem<Exclude<LocalStorageSavedGames, null>>(LOCALSTORAGE_RESULTS_KEY);
    return toSavedGames(savedResults);
  }

  async function save<T extends SavedGameName>(game: T, result: SavedGameResult<T>) {
    const alreadySavedGames = await get();
    const updatedSavedGames = toLocalStorageSavedGames(alreadySavedGames, game, result);
    LocalStorage.set(LOCALSTORAGE_RESULTS_KEY, updatedSavedGames);
  }

  return {
    get,
    save,
  };
}
