import { hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { IsEmail, IsNotEmpty, MinLength, validateOrReject } from 'class-validator';
import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import { authenticate } from 'passport';

import { prisma } from './prisma';

class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsNotEmpty()
  username: string;
}

export const router = Router();

router.get('/google', authenticate('google', { scope: ['email'], session: false }));

router.get(
  '/google/callback',
  authenticate('google', { session: false, successRedirect: 'http://localhost:4200' })
);

router.post('/login', authenticate('local', { session: false }), (req, res) => {
  const accessToken = sign(req.user, 'secret');

  return res.status(200).send({ status: 'SUCCESS', accessToken });
});

router.post('/signup', async (req, res) => {
  const createUserDto = plainToClass(CreateUserDto, req.body);

  try {
    await validateOrReject(createUserDto);
  } catch (error) {
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

router.post('/verify', authenticate('jwt', { session: false }), (req, res) =>
  res.status(200).send({ user: req.user })
);
