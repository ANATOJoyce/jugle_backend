// src/common/guards/has-store.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/user/user.service';
import { Role } from 'src/auth/role.enum';
import { AuthRequest } from 'src/auth/auth-request';

@Injectable()
export class HasStoreGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const user = request.user;

    if (!user) {
      throw new UnauthorizedException('Utilisateur non authentifié.');
    }

    // Autoriser si l'utilisateur n'est pas VENDOR (admin ou autre)
    if (user.role !== Role.VENDOR) {
      return true;
    }

    const hasStore = await this.userService.checkUserHasStoreByEmailOrPhone(
      user.email,
      user.phone,
    );

    if (!hasStore) {
      throw new ForbiddenException('Accès refusé : aucune boutique trouvée crée votre boutique.');
    }

    return true;
  }
}
