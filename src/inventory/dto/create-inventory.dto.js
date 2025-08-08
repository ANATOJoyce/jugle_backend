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
exports.CreateInventoryDto = void 0;
var class_validator_1 = require("class-validator");
var CreateInventoryDto = function () {
    var _a;
    var _sku_decorators;
    var _sku_initializers = [];
    var _sku_extraInitializers = [];
    var _stock_quantity_decorators;
    var _stock_quantity_initializers = [];
    var _stock_quantity_extraInitializers = [];
    var _product_id_decorators;
    var _product_id_initializers = [];
    var _product_id_extraInitializers = [];
    var _location_id_decorators;
    var _location_id_initializers = [];
    var _location_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateInventoryDto() {
                this.sku = __runInitializers(this, _sku_initializers, void 0);
                this.stock_quantity = (__runInitializers(this, _sku_extraInitializers), __runInitializers(this, _stock_quantity_initializers, void 0));
                this.product_id = (__runInitializers(this, _stock_quantity_extraInitializers), __runInitializers(this, _product_id_initializers, void 0));
                this.location_id = (__runInitializers(this, _product_id_extraInitializers), __runInitializers(this, _location_id_initializers, void 0));
                __runInitializers(this, _location_id_extraInitializers);
            }
            return CreateInventoryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sku_decorators = [(0, class_validator_1.IsString)()];
            _stock_quantity_decorators = [(0, class_validator_1.IsNumber)()];
            _product_id_decorators = [(0, class_validator_1.IsMongoId)()];
            _location_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            __esDecorate(null, null, _sku_decorators, { kind: "field", name: "sku", static: false, private: false, access: { has: function (obj) { return "sku" in obj; }, get: function (obj) { return obj.sku; }, set: function (obj, value) { obj.sku = value; } }, metadata: _metadata }, _sku_initializers, _sku_extraInitializers);
            __esDecorate(null, null, _stock_quantity_decorators, { kind: "field", name: "stock_quantity", static: false, private: false, access: { has: function (obj) { return "stock_quantity" in obj; }, get: function (obj) { return obj.stock_quantity; }, set: function (obj, value) { obj.stock_quantity = value; } }, metadata: _metadata }, _stock_quantity_initializers, _stock_quantity_extraInitializers);
            __esDecorate(null, null, _product_id_decorators, { kind: "field", name: "product_id", static: false, private: false, access: { has: function (obj) { return "product_id" in obj; }, get: function (obj) { return obj.product_id; }, set: function (obj, value) { obj.product_id = value; } }, metadata: _metadata }, _product_id_initializers, _product_id_extraInitializers);
            __esDecorate(null, null, _location_id_decorators, { kind: "field", name: "location_id", static: false, private: false, access: { has: function (obj) { return "location_id" in obj; }, get: function (obj) { return obj.location_id; }, set: function (obj, value) { obj.location_id = value; } }, metadata: _metadata }, _location_id_initializers, _location_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateInventoryDto = CreateInventoryDto;
