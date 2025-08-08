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
exports.CreateShippingMethodForSingleCartDTO = void 0;
var class_validator_1 = require("class-validator");
var CreateShippingMethodForSingleCartDTO = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _is_tax_inclusive_decorators;
    var _is_tax_inclusive_initializers = [];
    var _is_tax_inclusive_extraInitializers = [];
    var _shipping_option_id_decorators;
    var _shipping_option_id_initializers = [];
    var _shipping_option_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateShippingMethodForSingleCartDTO() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.amount = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.description = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.metadata = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                this.is_tax_inclusive = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _is_tax_inclusive_initializers, void 0));
                this.shipping_option_id = (__runInitializers(this, _is_tax_inclusive_extraInitializers), __runInitializers(this, _shipping_option_id_initializers, void 0));
                __runInitializers(this, _shipping_option_id_extraInitializers);
            }
            return CreateShippingMethodForSingleCartDTO;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, class_validator_1.IsString)()];
            _amount_decorators = [(0, class_validator_1.IsNumber)()];
            _description_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            _metadata_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            _is_tax_inclusive_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _shipping_option_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            __esDecorate(null, null, _is_tax_inclusive_decorators, { kind: "field", name: "is_tax_inclusive", static: false, private: false, access: { has: function (obj) { return "is_tax_inclusive" in obj; }, get: function (obj) { return obj.is_tax_inclusive; }, set: function (obj, value) { obj.is_tax_inclusive = value; } }, metadata: _metadata }, _is_tax_inclusive_initializers, _is_tax_inclusive_extraInitializers);
            __esDecorate(null, null, _shipping_option_id_decorators, { kind: "field", name: "shipping_option_id", static: false, private: false, access: { has: function (obj) { return "shipping_option_id" in obj; }, get: function (obj) { return obj.shipping_option_id; }, set: function (obj, value) { obj.shipping_option_id = value; } }, metadata: _metadata }, _shipping_option_id_initializers, _shipping_option_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateShippingMethodForSingleCartDTO = CreateShippingMethodForSingleCartDTO;
