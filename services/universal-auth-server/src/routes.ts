import { hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { CreateUserDto } from 'dto/mod';
import { Router } from 'express';
import { authenticate } from 'passport';

import { prisma } from './prisma';

export const router = Router();

router.get('/google', authenticate('google', { scope: ['email'], session: false }));

router.get(
  '/google/callback',
  authenticate('google', { session: false, successRedirect: 'http://localhost:4200' })
);

router.post('/signup', async (req, res) => {
  const createUserDto = plainToClass(CreateUserDto, req.body);

  try {
    await validateOrReject(createUserDto);
  } catch (error) {
    console.log(error);

    return res.status(400).send(error);
  }

  try {
    const { password, ...payload } = createUserDto;
    const encryptedPassword = await hash(password, 10);

    await prisma.user.create({ data: { ...payload, password: encryptedPassword } });

    return res.status(201).send({ status: 'SUCCESS' });
  } catch (error) {
    // Unique email error
    if (error.code === 'P2002') {
      return res.status(400).send({ status: 'DUPLICATED_EMAIL' });
    }

    return res.status(500).send(error);
  }
});

router.post('/signout', authenticate('jwt', { session: false }), (req, res) => {
  return res.status(200).send({ status: 'SUCCESS' });
});

router.post('/verify', authenticate('jwt', { session: false }), (req, res) =>
  res.status(200).send({ user: req.user })
);
