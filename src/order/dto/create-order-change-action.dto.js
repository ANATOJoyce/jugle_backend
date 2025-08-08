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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderChangeActionDTO = exports.OrderActionType = void 0;
// src/order/dto/create-order-change-action.dto.ts
var class_validator_1 = require("class-validator");
var OrderActionType;
(function (OrderActionType) {
    OrderActionType["ITEM_ADD"] = "ITEM_ADD";
    OrderActionType["ITEM_REMOVE"] = "ITEM_REMOVE";
    OrderActionType["ADDRESS_UPDATE"] = "ADDRESS_UPDATE";
    OrderActionType["PAYMENT_CAPTURE"] = "PAYMENT_CAPTURE";
    // Ajoute ici d’autres actions possibles si besoin
})(OrderActionType || (exports.OrderActionType = OrderActionType = {}));
var CreateOrderChangeActionDTO = function () {
    var _a;
    var _order_id_decorators;
    var _order_id_initializers = [];
    var _order_id_extraInitializers = [];
    var _order_change_id_decorators;
    var _order_change_id_initializers = [];
    var _order_change_id_extraInitializers = [];
    var _action_decorators;
    var _action_initializers = [];
    var _action_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateOrderChangeActionDTO() {
                this.order_id = __runInitializers(this, _order_id_initializers, void 0);
                this.order_change_id = (__runInitializers(this, _order_id_extraInitializers), __runInitializers(this, _order_change_id_initializers, void 0));
                this.action = (__runInitializers(this, _order_change_id_extraInitializers), __runInitializers(this, _action_initializers, void 0));
                __runInitializers(this, _action_extraInitializers);
            }
            return CreateOrderChangeActionDTO;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _order_id_decorators = [(0, class_validator_1.IsUUID)(), (0, class_validator_1.IsNotEmpty)()];
            _order_change_id_decorators = [(0, class_validator_1.IsUUID)(), (0, class_validator_1.IsNotEmpty)()];
            _action_decorators = [(0, class_validator_1.IsEnum)(OrderActionType), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _order_id_decorators, { kind: "field", name: "order_id", static: false, private: false, access: { has: function (obj) { return "order_id" in obj; }, get: function (obj) { return obj.order_id; }, set: function (obj, value) { obj.order_id = value; } }, metadata: _metadata }, _order_id_initializers, _order_id_extraInitializers);
            __esDecorate(null, null, _order_change_id_decorators, { kind: "field", name: "order_change_id", static: false, private: false, access: { has: function (obj) { return "order_change_id" in obj; }, get: function (obj) { return obj.order_change_id; }, set: function (obj, value) { obj.order_change_id = value; } }, metadata: _metadata }, _order_change_id_initializers, _order_change_id_extraInitializers);
            __esDecorate(null, null, _action_decorators, { kind: "field", name: "action", static: false, private: false, access: { has: function (obj) { return "action" in obj; }, get: function (obj) { return obj.action; }, set: function (obj, value) { obj.action = value; } }, metadata: _metadata }, _action_initializers, _action_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateOrderChangeActionDTO = CreateOrderChangeActionDTO;
