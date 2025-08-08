"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslAbilityFactory = void 0;
var common_1 = require("@nestjs/common");
var ability_1 = require("@casl/ability");
var action_enum_1 = require("../action.enum");
var role_enum_1 = require("../../auth/role.enum");
var order_entity_1 = require("../../order/entities/CommandePrincipale/order.entity");
var CaslAbilityFactory = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CaslAbilityFactory = _classThis = /** @class */ (function () {
        function CaslAbilityFactory_1() {
        }
        CaslAbilityFactory_1.prototype.createForUser = function (user) {
            var _a;
            var _b = new ability_1.AbilityBuilder(ability_1.createMongoAbility), can = _b.can, cannot = _b.cannot, build = _b.build;
            if (!user) {
                // Cas anonyme ou non authentifié
                can(action_enum_1.Action.Read, 'all'); // ou limite encore plus
            }
            else if ((_a = user.role) === null || _a === void 0 ? void 0 : _a.includes(role_enum_1.Role.ADMIN)) {
                can(action_enum_1.Action.Manage, 'all');
            }
            else if (user.role === role_enum_1.Role.VENDOR) {
                can(action_enum_1.Action.Read, 'all');
                can(action_enum_1.Action.Create, order_entity_1.Order);
                cannot(action_enum_1.Action.Delete, order_entity_1.Order);
            }
            else if (user.role === role_enum_1.Role.CUSTOMER) {
                can(action_enum_1.Action.Read, 'all');
                can(action_enum_1.Action.Create, order_entity_1.Order);
                cannot(action_enum_1.Action.Delete, order_entity_1.Order);
            }
            return build({
                detectSubjectType: function (item) { return item.constructor; },
            });
        };
        return CaslAbilityFactory_1;
    }());
    __setFunctionName(_classThis, "CaslAbilityFactory");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CaslAbilityFactory = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CaslAbilityFactory = _classThis;
}();
exports.CaslAbilityFactory = CaslAbilityFactory;
