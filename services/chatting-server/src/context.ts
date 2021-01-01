import { createAuthSessionClient } from '@portfolio/auth-session-client';
import { AuthenticationError } from 'apollo-server-express';

const session = createAuthSessionClient();

export async function context({ req }) {
  const [, sessionId] = req.headers.authorization.split('Bearer ');

  try {
    const user = await session.verify(sessionId);

    return { user };
  } catch (error) {
    throw new AuthenticationError('로그인 해주세요.');
  }
}
