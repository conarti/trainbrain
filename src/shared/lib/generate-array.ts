export function generateArray(elementsCount: number, mapfn: (el: unknown, index: number) => unknown = (el) => el) {
	return Array.from({ length: elementsCount }, mapfn);
}
