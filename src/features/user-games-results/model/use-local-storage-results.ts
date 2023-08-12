import isNil from 'lodash/isNil';
import sortBy from 'lodash/sortBy';
import { LocalStorage } from 'quasar';
import type {
  MathGameResult,
  StorageStrategy,
} from './types';

const LOCALSTORAGE_RESULTS_KEY = 'trainbrain-results';

export function useLocalStorageResults(): StorageStrategy {

  async function get() {
    const savedResults = LocalStorage.getItem<MathGameResult[]>(LOCALSTORAGE_RESULTS_KEY);

    if (isNil(savedResults)) {
      return [];
    }

    return sortBy(savedResults, (result) => -result.date); /* sorted by date descending (first is the closest date) */
  }

  async function save(result: MathGameResult) {
    const savedResults = await get();
    LocalStorage.set(LOCALSTORAGE_RESULTS_KEY, [...savedResults, result]);
  }

  return {
    get,
    save,
  };
}
