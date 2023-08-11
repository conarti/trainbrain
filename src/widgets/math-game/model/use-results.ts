import { ref } from 'vue';
import type { ExerciseWithSolution } from './types';

export function useResults() {
  const resultTime = ref<string>('');
  const results = ref<ExerciseWithSolution[]>([]);

  function updateResults(solutions: ExerciseWithSolution[], time: string) {
    resultTime.value = time;
    results.value = solutions;
  }

  return {
    resultTime,
    results,
    updateResults,
  };
}
