import { createAuthApiClient } from '@portfolio/auth-api-client';
import { createAppApiClient } from '@portfolio/chatting-api-client';
import Constants from 'expo-constants';

export const appApiClient = createAppApiClient(Constants.manifest.extra.APP_API_URL);

export const authApiClient = createAuthApiClient(Constants.manifest.extra.AUTH_API_URL);
