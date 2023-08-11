import { LocalStorage } from 'quasar';
import {
  onMounted,
  ref,
} from 'vue';
import type { ExerciseWithSolution } from '@/widgets/math-game';

export interface MathGameResult {
  date: number;
  time: number;
  solutions: ExerciseWithSolution[]
}

function useLocalStorageResults() {
  const LOCALSTORAGE_RESULTS_KEY = 'trainbrain-results';

  function get() {
    const savedResults = LocalStorage.getItem<MathGameResult[]>(LOCALSTORAGE_RESULTS_KEY);

    if (!Array.isArray(savedResults)) {
      return [];
    }

    return [...savedResults].sort((a, b) => b.time - a.time);
  }

  function save(results: MathGameResult[]) {
    LocalStorage.set(LOCALSTORAGE_RESULTS_KEY, results);
  }

  return {
    get,
    save,
  };
}

export function useUserGamesResults() {
  const localStorageResults = useLocalStorageResults();
  const results = ref<MathGameResult[]>([]);

  onMounted(() => {
    results.value = localStorageResults.get();
  });

  function saveUserGameResult(result: MathGameResult) {
    results.value.push(result);
    localStorageResults.save(results.value);
  }

  return {
    results,
    saveUserGameResult,
  };
}
