import { Router } from 'express';

import { firebase } from './firebase';

export const router = Router();

router.post('/token', async (req, res) => {
  const { uid } = req.body;

  try {
    const accessToken = await firebase.auth().createCustomToken(uid);

    return res.status(201).json({ accessToken });
  } catch (error) {
    console.error(error);
    return res.status(500).send();
  }
});

router.post('/signup', async (req, res) => {
  const data = req.body;

  try {
    const user = await firebase.auth().createUser(data);
    console.log(user);

    return res.status(201).json({ message: 'success' });
  } catch (error) {
    return res.status(500).send();
  }
});

router.post('/verify', async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send();
  }

  const [scheme, accessToken] = authorization.split(' ');

  if (scheme !== 'Bearer') {
    return res.status(401).send();
  }

  try {
    const user = await firebase.auth().verifyIdToken(accessToken);
    console.log(user);

    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send();
  }
});
