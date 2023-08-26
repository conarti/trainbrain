import {
  GAME_NAMES,
  type GAME_CARD,
} from '@/entities/game';

export const GAME_CARDS_LIST: GAME_CARD[] = [
  {
    label: 'Math',
    routeName: GAME_NAMES.MATH,
    icon: 'sym_r_calculate',
  },
  {
    label: 'Speed Counting',
    routeName: GAME_NAMES.SPEED_COUNTING,
    icon: 'sym_r_record_voice_over',
  },
];
