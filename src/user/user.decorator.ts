import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Création d'un décorateur personnalisé pour récupérer l'utilisateur authentifié
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;  // Récupère l'utilisateur du request
  },
);
