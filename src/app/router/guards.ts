import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteParams,
} from 'vue-router';
import { GAME_NAMES } from '@/entities/game';
import { RouteNames } from '@/shared/config/route-names';

const isGameNameExist = (params: RouteParams) => {
  const name = params?.['name']?.toString() ?? '';
  return !Object.values(GAME_NAMES).includes(name);
};

export const checkGameName = (to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext) => {
  if (isGameNameExist(to.params)) {
    return next({ name: RouteNames.Games });
  }

  return next();
};
