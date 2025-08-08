"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPolicies = exports.CHECK_POLICIES_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.CHECK_POLICIES_KEY = 'check_policy';
var CheckPolicies = function () {
    var handlers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        handlers[_i] = arguments[_i];
    }
    return (0, common_1.SetMetadata)(exports.CHECK_POLICIES_KEY, handlers);
};
exports.CheckPolicies = CheckPolicies;
