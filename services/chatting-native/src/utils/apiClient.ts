import { createAuthApiClient } from '@portfolio/auth-api-client';
import Constants from 'expo-constants';

const baseURL = Constants.manifest.extra.AUTH_API_URL;

export const authApiClient = createAuthApiClient(baseURL);
