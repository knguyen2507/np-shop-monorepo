import { Component, Input } from '@angular/core';
import { environment } from '@np-shop-monorepo/template/environment';

import * as AppStore from '@np-shop-monorepo/template/store';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() data!: Partial<AppStore.ProductStore.ProductModel>[];

  detailCard(item: Partial<AppStore.ProductStore.ProductModel>) {
    window.location.href = `${environment.shopHost}/cua-hang/san-pham/chi-tiet/${item.productCode}`;
  }
}
