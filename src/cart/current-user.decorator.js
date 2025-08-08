"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
var common_1 = require("@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)(function (data, ctx) {
    console.log(data, 'data');
    var request = ctx.switchToHttp().getRequest();
    console.log(request.user, 'request.user');
    return request.user;
});
