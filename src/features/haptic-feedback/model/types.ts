import type { ImpactStyle } from '@capacitor/haptics';

export { ImpactStyle } from '@capacitor/haptics';

export interface BaseHapticFeedback {
  impact: (style: ImpactStyle) => Promise<void>;
}
