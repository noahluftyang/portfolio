import * as admin from 'firebase-admin';
import { credential, initializeApp, ServiceAccount } from 'firebase-admin';

import * as serviceAccount from '../service-account.json';

initializeApp({ credential: credential.cert(<ServiceAccount>serviceAccount) });

export const firebase = admin;

export async function createUser(data) {
  try {
    const user = await firebase.auth().createUser(data);
  } catch (error) {
    throw new Error(error);
  }
}
