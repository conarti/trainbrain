import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.conarti.trainbrain',
  appName: 'TrainBrain',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
