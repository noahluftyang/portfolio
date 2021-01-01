import { sign, verify } from 'jsonwebtoken';
import { createClient } from 'redis';
import { v4 as uuid } from 'uuid';

const redis = createClient({ prefix: 'sess:' });

export function createAuthSessionClient() {
  return {
    async create(user) {
      const sessionId = uuid();
      const token = sign(user, 'secret');

      return new Promise((resolve, reject) => {
        redis.set(sessionId, token, error => {
          if (error != null) {
            reject(error);
          }

          resolve(sessionId);
        });
      });
    },
    async verify(sessionId: string) {
      return new Promise((resolve, reject) => {
        redis.get(sessionId, (_, token) => {
          if (token == null) {
            reject();
          }

          const user = verify(token, 'secret');
          resolve(user);
        });
      });
    },
  };
}
