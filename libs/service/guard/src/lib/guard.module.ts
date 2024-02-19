import { Global, Module } from '@nestjs/common';
import { RmqModule } from '@np-shop-monorepo/service/rabbitmq';
import { UtilityModule } from '@np-shop-monorepo/service/utility';

@Global()
@Module({
  imports: [UtilityModule, RmqModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class GuardModule {}
