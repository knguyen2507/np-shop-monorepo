import { UserInterface } from '@np-shop-monorepo/service/utility';
import { BaseCommand } from '../../base';

export class ShopPermission extends BaseCommand {
  data: {
    user: UserInterface;
    id: string | null;
  };

  constructor(data: ShopPermission) {
    super(data);
  }
}
