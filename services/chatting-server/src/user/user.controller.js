const { Router } = require('express');

const router = Router();

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *      - user
 */
router.get('/', (req, res) => {});

exports.userRouter = router;
