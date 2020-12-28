import { Router } from 'express';
import { authenticate } from 'passport';

export const router = Router();

router.get('/google', authenticate('google', { scope: ['email'], session: false }));

router.get(
  '/google/callback',
  authenticate('google', { session: false, successRedirect: 'http://localhost:4200' })
);

router.post('/signout', authenticate('jwt', { session: false }), (req, res) => {
  return res.status(200).send({ status: 'SUCCESS' });
});

router.post('/verify', authenticate('jwt', { session: false }), (req, res) =>
  res.status(200).send({ user: req.user })
);
