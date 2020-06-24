import { resolve } from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

import packageInfo from '../package.json';

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

export const spec = swaggerJSDoc(options);