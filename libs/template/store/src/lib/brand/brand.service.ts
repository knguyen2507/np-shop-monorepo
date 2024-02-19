import { Injectable } from '@angular/core';
import { environment } from '@np-shop-monorepo/template/environment';
import { FindMany, HttpService, TotalModel } from '@np-shop-monorepo/template/shared';
import { BrandModel } from './brand.model';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private httpService: HttpService) {}

  private apiUrl = `${environment.urlApi}/msx-shop`;

  findBrandList() {
    return this.httpService.get<FindMany<BrandModel>>(`${this.apiUrl}/brand/find`);
  }

  findBrandDetail(id: string) {
    return this.httpService.get<BrandModel>(`${this.apiUrl}/brand/detail`, {
      id,
    });
  }

  findBrandByCode(code: string) {
    return this.httpService.get<BrandModel>(`${this.apiUrl}/brand/find-by-code`, { code });
  }

  getTotalBrand() {
    return this.httpService.getAdmin<TotalModel>(`${this.apiUrl}/brand/get-total-brand`);
  }
}