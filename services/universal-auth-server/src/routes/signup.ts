import { hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { CreateUserDto } from 'dto/mod';
import { Router } from 'express';

import { prisma } from '../utils/prisma';

export const router = Router();

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
    console.error(error);

    // Unique email error
    if (error.code === 'P2002') {
      return res.status(400).send({ status: 'DUPLICATED_EMAIL' });
    }

    return res.status(500).send(error);
  }
});
