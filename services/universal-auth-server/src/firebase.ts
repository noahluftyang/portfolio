import { auth, storage } from 'firebase-admin';
import { credential, initializeApp, ServiceAccount } from 'firebase-admin';

import * as serviceAccount from './service-account.json';

initializeApp({ credential: credential.cert(<ServiceAccount>serviceAccount) });

export function createUser(data) {
  return auth().createUser(data);
}

export function verifyAccessToken(accessToken) {
  return auth().verifyIdToken(accessToken);
}

export function uploadMedia(media64Str) {
  const file = storage().bucket().file('test.png');
  const imageBuffer = Buffer.from(media64Str, 'base64');
  const imageByteArray = new Uint8Array(imageBuffer);

  return file.save(imageByteArray);
}
