import type { ExerciseWithSolution } from '@/widgets/games/math';

export interface BaseGameResult {
  date: number;
}

export interface MathGameResult extends BaseGameResult {
  time: number;
  solutions: ExerciseWithSolution[];
}

export interface SpeedCountingGameResult extends BaseGameResult {
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
