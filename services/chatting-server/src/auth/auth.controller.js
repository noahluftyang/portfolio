const { Router } = require('express');

const router = Router();

/**
 * @swagger
 * /auth/login:
 *  post:
 *     tags:
 *     - auth
 */
router.post('/login', (req, res) => {});

exports.authRouter = router;
