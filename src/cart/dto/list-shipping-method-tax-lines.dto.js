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
exports.ListShippingMethodTaxLinesQueryDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var ListShippingMethodTaxLinesQueryDto = function () {
    var _a;
    var _ids_decorators;
    var _ids_initializers = [];
    var _ids_extraInitializers = [];
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _provider_id_decorators;
    var _provider_id_initializers = [];
    var _provider_id_extraInitializers = [];
    var _shipping_method_id_decorators;
    var _shipping_method_id_initializers = [];
    var _shipping_method_id_extraInitializers = [];
    var _skip_decorators;
    var _skip_initializers = [];
    var _skip_extraInitializers = [];
    var _take_decorators;
    var _take_initializers = [];
    var _take_extraInitializers = [];
    var _relations_decorators;
    var _relations_initializers = [];
    var _relations_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ListShippingMethodTaxLinesQueryDto() {
                this.ids = __runInitializers(this, _ids_initializers, void 0);
                this.code = (__runInitializers(this, _ids_extraInitializers), __runInitializers(this, _code_initializers, void 0));
                this.provider_id = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _provider_id_initializers, void 0));
                this.shipping_method_id = (__runInitializers(this, _provider_id_extraInitializers), __runInitializers(this, _shipping_method_id_initializers, void 0));
                this.skip = (__runInitializers(this, _shipping_method_id_extraInitializers), __runInitializers(this, _skip_initializers, void 0));
                this.take = (__runInitializers(this, _skip_extraInitializers), __runInitializers(this, _take_initializers, void 0));
                this.relations = (__runInitializers(this, _take_extraInitializers), __runInitializers(this, _relations_initializers, void 0));
                __runInitializers(this, _relations_extraInitializers);
            }
            return ListShippingMethodTaxLinesQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _ids_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsString)({ each: true })];
            _code_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _provider_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _shipping_method_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _skip_decorators = [(0, class_validator_1.IsOptional)(), (0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsNumber)()];
            _take_decorators = [(0, class_validator_1.IsOptional)(), (0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsNumber)()];
            _relations_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsString)({ each: true })];
            __esDecorate(null, null, _ids_decorators, { kind: "field", name: "ids", static: false, private: false, access: { has: function (obj) { return "ids" in obj; }, get: function (obj) { return obj.ids; }, set: function (obj, value) { obj.ids = value; } }, metadata: _metadata }, _ids_initializers, _ids_extraInitializers);
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
            __esDecorate(null, null, _provider_id_decorators, { kind: "field", name: "provider_id", static: false, private: false, access: { has: function (obj) { return "provider_id" in obj; }, get: function (obj) { return obj.provider_id; }, set: function (obj, value) { obj.provider_id = value; } }, metadata: _metadata }, _provider_id_initializers, _provider_id_extraInitializers);
            __esDecorate(null, null, _shipping_method_id_decorators, { kind: "field", name: "shipping_method_id", static: false, private: false, access: { has: function (obj) { return "shipping_method_id" in obj; }, get: function (obj) { return obj.shipping_method_id; }, set: function (obj, value) { obj.shipping_method_id = value; } }, metadata: _metadata }, _shipping_method_id_initializers, _shipping_method_id_extraInitializers);
            __esDecorate(null, null, _skip_decorators, { kind: "field", name: "skip", static: false, private: false, access: { has: function (obj) { return "skip" in obj; }, get: function (obj) { return obj.skip; }, set: function (obj, value) { obj.skip = value; } }, metadata: _metadata }, _skip_initializers, _skip_extraInitializers);
            __esDecorate(null, null, _take_decorators, { kind: "field", name: "take", static: false, private: false, access: { has: function (obj) { return "take" in obj; }, get: function (obj) { return obj.take; }, set: function (obj, value) { obj.take = value; } }, metadata: _metadata }, _take_initializers, _take_extraInitializers);
            __esDecorate(null, null, _relations_decorators, { kind: "field", name: "relations", static: false, private: false, access: { has: function (obj) { return "relations" in obj; }, get: function (obj) { return obj.relations; }, set: function (obj, value) { obj.relations = value; } }, metadata: _metadata }, _relations_initializers, _relations_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ListShippingMethodTaxLinesQueryDto = ListShippingMethodTaxLinesQueryDto;
