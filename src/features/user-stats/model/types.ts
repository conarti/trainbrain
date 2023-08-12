import type { ExerciseWithSolution } from '@/widgets/games/math';

export interface MathGameResult {
  date: number;
  time: number;
  solutions: ExerciseWithSolution[];
}

export type SavedGameName = 'math';
export type SavedGameResult = MathGameResult;
export type SavedGames = Record<SavedGameName, SavedGameResult[]>

export interface StorageStrategy {
  get: () => Promise<SavedGames>;
  save: (game: SavedGameName, result: SavedGameResult) => Promise<void>;
}
