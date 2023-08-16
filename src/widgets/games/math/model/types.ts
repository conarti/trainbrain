export interface Exercise {
  id: string;
  label: string;
  result: number;
}

export type ExerciseWithSolution = Exercise & { solution: number }

export type MathKeyboardKey = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | 'reset' | 'done';
