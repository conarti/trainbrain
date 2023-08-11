import {
  computed,
  ref,
} from 'vue';

type GameProgress = 'not-started' | 'started' | 'showing-results' | 'ended';

export function useGameProgress() {
  const progress = ref<GameProgress>('not-started');

  const isNotStarted = computed(() => progress.value === 'not-started');
  const isStarted = computed(() => progress.value === 'started');
  const isShowingResults = computed(() => progress.value === 'showing-results');
  const isEnded = computed(() => progress.value === 'ended');

  function setProgressNotStarted() {
    progress.value = 'not-started';
  }
  function setProgressStarted() {
    progress.value = 'started';
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
    isShowingResults,
    isEnded,
    setProgressNotStarted,
    setProgressStarted,
    setProgressShowingResults,
    setProgressEnded,
  };
}
