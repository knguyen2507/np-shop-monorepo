import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';
import { RMQ, environment } from '@np-shop-monorepo/service/utility';

@Global()
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: RMQ.EXCHANGE,
          type: 'topic',
        },
      ],
      uri: environment.RMQ_URL,
      connectionInitOptions: { wait: true },
      enableControllerDiscovery: true,
    }),
  ],
  providers: [],
  exports: [RabbitMQModule],
})
export class RmqModule {}
