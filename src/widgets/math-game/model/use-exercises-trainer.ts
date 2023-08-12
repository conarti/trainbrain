import { useTimer } from '@/features/timer';
import { useExercises } from './use-exercises';

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
