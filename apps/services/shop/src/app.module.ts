import { Module } from '@nestjs/common';
import { CloudinaryModule } from '@np-shop-monorepo/service/cloudinary';
import { GuardModule } from '@np-shop-monorepo/service/guard';
import { ShopPrismaModule } from '@np-shop-monorepo/service/prisma';
import { RmqModule } from '@np-shop-monorepo/service/rabbitmq';
import { RedisModule } from '@np-shop-monorepo/service/redis';
import { UtilityModule } from '@np-shop-monorepo/service/utility';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ShopPrismaModule,
    UtilityModule,
    GuardModule,
    RedisModule,
    BrandModule,
    CloudinaryModule,
    CategoryModule,
    ProductModule,
    RmqModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
