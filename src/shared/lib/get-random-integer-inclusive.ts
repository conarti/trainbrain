/**
 * Generates random integer from 'min' to 'max' inclusive
 */
export function getRandomIntegerInclusive(min: number, max: number): number {
	return Math.floor(min + Math.random() * (max + 1 - min));
}
