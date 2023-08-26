import { RouteNames } from '@/shared/config/route-names';

export interface GameCard {
  label: string,
  routeName: RouteNames,
  icon: string,
}

export const GAME_CARDS_LIST: GameCard[] = [
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
