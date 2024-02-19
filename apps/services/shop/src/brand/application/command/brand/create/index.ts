import { FileUpload, UserInterface } from '@np-shop-monorepo/service/utility';
import { BaseCommand } from '../../base';

export class CreateBrand extends BaseCommand {
  data: {
    readonly name: string;
    readonly thumbnailLink: FileUpload;
    readonly brandCode: string;
    readonly user: UserInterface;
  };

  constructor(data: CreateBrand) {
    super(data);
  }
}
