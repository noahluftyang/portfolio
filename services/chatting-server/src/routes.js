const { Router } = require('express');
const { serve, setup } = require('swagger-ui-express');

const { authRouter } = require('./auth/auth.controller');
const { userRouter } = require('./user/user.controller');
const { spec } = require('./spec');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/docs', serve, setup(spec));

exports.router = router;
