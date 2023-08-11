import { LocalStorage } from 'quasar';
import { ref } from 'vue';
import type { ExerciseWithSolution } from '@/widgets/math-game';

interface MathGameResult {
  time: number;
  solutions: ExerciseWithSolution[]
}

function useLocalStorageResults() {
  const LOCALSTORAGE_RESULTS_KEY = 'trainbrain-results';

  function get() {
    return LocalStorage.getItem<MathGameResult[]>(LOCALSTORAGE_RESULTS_KEY);
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
  const results = ref<MathGameResult[]>(localStorageResults.get() || []);

  function saveResult(result: MathGameResult) {
    results.value.push(result);
    localStorageResults.save(results.value);
  }

  return {
    results,
    saveResult,
  };
}
