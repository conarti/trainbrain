import type { ExerciseWithSolution } from '@/widgets/games/math';

export interface MathGameResult {
  date: number;
  time: number;
  solutions: ExerciseWithSolution[];
}

export interface StorageStrategy {
  get: () => Promise<MathGameResult[]>;
  save: (result: MathGameResult) => Promise<void>;
}
