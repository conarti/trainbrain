import {
  Haptics,
  type ImpactStyle,
} from '@capacitor/haptics';

export async function doImpact(style: ImpactStyle) {
  await Haptics.impact({ style });
}

export { ImpactStyle } from '@capacitor/haptics';
