import { Injectable } from '@angular/core';
import { environment } from '@np-shop-monorepo/template/environment';
import { FindMany, HttpService, TotalModel } from '@np-shop-monorepo/template/shared';
import { CategoryModel } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpService: HttpService) {}

  private apiUrl = `${environment.urlApi}/msx-shop`;

  findCategoryList() {
    return this.httpService.get<FindMany<CategoryModel>>(`${this.apiUrl}/category/find`);
  }

  findCategoryDetail(id: string) {
    return this.httpService.get<CategoryModel>(`${this.apiUrl}/category/detail`, { id });
  }

  findCategoryByCode(code: string) {
    return this.httpService.get<CategoryModel>(`${this.apiUrl}/category/find-by-code`, { code });
  }

  getTotalCategory() {
    return this.httpService.getAdmin<TotalModel>(`${this.apiUrl}/category/get-total-category`);
  }
}
