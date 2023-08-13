import type { ExerciseWithSolution } from '@/widgets/games/math';

export interface MathGameResult {
  date: number;
  time: number;
  solutions: ExerciseWithSolution[];
}

export interface SpeedCountingGameResult {
  date: number;
  time: number;
}

export type SavedGameName = 'math' | 'speedCounting';
export type SavedGameResult = MathGameResult | SpeedCountingGameResult;
export type SavedGames = Record<SavedGameName, SavedGameResult[]>

export interface StorageStrategy {
  get: () => Promise<SavedGames>;
  save: (game: SavedGameName, result: SavedGameResult) => Promise<void>;
}
