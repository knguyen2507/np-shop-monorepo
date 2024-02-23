import { Injectable } from '@angular/core';
import { environment } from '@np-shop-monorepo/template/environment';
import { FindMany, HttpService, TotalModel } from '@np-shop-monorepo/template/shared';
import { ProductDetailModel, ProductModel, ProductModelFindByAdmin, ShopModel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpService: HttpService) {}

  // private apiUrl = `${environment.urlApi}/msx-shop`;
  private apiUrl = environment.urlApiShop;

  findProductList(pagi?: { offset: number; limit: number }, searchName?: string) {
    let payload: any = pagi;
    if (searchName) {
      payload = {
        ...pagi,
        searchName,
      };
    }

    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find`, payload);
  }

  findProductListByAdmin(pagi?: { offset: number; limit: number }, searchModel?: any) {
    if (searchModel) {
      searchModel = JSON.stringify(searchModel);
    }
    return this.httpService.getAdmin<FindMany<ProductModelFindByAdmin>>(`${this.apiUrl}/product/admin/find`, {
      ...pagi,
      searchModel,
    });
  }

  findProductDetail(productCode: string) {
    return this.httpService.get<ProductDetailModel>(`${this.apiUrl}/product/detail`, {
      productCode,
    });
  }

  findProductById(id: string) {
    return this.httpService.getAdmin<ProductDetailModel>(`${this.apiUrl}/product/find-by-id`, {
      id,
    });
  }

  findProductListByBrand(pagi?: { offset: number; limit: number }, brandCode?: string) {
    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find-by-brand`, {
      ...pagi,
      brandCode,
    });
  }

  findProductListByCategory(pagi?: { offset: number; limit: number }, categoryCode?: string) {
    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find-by-category`, {
      ...pagi,
      categoryCode,
    });
  }

  getTotalProduct() {
    return this.httpService.getAdmin<TotalModel>(`${this.apiUrl}/product/get-total-product`);
  }

  getShopByProduct(id: string) {
    return this.httpService.getAdmin<FindMany<ShopModel>>(`${this.apiUrl}/product/get-shop-by-product`, { id });
  }

  findShopDetail(id: string, shopId: string) {
    return this.httpService.getAdmin<ShopModel>(`${this.apiUrl}/product/find-shop-detail-by-product`, {
      id,
      shopId,
    });
  }

  createProduct(images: File[], product: Partial<ProductModel>) {
    const data = new FormData();
    const propertyName = Object.keys(product);
    if (images) {
      for (const image of images) {
        data.append('images', image);
      }
    }
    for (const property of propertyName) {
      if (property !== 'images') {
        data.append(property, JSON.stringify(product[property as keyof typeof product]));
      }
    }
    return this.httpService.postAdmin<void>(`${this.apiUrl}/product/create`, data);
  }
}
