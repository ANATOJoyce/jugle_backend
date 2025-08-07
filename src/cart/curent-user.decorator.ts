import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    // Selon la structure du JWT, l'id peut être dans user.sub ou user.id
    return user?.sub || user?.id;
  },
);
