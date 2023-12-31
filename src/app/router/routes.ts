import { GamesPage } from '@/pages/games';
import { ResultsPage } from '@/pages/results';
import { MathGame } from '@/widgets/games/math';
import { SpeedCountingGame } from '@/widgets/games/speed-counting';
import { MainLayout } from '@/widgets/layout';
import { RouteNames } from '@/shared/config/route-names';

export const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/games',
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
        path: 'games',
        name: RouteNames.Games,
        component: GamesPage,
      },
    ],
  },
  {
    path: '/games/math',
    name: RouteNames.MathGame,
    component: MathGame,
  },
  {
    path: '/games/speed-counting',
    name: RouteNames.SpeedCounting,
    component: SpeedCountingGame,
  },
];
