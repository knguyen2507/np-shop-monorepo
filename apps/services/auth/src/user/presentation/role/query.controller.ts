import { Controller, Get, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthnGuard, AuthoSAGuard } from '@np-shop-monorepo/service/guard';
import { UtilityImplement, pathPrefixQueryRole, pathPrefixRole } from '@np-shop-monorepo/service/utility';
import { FindRole } from '../../application/query/role/find';

@ApiTags(pathPrefixRole.swagger)
@Controller(pathPrefixRole.controller)
@UseGuards(AuthnGuard, AuthoSAGuard)
@ApiBearerAuth()
export class RoleQueryController {
  constructor(private readonly util: UtilityImplement, readonly queryBus: QueryBus) {}

  @Get(pathPrefixQueryRole.findRoles)
  async FindRoles(): Promise<void> {
    const msg = {
      messageId: this.util.generateId(),
      data: null,
    };
    const query = new FindRole(msg);
    return await this.queryBus.execute(query);
  }
}