let id = 0;

export function uniqueId(prefix = ''): string {
  id += 1;
  return `${prefix}${id}`;
}
