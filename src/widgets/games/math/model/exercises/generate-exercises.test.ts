import {
  describe,
  expect,
  it,
} from 'vitest';
import { generateExercises } from './generate-exercises';

const EXERCISES_COUNT = 5;

// TODO

describe('generate-exercises', () => {
  it('should generate valid exercises count', () => {
    const actual = generateExercises(EXERCISES_COUNT);
    expect(actual).toHaveLength(EXERCISES_COUNT);
  });

  it('should generate with all properties', () => {
    const [actualExercise] = generateExercises(EXERCISES_COUNT);
    expect(actualExercise).toHaveProperty('id');
    expect(actualExercise).toHaveProperty('label');
    expect(actualExercise).toHaveProperty('result');
  });
});
