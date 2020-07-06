import { plainToClass } from 'class-transformer';
import { IsEmail, IsNotEmpty, MinLength, validateOrReject } from 'class-validator';
import { Router } from 'express';
import { authenticate } from 'passport';

import { createUser, verifyAccessToken } from './firebase';

class CreateUserDto {
  @IsNotEmpty()
  displayName: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}

export const router = Router();

router.get('/google', authenticate('google', { scope: ['email'] }));

router.get(
  '/google/callback',
  authenticate('google', { successRedirect: 'http://localhost:3000' })
);

router.post('/login', authenticate('local'));

router.post('/signup', async (req, res) => {
  const createUserDto = plainToClass(CreateUserDto, req.body);

  try {
    await validateOrReject(createUserDto);
  } catch (error) {
    return res.status(400).send(error);
  }

  try {
    await createUser(createUserDto);

    return res.status(201).json({ status: 'SUCCESS' });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/verify', async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ status: 'INVALID_TOKEN' });
  }

  const [scheme, accessToken] = authorization.split(' ');

  if (scheme !== 'Bearer') {
    return res.status(401).send({ status: 'INVALID_TOKEN' });
  }

  try {
    const user = await verifyAccessToken(accessToken);

    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send(error);
  }
});
