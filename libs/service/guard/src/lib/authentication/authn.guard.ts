import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { UtilityImplement } from '@np-shop-monorepo/service/utility';
import { LogLevel } from '@prisma/client/logger';
import { Request } from 'express';
import moment = require('moment');

@Injectable()
export class AuthnGuard implements CanActivate {
  constructor(private readonly util: UtilityImplement) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new HttpException('Authentication Required', HttpStatus.UNAUTHORIZED);
    }
    try {
      const payload = this.util.verifyAccessToken(token);
      if (!payload) throw new HttpException('Authentication Required', HttpStatus.UNAUTHORIZED);
      request['user'] = payload.user;
      request['token'] = token;
    } catch {
      const log = {
        id: this.util.generateId(),
        messageId: `unknown`,
        level: LogLevel.ERROR,
        timeStamp: moment().toDate(),
        eventName: `authenticate`,
        message: `JWT issues`,
        data: null,
      };
      await this.util.writeLog(log);
      throw new HttpException('Error Server!', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
