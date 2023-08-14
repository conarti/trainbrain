import { ref } from 'vue';
import {
  type MathGameResult,
  useSavedGames,
} from '@/features/saved-games';
import type { ExerciseWithSolution } from './types';

function toMathGameUserSavedResult(solutions: ExerciseWithSolution[], time: number): MathGameResult {
  return {
    date: Date.now(),
    solutions,
    time,
  };
}

export function useResults() {
  const resultTime = ref<number>(-1);
  const results = ref<ExerciseWithSolution[]>([]);

  const { save } = useSavedGames();

  async function updateResults(solutions: ExerciseWithSolution[], time: number) {
    resultTime.value = time;
    results.value = solutions;
    await save('math', toMathGameUserSavedResult(solutions, time));
  }

  return {
    resultTime,
    results,
    updateResults,
  };
}
