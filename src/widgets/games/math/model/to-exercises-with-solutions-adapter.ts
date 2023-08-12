import type {
  Exercise,
  ExerciseWithSolution,
} from './types';

export function toExercisesWithSolutionsAdapter(solutions: number[], exercises: Exercise[]): ExerciseWithSolution[] {
  return exercises.map((exercise, index) => ({
    ...exercise,
    solution: solutions[index] as number,
  }));
}
