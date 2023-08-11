import { ref } from 'vue';
import {
  type Exercise,
  generateExercises,
} from './generate-exercises';

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
