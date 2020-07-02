import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import fetch from 'node-fetch';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private authApiURL: string;

  constructor(configService: ConfigService) {
    this.authApiURL = configService.get<string>('AUTH_API_URL');
  }

  async use(req: Request, res: Response, next: any): Promise<void> {
    const { authorization } = req.headers;

    if (!authorization) {
      return next();
    }

    try {
      const response = await fetch(`${this.authApiURL}/verify`, {
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
