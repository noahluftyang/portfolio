import { createClient } from 'redis';

const redis = createClient({
  prefix: 'sess:',
});

redis.on('error', error => {
  console.error(error);
});

export async function get(key: string) {
  return new Promise((resolve, reject) => {
    redis.get(key, (_, value) => {
      if (value == null) {
        reject();
      }

      resolve(value);
    });
  });
}

export async function set(key: string, value: string) {
  return new Promise((resolve, reject) => {
    redis.set(key, value, error => {
      if (error != null) {
        reject(error);
      }

      resolve(null);
    });
  });
}
