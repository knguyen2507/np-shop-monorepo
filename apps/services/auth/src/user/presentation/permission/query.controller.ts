import { Controller, Get, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthnGuard, AuthoSAGuard } from '@np-shop-monorepo/service/guard';
import { UtilityImplement, pathPrefixPermission, pathPrefixQueryPermission } from '@np-shop-monorepo/service/utility';
import { FindPermission } from '../../application/query/permission/find';

@ApiTags(pathPrefixPermission.swagger)
@Controller(pathPrefixPermission.controller)
@UseGuards(AuthnGuard, AuthoSAGuard)
@ApiBearerAuth()
export class RoleQueryController {
  constructor(private readonly util: UtilityImplement, readonly queryBus: QueryBus) {}

  @Get(pathPrefixQueryPermission.findPermissions)
  async FindPermissions(): Promise<any> {
    const msg = {
      messageId: this.util.generateId(),
      data: null,
    };
    const query = new FindPermission(msg);
    return await this.queryBus.execute(query);
  }
}
