export {
  ActionEnum,
  Permissions,
  Roles,
  Shops,
  StatusEnum,
  Users,
} from '@prisma/client/auth';
export * from './lib/auth/client/prisma.module';
export * from './lib/auth/client/prisma.service';

export { Brands, Categories, Images, PIC, Products } from '@prisma/client/shop';
export * from './lib/shop/client/prisma.module';
export * from './lib/shop/client/prisma.service';
