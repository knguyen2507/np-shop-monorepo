import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserInterface, UtilityImplement } from '@np-shop-monorepo/service/utility';
import { Login } from '.';
import { UserRepositoryImplement } from '../../../../infrastructure/repository/user';

@CommandHandler(Login)
export class LoginHandler implements ICommandHandler<Login, any> {
  constructor(private readonly util: UtilityImplement) {}
  @Inject()
  private readonly user: UserRepositoryImplement;

  async execute(command: Login): Promise<any> {
    const { username, password } = command.data;
    const user = await this.user.getByUsername(username);
    if (user) {
      if (this.util.passwordVerify(password, user.password)) {
        const [accessToken, refreshToken] = [
          this.util.generateAccessToken({
            id: user.id,
            name: user.name,
            phone: user.phone,
            username: user.username,
            password: null,
            roleId: user.roleId,
            isSuperAdmin: user.isSuperAdmin,
          } as UserInterface),
          this.util.generateRefreshToken({
            id: user.id,
            name: user.name,
            phone: user.phone,
            username: user.username,
            password: null,
            roleId: user.roleId,
            isSuperAdmin: user.isSuperAdmin,
          } as UserInterface),
        ];
        await this.util.setRefreshToken(accessToken, refreshToken);
        return {
          user: {
            id: user.id,
            name: user.name,
            phone: user.phone,
          },
          accessToken,
        };
      }
    }
    throw new HttpException('Sai tài khoản hoặc mật khẩu', HttpStatus.BAD_REQUEST);
  }
}
