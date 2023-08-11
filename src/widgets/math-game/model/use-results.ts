import { ref } from 'vue';
import { useUserGamesResults } from '@/features/user-games-results';
import type { ExerciseWithSolution } from './types';

function toMathGameUserSavedResult(solutions: ExerciseWithSolution[], time: number) {
  return {
    date: Date.now(),
    solutions,
    time,
  };
}

export function useResults() {
  const resultTime = ref<number>(-1);
  const results = ref<ExerciseWithSolution[]>([]);

  const { saveUserGameResult } = useUserGamesResults();

  function updateResults(solutions: ExerciseWithSolution[], time: number) {
    resultTime.value = time;
    results.value = solutions;
    saveUserGameResult(toMathGameUserSavedResult(solutions, time));
  }

  return {
    resultTime,
    results,
    updateResults,
  };
}
