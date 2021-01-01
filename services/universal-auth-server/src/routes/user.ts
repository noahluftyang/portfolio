import { STATUS } from 'constants/mod';
import { Router } from 'express';

import { session } from '../utils/session';

export const router = Router();

/**
 * @swagger
 * /user:
 *  get:
 */
router.get(
  '/user',
  async (req, res, next) => {
    const [, sessionId] = req.headers.authorization.split('Bearer ');

    try {
      const user = await session.verify(sessionId);

      req.user = user;
    } catch (error) {
      return res.status(400).end();
    }

    next();
  },
  (req, res) => {
    return res.status(200).send({ status: STATUS.성공, user: req.user });
  }
);
