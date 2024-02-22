import { BaseQuery } from '../../base';

export class FindProductByAdmin extends BaseQuery {
  data: {
    shopIds: string[];
    offset: number;
    limit: number;
    searchModel?: string;
  };

  constructor(data: FindProductByAdmin) {
    super(data);
  }
}
