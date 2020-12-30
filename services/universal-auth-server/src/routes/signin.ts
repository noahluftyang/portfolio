import { MESSAGES, STATUS } from 'constants/mod';
import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import * as redis from 'src/utils/redis';
import { v4 as uuid } from 'uuid';

import { authenticate } from '../utils/passport';

export const router = Router();

/**
 * @swagger
 * /signin:
 *  post:
 *    tags:
 *      - auth
 */
router.post('/signin', async (req, res) => {
  let user;

  try {
    user = await authenticate('local')(req, res);
  } catch (error) {
    return res.status(500).end();
  }

  if (!user) {
    return res.status(401).send({
      status: STATUS.실패,
      message: MESSAGES.INVALID_ACCOUNT,
    });
  }

  const sessionId = uuid();

  await redis.set(sessionId, sign(user, 'secret'));

  return res.status(200).send({ status: STATUS.성공, token: sessionId });
});
