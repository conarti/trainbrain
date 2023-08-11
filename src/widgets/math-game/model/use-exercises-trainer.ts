import { useExercises } from '@/features/generate-exercises';
import { useTimer } from '@/features/timer';

export function useExercisesTrainer() {
  const {
    time: gameTime,
    start: startTimer,
    stop: stopTimer,
    reset: resetTimer,
  } = useTimer();

  const {
    exercises,
    updateExercises,
  } = useExercises();

  function start(exercisesCount: number) {
    updateExercises(exercisesCount);
    resetTimer();
    startTimer();
  }

  function stop() {
    stopTimer();
  }

  return {
    gameTime,
    exercises,
    start,
    stop,
  };
}
