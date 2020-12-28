import { ConfigContext, ExpoConfig } from '@expo/config';
import * as dotenv from 'dotenv';

const STAGE = process.env.NODE_ENV || 'local';

dotenv.config({ path: `.env.${STAGE}` });

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: 'chatting-native',
    slug: 'chatting-native',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
    extra: {
      AUTH_API_URL: process.env.AUTH_API_URL,
    },
  };
};
