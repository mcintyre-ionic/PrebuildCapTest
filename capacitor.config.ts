/// <reference types="@ionic-native/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'io.ionic.starter',
    appName: 'prebuildCapTest',
    webDir: 'www',
    plugins: {
        SplashScreen: {
            launchShowDuration: 0,
        }
    },
};

export default config;