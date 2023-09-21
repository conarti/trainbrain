import { Haptics } from '@capacitor/haptics';
import type {
  BaseHapticFeedback,
  ImpactStyle,
} from './types';

export class HapticFeedback implements BaseHapticFeedback {
  public async impact(style: ImpactStyle): Promise<void> {
    await Haptics.impact({ style });
  }
}
