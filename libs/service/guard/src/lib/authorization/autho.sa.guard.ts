import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RequestWithUser } from '@np-shop-monorepo/service/utility';

@Injectable()
export class AuthoSAGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    const result = user.isSuperAdmin ? true : false;
    return result;
  }
}
