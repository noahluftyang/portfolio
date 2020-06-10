const { resolve } = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const packageInfo = require('../package.json');

const options = {
  apis: [
    resolve(process.cwd(), 'auth/auth.controller.js'),
    resolve(process.cwd(), 'user/user.controller.js'),
  ],
  definition: {
    info: { title: packageInfo.title, version: packageInfo.version },
    openapi: '3.0.0',
  },
};

exports.spec = swaggerJSDoc(options);
