import {
  computed,
  ref,
} from 'vue';

export enum GameProgress {
  'NotStarted',
  'Started',
  'Paused',
  'Resumed',
  'ShowingResults',
  'Ended',
}

export function useGameProgress() {
  const progress = ref<GameProgress>(GameProgress.NotStarted);

  const isNotStarted = computed(() => progress.value === GameProgress.NotStarted);
  const isStarted = computed(() => progress.value === GameProgress.Started);
  const isPaused = computed(() => progress.value === GameProgress.Paused);
  const isResumed = computed(() => progress.value === GameProgress.Resumed);
  const isShowingResults = computed(() => progress.value === GameProgress.ShowingResults);
  const isEnded = computed(() => progress.value === GameProgress.Ended);

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
    isNotStarted,
    isStarted,
    isPaused,
    isShowingResults,
    isEnded,
    isResumed,
    setProgressNotStarted,
    setProgressStarted,
    setProgressPaused,
    setProgressResumed,
    setProgressShowingResults,
    setProgressEnded,
  };
}
