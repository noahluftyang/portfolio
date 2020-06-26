import * as admin from 'firebase-admin';
import { credential, initializeApp, ServiceAccount } from 'firebase-admin';

import * as serviceAccount from '../service-account.json';

initializeApp({ credential: credential.cert(<ServiceAccount>serviceAccount) });

export const firebase = admin;
