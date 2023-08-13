import { defineStore } from 'pinia';
import { GAME_STATUS } from './types';

interface State {
  status: GAME_STATUS;
  isPaused: boolean;
  result: any;
}

export const useGameStore = defineStore('game', {
  state: (): State => ({
    status: GAME_STATUS.NOT_STARTED,
    isPaused: false,
    result: null,
  }),
  getters: {
    isGameNotStarted: (state) => state.status === GAME_STATUS.NOT_STARTED,
    isGameInProgress: (state) => state.status === GAME_STATUS.IN_PROGRESS,
    isGameFinished: (state) => state.status === GAME_STATUS.FINISHED,
  },
  actions: {
    start() {
      this.status = GAME_STATUS.IN_PROGRESS;
    },
    pause() {
      this.status = GAME_STATUS.PAUSED;
    },
    finish() {
      this.status = GAME_STATUS.FINISHED;
    },
  },
});
