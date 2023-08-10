let id: number = 0;

export function uniqueId(prefix: string = ''): string {
	id += 1;
	return `${prefix}${id}`;
}
