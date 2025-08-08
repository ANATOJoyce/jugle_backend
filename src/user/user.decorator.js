"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var common_1 = require("@nestjs/common");
// Création d'un décorateur personnalisé pour récupérer l'utilisateur authentifié
exports.User = (0, common_1.createParamDecorator)(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.user; // Récupère l'utilisateur du request
});
