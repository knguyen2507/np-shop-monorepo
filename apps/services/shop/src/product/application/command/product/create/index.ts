import { FileUpload, ShopCreateProductRequestProperties, UserInterface } from '@np-shop-monorepo/service/utility';
import { BaseCommand } from '../../base';

export class CreateProduct extends BaseCommand {
  data: {
    readonly productCode: string;
    readonly name: string;
    readonly categoryId: string;
    readonly brandId: string;
    readonly price: number;
    readonly description: string;
    readonly main: string;
    readonly shop: ShopCreateProductRequestProperties[];
    readonly files: Array<FileUpload>;
    readonly user: UserInterface;
  };

  constructor(data: CreateProduct) {
    super(data);
  }
}
