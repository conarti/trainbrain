import type { ExerciseWithSolution } from './types';
import { useExercisesTrainer } from './use-exercises-trainer';
import { useGameProgress } from './use-game-progress';
import { useResults } from './use-results';

export function useMathGame() {
  const {
    isNotStarted,
    isStarted,
    isShowingResults,
    isEnded,
    setProgressStarted,
    setProgressShowingResults,
  } = useGameProgress();

  const {
    results,
    resultTime,
    updateResults,
  } = useResults();

  const {
    start: startExerciseTrainer,
    stop: stopExerciseTrainer,
  } = useExercisesTrainer();

  function start() {
    setProgressStarted();
    startExerciseTrainer();
  }

  function showResults(exercisesWithSolutions: ExerciseWithSolution[], gameTime: string) {
    stopExerciseTrainer();
    updateResults(exercisesWithSolutions, gameTime);
    setProgressShowingResults();
  }

  return {
    isNotStarted,
    isStarted,
    isShowingResults,
    isEnded,
    start,
    showResults,
    results,
    resultTime,
  };
}
