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
exports.ShippingMethodTaxLineResponseDTO = exports.CreateShippingMethodTaxLineDTO = void 0;
var class_validator_1 = require("class-validator");
var CreateShippingMethodTaxLineDTO = function () {
    var _a;
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _rate_decorators;
    var _rate_initializers = [];
    var _rate_extraInitializers = [];
    var _shipping_method_id_decorators;
    var _shipping_method_id_initializers = [];
    var _shipping_method_id_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _provider_id_decorators;
    var _provider_id_initializers = [];
    var _provider_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateShippingMethodTaxLineDTO() {
                this.code = __runInitializers(this, _code_initializers, void 0);
                this.rate = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _rate_initializers, void 0));
                this.shipping_method_id = (__runInitializers(this, _rate_extraInitializers), __runInitializers(this, _shipping_method_id_initializers, void 0));
                this.description = (__runInitializers(this, _shipping_method_id_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.provider_id = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _provider_id_initializers, void 0));
                __runInitializers(this, _provider_id_extraInitializers);
            }
            return CreateShippingMethodTaxLineDTO;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _code_decorators = [(0, class_validator_1.IsString)()];
            _rate_decorators = [(0, class_validator_1.IsNumber)()];
            _shipping_method_id_decorators = [(0, class_validator_1.IsMongoId)()];
            _description_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _provider_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
            __esDecorate(null, null, _rate_decorators, { kind: "field", name: "rate", static: false, private: false, access: { has: function (obj) { return "rate" in obj; }, get: function (obj) { return obj.rate; }, set: function (obj, value) { obj.rate = value; } }, metadata: _metadata }, _rate_initializers, _rate_extraInitializers);
            __esDecorate(null, null, _shipping_method_id_decorators, { kind: "field", name: "shipping_method_id", static: false, private: false, access: { has: function (obj) { return "shipping_method_id" in obj; }, get: function (obj) { return obj.shipping_method_id; }, set: function (obj, value) { obj.shipping_method_id = value; } }, metadata: _metadata }, _shipping_method_id_initializers, _shipping_method_id_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _provider_id_decorators, { kind: "field", name: "provider_id", static: false, private: false, access: { has: function (obj) { return "provider_id" in obj; }, get: function (obj) { return obj.provider_id; }, set: function (obj, value) { obj.provider_id = value; } }, metadata: _metadata }, _provider_id_initializers, _provider_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateShippingMethodTaxLineDTO = CreateShippingMethodTaxLineDTO;
var ShippingMethodTaxLineResponseDTO = /** @class */ (function () {
    function ShippingMethodTaxLineResponseDTO() {
    }
    return ShippingMethodTaxLineResponseDTO;
}());
exports.ShippingMethodTaxLineResponseDTO = ShippingMethodTaxLineResponseDTO;
