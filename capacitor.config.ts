import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.beacons',
  appName: 'beacons-monitoring',
  webDir: './dist/beacons-monitoring/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
