import { ref } from 'vue';
import { useUserGamesResults } from '@/features/user-games-results';
import type { ExerciseWithSolution } from './types';

export function useResults() {
  const resultTime = ref<number>(-1);
  const results = ref<ExerciseWithSolution[]>([]);

  const { saveResult } = useUserGamesResults();

  function updateResults(solutions: ExerciseWithSolution[], time: number) {
    resultTime.value = time;
    results.value = solutions;
    saveResult({
      solutions,
      time,
    });
  }

  return {
    resultTime,
    results,
    updateResults,
  };
}
