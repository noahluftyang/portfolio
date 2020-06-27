import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext) {
    const _context = GqlExecutionContext.create(context);
    const request = _context.getContext();
    const args = _context.getArgs();
    request.body = args.data;

    return request;
  }
}
