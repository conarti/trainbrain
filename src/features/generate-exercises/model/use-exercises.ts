import { ref } from 'vue';
import {
  type Exercise,
  generateExercises, 
} from './generate-exercises';

export function useExercises(countForGenerate: number) {
  const exercises = ref<Exercise[]>([]);

  function updateExercises() {
    exercises.value = generateExercises(countForGenerate);
  }

  return {
    exercises,
    updateExercises,
  };
}
