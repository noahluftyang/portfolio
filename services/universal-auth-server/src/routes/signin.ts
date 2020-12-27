import { MESSAGES, STATUS } from 'constants/mod';
import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import { authenticate } from 'passport';

export const router = Router();

router.post('/signin', (req, res) => {
  authenticate('local', { session: false }, (error, user) => {
    if (error != null) {
      return res.status(500).end();
    }

    if (!user) {
      return res.status(401).send({
        status: STATUS.실패,
        message: MESSAGES.INVALID_ACCOUNT,
      });
    }

    const accessToken = sign(user, 'secret');

    return res.status(200).send({ status: STATUS.성공, accessToken });
  })(req, res);
});
