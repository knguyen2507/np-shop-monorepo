import { FileUpload, UserInterface } from '@np-shop-monorepo/service/utility';
import { BaseCommand } from '../../base';

export class CreateCategory extends BaseCommand {
  data: {
    readonly name: string;
    readonly thumbnailLink: FileUpload;
    readonly categoryCode: string;
    readonly user: UserInterface;
  };

  constructor(data: CreateCategory) {
    super(data);
  }
}