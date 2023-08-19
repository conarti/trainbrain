import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.conarti.trainbrain',
  appName: 'TrainBrain',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    /**
     * Uncomment to enable live reload.
     * Don't commit these lines because it forces to enable server at all build types.
     */
    // cleartext: true,
    // url: 'http://192.168.8.123:5173/',
  },
};

export default config;
