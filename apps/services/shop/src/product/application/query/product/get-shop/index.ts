import { BaseQuery } from '../../base';

export class GetShopByProduct extends BaseQuery {
  data: {
    readonly id: string;
    shopIds: string[];
  };

  constructor(data: GetShopByProduct) {
    super(data);
  }
}
