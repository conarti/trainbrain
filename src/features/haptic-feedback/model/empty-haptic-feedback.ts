/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  BaseHapticFeedback,
  ImpactStyle,
} from './types';

export class EmptyHapticFeedback implements BaseHapticFeedback {
  public impact(_style: ImpactStyle): Promise<void> {
    return Promise.resolve();
  }
}
