"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentStore = void 0;
// current-store.decorator.ts
var common_1 = require("@nestjs/common");
exports.CurrentStore = (0, common_1.createParamDecorator)(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.store; // injecté par un guard
});
