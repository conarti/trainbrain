import type { ExerciseWithSolution } from '../types';

export function isInvalidResult(exerciseWithSolution: ExerciseWithSolution): boolean {
  return exerciseWithSolution.solution !== exerciseWithSolution.result;
}
