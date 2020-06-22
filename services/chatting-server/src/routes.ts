import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';

import { authRouter } from './auth/auth.controller';
import { spec } from './spec';
import { userRouter } from './user/user.controller';

export const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/docs', serve, setup(spec));
