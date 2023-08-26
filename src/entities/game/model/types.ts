export const enum GAME_NAMES {
  MATH = 'math',
  SPEED_COUNTING = 'speed-counting',
}

export interface GAME_CARD {
  label: string,
  routeName: GAME_NAMES,
  icon: string,
}
