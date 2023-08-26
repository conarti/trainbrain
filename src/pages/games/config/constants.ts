import { RouteNames } from '@/shared/config/route-names';

export interface GAME_CARD {
  label: string,
  routeName: RouteNames,
  icon: string,
}

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
