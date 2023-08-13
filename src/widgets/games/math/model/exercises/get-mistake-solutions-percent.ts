import type { ExerciseWithSolution } from '../types';
import { getMistakeSolutionsCount } from './get-mistake-solutions-count';

export function getMistakeSolutionsPercent(solutions: ExerciseWithSolution[]): number {
  const mistakeSolutionsCount = getMistakeSolutionsCount(solutions);
  const totalSolutionsCount = solutions.length;
  return Math.floor(mistakeSolutionsCount / totalSolutionsCount * 100);
}
