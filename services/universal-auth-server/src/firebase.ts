import { auth } from 'firebase-admin';
import { credential, initializeApp, ServiceAccount } from 'firebase-admin';

import * as serviceAccount from '../service-account.json';

initializeApp({ credential: credential.cert(<ServiceAccount>serviceAccount) });

export function createUser(data) {
  return auth().createUser(data);
}

export function verifyAccessToken(accessToken) {
  return auth().verifyIdToken(accessToken);
}
