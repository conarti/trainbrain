export enum GAME_STATUS {
  NOT_STARTED = 'not-started',
  IN_PROGRESS = 'in-progress',
  PAUSED = 'paused',
  FINISHED = 'finished',
}

export enum GAME_NAMES {
  MATH = 'math',
  SPEED_COUNTING = 'speed-counting',
}

export interface GAME_CARD {
  label: string,
  routeName: GAME_NAMES,
  icon: string,
}
