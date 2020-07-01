import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import fetch from 'node-fetch';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const _context = GqlExecutionContext.create(context);
    const { authorization } = _context.getContext().req.headers;

    if (!authorization) {
      return false;
    }

    try {
      const response = await fetch('http://localhost:8001/verify', {
        headers: { authorization },
        method: 'POST',
      });

      if (response.ok) {
        const { user } = await response.json();
      }
    } catch (error) {
      console.error(error);
    }

    return true;
  }
}
