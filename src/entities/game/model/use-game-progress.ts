import { ref } from 'vue';

export const enum GameProgress {
  'NotStarted',
  'Started',
  'Paused',
  'Resumed',
  'ShowingResults',
  'Ended',
}

export function useGameProgress() {
  const progress = ref<GameProgress>(GameProgress.NotStarted);

  function setProgressNotStarted() {
    progress.value = GameProgress.NotStarted;
  }
  function setProgressStarted() {
    progress.value = GameProgress.Started;
  }

  function setProgressPaused() {
    progress.value = GameProgress.Paused;
  }

  function setProgressResumed() {
    progress.value = GameProgress.Resumed;
  }
  function setProgressShowingResults() {
    progress.value = GameProgress.ShowingResults;
  }
  function setProgressEnded() {
    progress.value = GameProgress.Ended;
  }

  return {
    progress,
    setProgressNotStarted,
    setProgressStarted,
    setProgressPaused,
    setProgressResumed,
    setProgressShowingResults,
    setProgressEnded,
  };
}
