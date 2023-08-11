import type { Exercise } from '@/features/generate-exercises';
import type { ExerciseWithSolution } from './types';

export function toExercisesWithSolutionsAdapter(solutions: number[], exercises: Exercise[]): ExerciseWithSolution[] {
  return exercises.map((exercise, index) => ({
    ...exercise,
    solution: solutions[index] as number,
  }));
}
