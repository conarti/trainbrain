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

export interface SavedGames {
  math: MathGameResult[];
  speedCounting: SpeedCountingGameResult[];
}

export type SavedGameName = keyof SavedGames;
export type SavedGameResult<T extends SavedGameName> = SavedGames[T][number];

export interface StorageStrategy {
  get: () => Promise<SavedGames>;
  save: <T extends SavedGameName>(game: T, result: SavedGameResult<T>) => Promise<void>;
}
