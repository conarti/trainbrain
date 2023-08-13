import type { ExerciseWithSolution } from '../types';
import { isInvalidResult } from './is-invalid-result';

export function getMistakeSolutionsCount(solutions: ExerciseWithSolution[]): number {
  return solutions.filter(isInvalidResult).length;
}
