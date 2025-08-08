"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.ProductVariantSchema = exports.ProductVariant = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ProductVariant = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _sku_decorators;
    var _sku_initializers = [];
    var _sku_extraInitializers = [];
    var _barcode_decorators;
    var _barcode_initializers = [];
    var _barcode_extraInitializers = [];
    var _ean_decorators;
    var _ean_initializers = [];
    var _ean_extraInitializers = [];
    var _upc_decorators;
    var _upc_initializers = [];
    var _upc_extraInitializers = [];
    var _allow_backorder_decorators;
    var _allow_backorder_initializers = [];
    var _allow_backorder_extraInitializers = [];
    var _manage_inventory_decorators;
    var _manage_inventory_initializers = [];
    var _manage_inventory_extraInitializers = [];
    var _hs_code_decorators;
    var _hs_code_initializers = [];
    var _hs_code_extraInitializers = [];
    var _origin_country_decorators;
    var _origin_country_initializers = [];
    var _origin_country_extraInitializers = [];
    var _mid_code_decorators;
    var _mid_code_initializers = [];
    var _mid_code_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _weight_decorators;
    var _weight_initializers = [];
    var _weight_extraInitializers = [];
    var _length_decorators;
    var _length_initializers = [];
    var _length_extraInitializers = [];
    var _height_decorators;
    var _height_initializers = [];
    var _height_extraInitializers = [];
    var _width_decorators;
    var _width_initializers = [];
    var _width_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _variant_rank_decorators;
    var _variant_rank_initializers = [];
    var _variant_rank_extraInitializers = [];
    var _product_decorators;
    var _product_initializers = [];
    var _product_extraInitializers = [];
    var _options_decorators;
    var _options_initializers = [];
    var _options_extraInitializers = [];
    var _prices_decorators;
    var _prices_initializers = [];
    var _prices_extraInitializers = [];
    var ProductVariant = _classThis = /** @class */ (function (_super) {
        __extends(ProductVariant_1, _super);
        function ProductVariant_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = __runInitializers(_this, _title_initializers, void 0);
            _this.sku = (__runInitializers(_this, _title_extraInitializers), __runInitializers(_this, _sku_initializers, void 0));
            _this.barcode = (__runInitializers(_this, _sku_extraInitializers), __runInitializers(_this, _barcode_initializers, void 0));
            _this.ean = (__runInitializers(_this, _barcode_extraInitializers), __runInitializers(_this, _ean_initializers, void 0));
            _this.upc = (__runInitializers(_this, _ean_extraInitializers), __runInitializers(_this, _upc_initializers, void 0));
            _this.allow_backorder = (__runInitializers(_this, _upc_extraInitializers), __runInitializers(_this, _allow_backorder_initializers, void 0));
            _this.manage_inventory = (__runInitializers(_this, _allow_backorder_extraInitializers), __runInitializers(_this, _manage_inventory_initializers, void 0));
            _this.hs_code = (__runInitializers(_this, _manage_inventory_extraInitializers), __runInitializers(_this, _hs_code_initializers, void 0));
            _this.origin_country = (__runInitializers(_this, _hs_code_extraInitializers), __runInitializers(_this, _origin_country_initializers, void 0));
            _this.mid_code = (__runInitializers(_this, _origin_country_extraInitializers), __runInitializers(_this, _mid_code_initializers, void 0));
            _this.material = (__runInitializers(_this, _mid_code_extraInitializers), __runInitializers(_this, _material_initializers, void 0));
            _this.weight = (__runInitializers(_this, _material_extraInitializers), __runInitializers(_this, _weight_initializers, void 0));
            _this.length = (__runInitializers(_this, _weight_extraInitializers), __runInitializers(_this, _length_initializers, void 0));
            _this.height = (__runInitializers(_this, _length_extraInitializers), __runInitializers(_this, _height_initializers, void 0));
            _this.width = (__runInitializers(_this, _height_extraInitializers), __runInitializers(_this, _width_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _width_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.variant_rank = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _variant_rank_initializers, void 0));
            _this.product = (__runInitializers(_this, _variant_rank_extraInitializers), __runInitializers(_this, _product_initializers, void 0));
            _this.options = (__runInitializers(_this, _product_extraInitializers), __runInitializers(_this, _options_initializers, void 0));
            _this.prices = (__runInitializers(_this, _options_extraInitializers), __runInitializers(_this, _prices_initializers, void 0)); // ou MoneyAmount[] si tu veux le peupler
            __runInitializers(_this, _prices_extraInitializers);
            return _this;
        }
        return ProductVariant_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ProductVariant");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _sku_decorators = [(0, mongoose_1.Prop)({ index: true, unique: true, sparse: true })];
        _barcode_decorators = [(0, mongoose_1.Prop)({ index: true, unique: true, sparse: true })];
        _ean_decorators = [(0, mongoose_1.Prop)({ index: true, unique: true, sparse: true })];
        _upc_decorators = [(0, mongoose_1.Prop)({ index: true, unique: true, sparse: true })];
        _allow_backorder_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _manage_inventory_decorators = [(0, mongoose_1.Prop)({ default: true })];
        _hs_code_decorators = [(0, mongoose_1.Prop)()];
        _origin_country_decorators = [(0, mongoose_1.Prop)()];
        _mid_code_decorators = [(0, mongoose_1.Prop)()];
        _material_decorators = [(0, mongoose_1.Prop)()];
        _weight_decorators = [(0, mongoose_1.Prop)()];
        _length_decorators = [(0, mongoose_1.Prop)()];
        _height_decorators = [(0, mongoose_1.Prop)()];
        _width_decorators = [(0, mongoose_1.Prop)()];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _variant_rank_decorators = [(0, mongoose_1.Prop)({ default: 0 })];
        _product_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Product', index: true })];
        _options_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductOptionValue' }] })];
        _prices_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'MoneyAmount' }] })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _sku_decorators, { kind: "field", name: "sku", static: false, private: false, access: { has: function (obj) { return "sku" in obj; }, get: function (obj) { return obj.sku; }, set: function (obj, value) { obj.sku = value; } }, metadata: _metadata }, _sku_initializers, _sku_extraInitializers);
        __esDecorate(null, null, _barcode_decorators, { kind: "field", name: "barcode", static: false, private: false, access: { has: function (obj) { return "barcode" in obj; }, get: function (obj) { return obj.barcode; }, set: function (obj, value) { obj.barcode = value; } }, metadata: _metadata }, _barcode_initializers, _barcode_extraInitializers);
        __esDecorate(null, null, _ean_decorators, { kind: "field", name: "ean", static: false, private: false, access: { has: function (obj) { return "ean" in obj; }, get: function (obj) { return obj.ean; }, set: function (obj, value) { obj.ean = value; } }, metadata: _metadata }, _ean_initializers, _ean_extraInitializers);
        __esDecorate(null, null, _upc_decorators, { kind: "field", name: "upc", static: false, private: false, access: { has: function (obj) { return "upc" in obj; }, get: function (obj) { return obj.upc; }, set: function (obj, value) { obj.upc = value; } }, metadata: _metadata }, _upc_initializers, _upc_extraInitializers);
        __esDecorate(null, null, _allow_backorder_decorators, { kind: "field", name: "allow_backorder", static: false, private: false, access: { has: function (obj) { return "allow_backorder" in obj; }, get: function (obj) { return obj.allow_backorder; }, set: function (obj, value) { obj.allow_backorder = value; } }, metadata: _metadata }, _allow_backorder_initializers, _allow_backorder_extraInitializers);
        __esDecorate(null, null, _manage_inventory_decorators, { kind: "field", name: "manage_inventory", static: false, private: false, access: { has: function (obj) { return "manage_inventory" in obj; }, get: function (obj) { return obj.manage_inventory; }, set: function (obj, value) { obj.manage_inventory = value; } }, metadata: _metadata }, _manage_inventory_initializers, _manage_inventory_extraInitializers);
        __esDecorate(null, null, _hs_code_decorators, { kind: "field", name: "hs_code", static: false, private: false, access: { has: function (obj) { return "hs_code" in obj; }, get: function (obj) { return obj.hs_code; }, set: function (obj, value) { obj.hs_code = value; } }, metadata: _metadata }, _hs_code_initializers, _hs_code_extraInitializers);
        __esDecorate(null, null, _origin_country_decorators, { kind: "field", name: "origin_country", static: false, private: false, access: { has: function (obj) { return "origin_country" in obj; }, get: function (obj) { return obj.origin_country; }, set: function (obj, value) { obj.origin_country = value; } }, metadata: _metadata }, _origin_country_initializers, _origin_country_extraInitializers);
        __esDecorate(null, null, _mid_code_decorators, { kind: "field", name: "mid_code", static: false, private: false, access: { has: function (obj) { return "mid_code" in obj; }, get: function (obj) { return obj.mid_code; }, set: function (obj, value) { obj.mid_code = value; } }, metadata: _metadata }, _mid_code_initializers, _mid_code_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _weight_decorators, { kind: "field", name: "weight", static: false, private: false, access: { has: function (obj) { return "weight" in obj; }, get: function (obj) { return obj.weight; }, set: function (obj, value) { obj.weight = value; } }, metadata: _metadata }, _weight_initializers, _weight_extraInitializers);
        __esDecorate(null, null, _length_decorators, { kind: "field", name: "length", static: false, private: false, access: { has: function (obj) { return "length" in obj; }, get: function (obj) { return obj.length; }, set: function (obj, value) { obj.length = value; } }, metadata: _metadata }, _length_initializers, _length_extraInitializers);
        __esDecorate(null, null, _height_decorators, { kind: "field", name: "height", static: false, private: false, access: { has: function (obj) { return "height" in obj; }, get: function (obj) { return obj.height; }, set: function (obj, value) { obj.height = value; } }, metadata: _metadata }, _height_initializers, _height_extraInitializers);
        __esDecorate(null, null, _width_decorators, { kind: "field", name: "width", static: false, private: false, access: { has: function (obj) { return "width" in obj; }, get: function (obj) { return obj.width; }, set: function (obj, value) { obj.width = value; } }, metadata: _metadata }, _width_initializers, _width_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _variant_rank_decorators, { kind: "field", name: "variant_rank", static: false, private: false, access: { has: function (obj) { return "variant_rank" in obj; }, get: function (obj) { return obj.variant_rank; }, set: function (obj, value) { obj.variant_rank = value; } }, metadata: _metadata }, _variant_rank_initializers, _variant_rank_extraInitializers);
        __esDecorate(null, null, _product_decorators, { kind: "field", name: "product", static: false, private: false, access: { has: function (obj) { return "product" in obj; }, get: function (obj) { return obj.product; }, set: function (obj, value) { obj.product = value; } }, metadata: _metadata }, _product_initializers, _product_extraInitializers);
        __esDecorate(null, null, _options_decorators, { kind: "field", name: "options", static: false, private: false, access: { has: function (obj) { return "options" in obj; }, get: function (obj) { return obj.options; }, set: function (obj, value) { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
        __esDecorate(null, null, _prices_decorators, { kind: "field", name: "prices", static: false, private: false, access: { has: function (obj) { return "prices" in obj; }, get: function (obj) { return obj.prices; }, set: function (obj, value) { obj.prices = value; } }, metadata: _metadata }, _prices_initializers, _prices_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductVariant = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductVariant = _classThis;
}();
exports.ProductVariant = ProductVariant;
exports.ProductVariantSchema = mongoose_1.SchemaFactory.createForClass(ProductVariant);
