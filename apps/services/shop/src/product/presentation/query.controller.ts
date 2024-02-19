import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthnGuard, AuthoShopGuard } from '@np-shop-monorepo/service/guard';
import {
  FindProductByAdminRequestDTO,
  FindProductByBrandRequestDTO,
  FindProductByCategoryRequestDTO,
  FindProductByCodeRequestDTO,
  FindProductByIdRequestDTO,
  FindProductByIdsRequestDTO,
  FindProductRequestDTO,
  FindProductSimilarRequestDTO,
  FindShopDetailByProductRequestDTO,
  GetShopByProductRequestDTO,
  RequestWithUser,
  UtilityImplement,
  pathPrefixProduct,
  pathPrefixQueryProduct,
} from '@np-shop-monorepo/service/utility';
import { FindProductByCode } from '../application/query/product/detail';
import { FindShopByProduct } from '../application/query/product/detial-shop';
import { FindProduct } from '../application/query/product/find';
import { FindProductByAdmin } from '../application/query/product/find-by-admin';
import { FindProductByBrand } from '../application/query/product/find-by-brand';
import { FindProductByCategory } from '../application/query/product/find-by-category';
import { FindProductById } from '../application/query/product/find-by-id';
import { FindProductByIds } from '../application/query/product/find-by-ids';
import { FindProductSimilar } from '../application/query/product/find-similar';
import { GetShopByProduct } from '../application/query/product/get-shop';
import { GetTotalProduct } from '../application/query/product/get-total';

@ApiTags(pathPrefixProduct.swagger)
@Controller(pathPrefixProduct.controller)
export class ProductQueryController {
  constructor(private readonly util: UtilityImplement, readonly queryBus: QueryBus) {}

  @Get(pathPrefixQueryProduct.findProductListByAdmin)
  @UseGuards(AuthnGuard, AuthoShopGuard)
  @ApiBearerAuth()
  async FindProductListByAdmin(
    @Query() query: FindProductByAdminRequestDTO,
    @Req() request: RequestWithUser,
  ): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: { ...query, shopIds: request.shopIds },
    };
    const product = new FindProductByAdmin(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.findProducts)
  async FindProducts(@Query() query: FindProductRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: query,
    };
    const product = new FindProduct(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.findProductByCode)
  async FindProductByCode(@Query() query: FindProductByCodeRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: query,
    };
    const product = new FindProductByCode(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.findProductById)
  @UseGuards(AuthnGuard, AuthoShopGuard)
  async FindProductById(@Query() query: FindProductByIdRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: query,
    };
    const product = new FindProductById(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.findProductByBrand)
  async FindProductByBrand(@Query() query: FindProductByBrandRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: query,
    };
    const product = new FindProductByBrand(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.findProductByCategory)
  async FindProductByCategory(@Query() query: FindProductByCategoryRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: query,
    };
    const product = new FindProductByCategory(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.findProductByIds)
  async FindProductByIds(@Query() query: FindProductByIdsRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: query,
    };
    const product = new FindProductByIds(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.findProductSimilar)
  async FindProductSimilar(@Query() query: FindProductSimilarRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: query,
    };
    const product = new FindProductSimilar(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.getShopByProduct)
  async GetShopByProduct(@Query() query: GetShopByProductRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: query,
    };
    const product = new GetShopByProduct(msg);
    return await this.queryBus.execute(product);
  }

  @Get(pathPrefixQueryProduct.getTotalProduct)
  @UseGuards(AuthnGuard, AuthoShopGuard)
  @ApiBearerAuth()
  async GetTotalProduct(@Req() request: RequestWithUser): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: { shopIds: request.shopIds },
    };
    const query = new GetTotalProduct(msg);
    return await this.queryBus.execute(query);
  }

  @Get(pathPrefixQueryProduct.findShopDetalByProduct)
  @UseGuards(AuthnGuard, AuthoShopGuard)
  @ApiBearerAuth()
  async FindShopByProduct(@Query() query: FindShopDetailByProductRequestDTO): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: { id: query.id, shopId: query.shopId },
    };
    const product = new FindShopByProduct(msg);
    return await this.queryBus.execute(product);
  }
}