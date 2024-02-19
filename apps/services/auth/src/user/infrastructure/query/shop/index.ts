import { Inject } from '@nestjs/common';
import { AuthPrismaService } from '@np-shop-monorepo/service/prisma';
import { plainToClass } from 'class-transformer';
import { FindShopById } from '../../../application/query/shop/detail';
import { FindShopByIdResult } from '../../../application/query/shop/detail/result';
import { FindShop } from '../../../application/query/shop/find';
import { FindShopResult, FindShopResultItem } from '../../../application/query/shop/find/result';
import { ShopQuery } from '../../../domain/query/shop';

export class ShopQueryImplement implements ShopQuery {
  @Inject()
  private readonly prisma: AuthPrismaService;

  async find(query: FindShop): Promise<FindShopResult> {
    const conditions = [{ id: { in: query.data.ids } }];
    const [shops, total] = await Promise.all([
      this.prisma.shops.findMany({
        where: { AND: conditions },
        orderBy: [
          {
            id: 'asc',
          },
        ],
      }),
      this.prisma.shops.count({ where: { AND: conditions } }),
    ]);

    return {
      items: shops.map((i) => {
        return plainToClass(FindShopResultItem, i, {
          excludeExtraneousValues: true,
        });
      }),
      total,
    };
  }

  async findById(query: FindShopById): Promise<FindShopByIdResult> {
    const shop = await this.prisma.shops.findUnique({
      where: { id: query.data.id },
    });

    return plainToClass(FindShopByIdResult, shop, {
      excludeExtraneousValues: true,
    });
  }
}