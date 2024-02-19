import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/auth';

@Injectable()
export class AuthPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this['$connect']();
  }
}
