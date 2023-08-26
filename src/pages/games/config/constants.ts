import { RouteNames } from '@/shared/config/route-names';
import type { GAME_CARD } from './types';

export const GAME_CARDS_LIST: GAME_CARD[] = [
  {
    label: 'Math',
    routeName: RouteNames.MathGame,
    icon: 'sym_r_calculate',
  },
  {
    label: 'Speed Counting',
    routeName: RouteNames.SpeedCounting,
    icon: 'sym_r_record_voice_over',
  },
];
