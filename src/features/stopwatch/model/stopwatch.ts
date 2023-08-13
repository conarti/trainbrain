import isNil from 'lodash/isNil';

export type TimeInSeconds = number;
export type TimeInMs = number;

type OnUpdateCallback = (timeInMs: TimeInMs) => void;

export class Stopwatch {
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private UPDATE_TIME_IN_MS = 1000;
  private timeInMs = 0;

  public get milliseconds(): TimeInMs {
    return this.timeInMs;
  }

  public get seconds(): TimeInSeconds {
    return Math.floor(this.time / 1000);
  }

  private set time(value: TimeInMs) {
    this.timeInMs = value;
    this.onUpdate(this.timeInMs);
  }

  private get time(): TimeInMs {
    return this.timeInMs;
  }

  public start() {
    this.intervalId = setInterval(() => this.update(), this.UPDATE_TIME_IN_MS);
  }

  public stop() {
    this.clearInterval();
  }

  public reset() {
    this.time = 0;
  }

  public restart() {
    this.stop();
    this.reset();
    this.start();
  }

  public init(onUpdate: OnUpdateCallback) {
    this.onUpdate = onUpdate;
  };

  public destroy() {
    this.clearInterval();
  }

  public setUpdateTime(timeInMs: TimeInMs) {
    this.UPDATE_TIME_IN_MS = timeInMs;
  }

  private onUpdate: OnUpdateCallback = () => {};

  private clearInterval() {
    if (isNil(this.intervalId)) {
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  private update() {
    this.time += this.UPDATE_TIME_IN_MS;
  }
}
