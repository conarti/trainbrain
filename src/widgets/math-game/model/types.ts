export interface Exercise {
  id: string;
  label: string;
  result: number;
}

export type ExerciseWithSolution = Exercise & { solution: number }
