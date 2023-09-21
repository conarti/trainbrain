import { GamesPage } from '@/pages/games';
import { ResultsPage } from '@/pages/results';
import { MathGame } from '@/widgets/games/math';
import { SpeedCountingGame } from '@/widgets/games/speed-counting';
import {
  MainLayout,
  GameLayout,
} from '@/widgets/layout';
import { RouteNames } from '@/shared/config/route-names';

export const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      /* {
        path: '',
        name: RouteNames.Train,
        component: TrainPage,
      }, */
      {
        path: 'results',
        name: RouteNames.Results,
        component: ResultsPage,
      },
      {
        path: '',
        name: RouteNames.Games,
        component: GamesPage,
      },
    ],
  },
  {
    path: '/games',
    component: GameLayout,
    children: [
      {
        path: 'math',
        name: RouteNames.MathGame,
        component: MathGame,
      },
      {
        path: 'speed-counting',
        name: RouteNames.SpeedCounting,
        component: SpeedCountingGame,
      },
    ],
  },
];
