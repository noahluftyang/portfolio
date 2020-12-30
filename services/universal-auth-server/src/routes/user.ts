import { STATUS } from 'constants/mod';
import { Router } from 'express';
import { verify } from 'jsonwebtoken';
import * as redis from 'src/utils/redis';

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

    let token;

    try {
      token = await redis.get(sessionId);
    } catch (error) {
      return res.status(500).end();
    }

    try {
      const user = verify(token, 'secret');

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
