import { createAuthApiClient } from '@portfolio/auth-api-client';
import { createAppApiClient } from '@portfolio/chatting-api-client';

export const appApiClient = createAppApiClient(process.env.NEXT_PUBLIC_APP_API_URL);

export const authApiClient = createAuthApiClient(process.env.NEXT_PUBLIC_AUTH_API_URL);
