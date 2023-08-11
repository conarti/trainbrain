import { useExercises } from '@/features/generate-exercises';
import { useTimer } from '@/features/timer';
import { EXERCISES_COUNT } from '../config';

export function useExercisesTrainer() {
  const {
    formattedTime: gameTime,
    start: startTimer,
    stop: stopTimer,
    reset: resetTimer,
  } = useTimer();

  const {
    exercises,
    updateExercises,
  } = useExercises(EXERCISES_COUNT);

  function start() {
    updateExercises();
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
