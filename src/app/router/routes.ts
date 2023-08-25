import { GamesPage } from '@/pages/games';
import { ResultsPage } from '@/pages/results';
import { TrainPage } from '@/pages/train';
import { MathGame } from '@/widgets/games/math';
import { SpeedCountingGame } from '@/widgets/games/speed-counting';
import { MainLayout } from '@/widgets/layout';
import { GameLayout } from '@/widgets/layout';
import { RouteNames } from '@/shared/config/route-names';

export const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: RouteNames.Train,
        component: TrainPage,
      },
      {
        path: 'results',
        name: RouteNames.Results,
        component: ResultsPage,
      },
      {
        path: 'games',
        children: [
          {
            path: '',
            name: RouteNames.Games,
            component: GamesPage,
          },
        ],
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
        path: 'math',
        name: RouteNames.SpeedCounting,
        component: SpeedCountingGame,
      },
    ],
  },
];
