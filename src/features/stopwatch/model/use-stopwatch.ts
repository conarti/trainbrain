import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';
import {
  Stopwatch,
  type TimeInSeconds,
} from './stopwatch';

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

  const stopwatch = new Stopwatch();

  function handleStopwatchUpdate() {
    time.value = stopwatch.seconds;
  }

  function start() {
    stopwatch.start();
  }

  function stop() {
    stopwatch.stop();
  }

  function reset() {
    stopwatch.reset();
  }

  function restart() {
    stopwatch.restart();
  }

  onMounted(() => {
    stopwatch.init(handleStopwatchUpdate);
  });

  onBeforeUnmount(() => {
    stopwatch.destroy();
  });

  return {
    time,
    formattedTime,
    start,
    stop,
    reset,
    restart,
  };
}
