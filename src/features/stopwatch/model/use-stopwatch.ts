import {
  computed,
  ref,
} from 'vue';

type TimeInSeconds = number;

const TIMER_UPDATE_TIME_IN_MS = 1000;

function withZero(time: number): string {
  return time.toString().padStart(2, '0');
}

export function formatTime(timeInSeconds: number): string {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${withZero(minutes)}:${withZero(seconds)}`;
}

export function useStopwatch() {
  const time = ref<TimeInSeconds>(0);
  const formattedTime = computed(() => formatTime(time.value));

  const intervalId = ref<ReturnType<typeof setInterval>>();

  function incrementByOneSecond() {
    time.value += 1;
  }

  function start() {
    intervalId.value = setInterval(incrementByOneSecond, TIMER_UPDATE_TIME_IN_MS);
  }
  function stop() {
    clearInterval(intervalId.value);
    intervalId.value = undefined;
  }
  function reset() {
    time.value = 0;
  }
  function restart() {
    stop();
    reset();
    start();
  }

  return {
    time,
    formattedTime,
    start,
    stop,
    reset,
    restart,
  };
}
