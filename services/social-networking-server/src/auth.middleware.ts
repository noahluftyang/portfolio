import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import fetch from 'node-fetch';

export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: any): Promise<Response | void> {
    const { authorization } = req.headers;

    if (!authorization) {
      return next();
    }

    try {
      const response = await fetch('http://localhost:8001/verify', {
        headers: { authorization },
        method: 'POST',
      });

      if (response.ok) {
        req.user = await response.json();
      }
    } catch (error) {
      throw new Error(error);
    }

    next();
  }
}
