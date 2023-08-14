import type {
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';
import { GAME_NAMES } from '@/entities/game';
import { RouteNames } from '@/shared/config/route-names';

export const checkGameName = (to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext) => {
  const paramName = to.params?.['name']?.toString() ?? '';
  if (!Object.values(GAME_NAMES).includes(paramName)) {
    return next({ name: RouteNames.Train });
  }
  return next();
};
