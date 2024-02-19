import { Module } from '@nestjs/common';
import { CaslModule } from '@np-shop-monorepo/service/casl';
import { CloudinaryModule } from '@np-shop-monorepo/service/cloudinary';
import { GuardModule } from '@np-shop-monorepo/service/guard';
import { AuthPrismaModule } from '@np-shop-monorepo/service/prisma';
import { RmqModule } from '@np-shop-monorepo/service/rabbitmq';
import { RedisModule } from '@np-shop-monorepo/service/redis';
import { UtilityModule } from '@np-shop-monorepo/service/utility';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthPrismaModule,
    UtilityModule,
    GuardModule,
    RedisModule,
    CloudinaryModule,
    UserModule,
    RmqModule,
    CaslModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
