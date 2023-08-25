import {
  computed,
  ref,
} from 'vue';

type GameProgress = 'not-started' | 'started' | 'paused' | 'resumed' | 'showing-results' | 'ended';

export function useGameProgress() {
  const progress = ref<GameProgress>('not-started');

  const isNotStarted = computed(() => progress.value === 'not-started');
  const isStarted = computed(() => progress.value === 'started');
  const isPaused = computed(() => progress.value === 'paused');
  const isResumed = computed(() => progress.value === 'resumed');
  const isShowingResults = computed(() => progress.value === 'showing-results');
  const isEnded = computed(() => progress.value === 'ended');

  function setProgressNotStarted() {
    progress.value = 'not-started';
  }
  function setProgressStarted() {
    progress.value = 'started';
  }

  function setProgressPaused() {
    progress.value = 'paused';
  }

  function setProgressResumed() {
    progress.value = 'resumed';
  }
  function setProgressShowingResults() {
    progress.value = 'showing-results';
  }
  function setProgressEnded() {
    progress.value = 'ended';
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
