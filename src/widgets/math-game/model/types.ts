import type { Exercise } from '@/features/generate-exercises';

export type ExerciseWithSolution = Exercise & { solution: number }
