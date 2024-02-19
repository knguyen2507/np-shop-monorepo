import { Inject } from '@nestjs/common';
import { AuthPrismaService } from '@np-shop-monorepo/service/prisma';
import { RoleModel } from '../../../domain/model/roles';
import { RoleRepository } from '../../../domain/repository/role';
import { RoleFactory } from '../../factory/role';

export class RoleRepositoryImplement implements RoleRepository {
  @Inject()
  private readonly factory: RoleFactory;
  @Inject()
  private readonly prisma: AuthPrismaService;

  async save(data: RoleModel): Promise<RoleModel> {
    const saved = await this.prisma.roles.create({
      data,
    });
    return this.factory.createRoleModel(saved);
  }

  async getById(id: string): Promise<RoleModel> {
    const role = await this.prisma.roles.findUnique({
      where: { id },
    });
    return this.factory.createRoleModel(role);
  }

  async getByUserId(id: string): Promise<RoleModel> {
    const role = await this.prisma.roles.findFirst({
      where: { user: { some: { id } } },
    });
    return this.factory.createRoleModel(role);
  }

  async getSuperAdmin(): Promise<RoleModel[]> {
    const roles = await this.prisma.roles.findMany({
      where: { isSuperAdmin: true },
    });
    return this.factory.createRoleModels(roles);
  }

  async remove(id: string | string[]): Promise<void> {
    const data = Array.isArray(id) ? id : [id];
    await this.prisma.roles.deleteMany({ where: { id: { in: data } } });
  }

  async update(data: RoleModel): Promise<RoleModel> {
    const { id, ...model } = data;
    const updated = await this.prisma.roles.update({
      data: model,
      where: { id },
    });
    return this.factory.createRoleModel(updated);
  }
}
