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
exports.CreateCartDto = void 0;
var class_validator_1 = require("class-validator");
var CreateCartDto = function () {
    var _a;
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _region_id_decorators;
    var _region_id_initializers = [];
    var _region_id_extraInitializers = [];
    var _customer_id_decorators;
    var _customer_id_initializers = [];
    var _customer_id_extraInitializers = [];
    var _sales_channel_id_decorators;
    var _sales_channel_id_initializers = [];
    var _sales_channel_id_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateCartDto() {
                this.currency_code = __runInitializers(this, _currency_code_initializers, void 0);
                this.region_id = (__runInitializers(this, _currency_code_extraInitializers), __runInitializers(this, _region_id_initializers, void 0));
                this.customer_id = (__runInitializers(this, _region_id_extraInitializers), __runInitializers(this, _customer_id_initializers, void 0));
                this.sales_channel_id = (__runInitializers(this, _customer_id_extraInitializers), __runInitializers(this, _sales_channel_id_initializers, void 0));
                this.email = (__runInitializers(this, _sales_channel_id_extraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.metadata = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                __runInitializers(this, _metadata_extraInitializers);
            }
            return CreateCartDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _currency_code_decorators = [(0, class_validator_1.IsString)()];
            _region_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _customer_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _sales_channel_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _email_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEmail)()];
            _metadata_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
            __esDecorate(null, null, _region_id_decorators, { kind: "field", name: "region_id", static: false, private: false, access: { has: function (obj) { return "region_id" in obj; }, get: function (obj) { return obj.region_id; }, set: function (obj, value) { obj.region_id = value; } }, metadata: _metadata }, _region_id_initializers, _region_id_extraInitializers);
            __esDecorate(null, null, _customer_id_decorators, { kind: "field", name: "customer_id", static: false, private: false, access: { has: function (obj) { return "customer_id" in obj; }, get: function (obj) { return obj.customer_id; }, set: function (obj, value) { obj.customer_id = value; } }, metadata: _metadata }, _customer_id_initializers, _customer_id_extraInitializers);
            __esDecorate(null, null, _sales_channel_id_decorators, { kind: "field", name: "sales_channel_id", static: false, private: false, access: { has: function (obj) { return "sales_channel_id" in obj; }, get: function (obj) { return obj.sales_channel_id; }, set: function (obj, value) { obj.sales_channel_id = value; } }, metadata: _metadata }, _sales_channel_id_initializers, _sales_channel_id_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateCartDto = CreateCartDto;
