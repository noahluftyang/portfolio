import { resolve } from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

import * as packageInfo from '../../package.json';

const options = {
  apis: [resolve(process.cwd(), 'routes/signin.ts')],
  definition: {
    info: { title: packageInfo.name, version: packageInfo.version },
    openapi: '3.0.0',
  },
};

export const docs = swaggerJSDoc(options);
