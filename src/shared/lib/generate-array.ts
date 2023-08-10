export function generateArray<MappedElement = unknown>(elementsCount: number, mapfn: (el: unknown, index: number) => MappedElement = (el) => el as MappedElement): MappedElement[] {
	return Array.from({ length: elementsCount }, mapfn);
}
