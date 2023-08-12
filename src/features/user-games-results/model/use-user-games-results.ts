import isNil from 'lodash/isNil';
import sortBy from 'lodash/sortBy';
import { LocalStorage } from 'quasar';
import {
  onMounted,
  ref,
} from 'vue';
import type {
  MathGameResult,
  StorageStrategy,
} from './types';

function useLocalStorageResults(): StorageStrategy {
  const LOCALSTORAGE_RESULTS_KEY = 'trainbrain-results';

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
