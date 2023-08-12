import { ref } from 'vue';
import { generateExercises } from './generate-exercises';
import type { Exercise } from './types';

export function useExercises() {
  const exercises = ref<Exercise[]>([]);

  function updateExercises(countForGenerate: number) {
    exercises.value = generateExercises(countForGenerate);
  }

  return {
    exercises,
    updateExercises,
  };
}
