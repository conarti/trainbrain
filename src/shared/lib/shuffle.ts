export function shuffle<T>(collection: T[]): T[] {
  const result = collection.concat();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // @ts-ignore
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
