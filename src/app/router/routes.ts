import type {
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';
import { ResultsPage } from '@/pages/results';
import { TheGamePage } from '@/pages/the-game';
import { TrainPage } from '@/pages/train';
import { MainLayout } from '@/widgets/layout';
import { GAME_NAMES } from '@/entities/game';
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
        path: 'games/:name',
        name: RouteNames.Game,
        component: TheGamePage,
        beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
          const paramName = to.params?.['name']?.toString() ?? '';
          if (!Object.values(GAME_NAMES).includes(paramName)) {
            return next({ name: RouteNames.Train });
          }
          return next();
        },
      },
    ],
  },
];
