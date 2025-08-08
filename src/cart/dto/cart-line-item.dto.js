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
exports.CartLineItemDTO = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var line_item_tax_line_dto_1 = require("./line-item-tax-line.dto");
var cart_dto_1 = require("./cart.dto");
var CartLineItemDTO = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _subtitle_decorators;
    var _subtitle_initializers = [];
    var _subtitle_extraInitializers = [];
    var _thumbnail_decorators;
    var _thumbnail_initializers = [];
    var _thumbnail_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _variant_id_decorators;
    var _variant_id_initializers = [];
    var _variant_id_extraInitializers = [];
    var _product_id_decorators;
    var _product_id_initializers = [];
    var _product_id_extraInitializers = [];
    var _unit_price_decorators;
    var _unit_price_initializers = [];
    var _unit_price_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _tax_lines_decorators;
    var _tax_lines_initializers = [];
    var _tax_lines_extraInitializers = [];
    var _cart_decorators;
    var _cart_initializers = [];
    var _cart_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CartLineItemDTO() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.subtitle = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _subtitle_initializers, void 0));
                this.thumbnail = (__runInitializers(this, _subtitle_extraInitializers), __runInitializers(this, _thumbnail_initializers, void 0));
                this.quantity = (__runInitializers(this, _thumbnail_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
                this.variant_id = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _variant_id_initializers, void 0));
                this.product_id = (__runInitializers(this, _variant_id_extraInitializers), __runInitializers(this, _product_id_initializers, void 0));
                this.unit_price = (__runInitializers(this, _product_id_extraInitializers), __runInitializers(this, _unit_price_initializers, void 0));
                this.metadata = (__runInitializers(this, _unit_price_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                this.tax_lines = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _tax_lines_initializers, void 0));
                this.cart = (__runInitializers(this, _tax_lines_extraInitializers), __runInitializers(this, _cart_initializers, void 0));
                __runInitializers(this, _cart_extraInitializers);
            }
            return CartLineItemDTO;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)()];
            _title_decorators = [(0, swagger_1.ApiProperty)()];
            _subtitle_decorators = [(0, swagger_1.ApiProperty)({ required: false })];
            _thumbnail_decorators = [(0, swagger_1.ApiProperty)({ required: false })];
            _quantity_decorators = [(0, swagger_1.ApiProperty)()];
            _variant_id_decorators = [(0, swagger_1.ApiProperty)({ required: false })];
            _product_id_decorators = [(0, swagger_1.ApiProperty)({ required: false })];
            _unit_price_decorators = [(0, swagger_1.ApiProperty)()];
            _metadata_decorators = [(0, swagger_1.ApiProperty)({ required: false })];
            _tax_lines_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return [line_item_tax_line_dto_1.LineItemTaxLineDto]; }, required: false }), (0, class_transformer_1.Type)(function () { return line_item_tax_line_dto_1.LineItemTaxLineDto; })];
            _cart_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return cart_dto_1.CartDTO; }, required: false }), (0, class_transformer_1.Type)(function () { return cart_dto_1.CartDTO; })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _subtitle_decorators, { kind: "field", name: "subtitle", static: false, private: false, access: { has: function (obj) { return "subtitle" in obj; }, get: function (obj) { return obj.subtitle; }, set: function (obj, value) { obj.subtitle = value; } }, metadata: _metadata }, _subtitle_initializers, _subtitle_extraInitializers);
            __esDecorate(null, null, _thumbnail_decorators, { kind: "field", name: "thumbnail", static: false, private: false, access: { has: function (obj) { return "thumbnail" in obj; }, get: function (obj) { return obj.thumbnail; }, set: function (obj, value) { obj.thumbnail = value; } }, metadata: _metadata }, _thumbnail_initializers, _thumbnail_extraInitializers);
            __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
            __esDecorate(null, null, _variant_id_decorators, { kind: "field", name: "variant_id", static: false, private: false, access: { has: function (obj) { return "variant_id" in obj; }, get: function (obj) { return obj.variant_id; }, set: function (obj, value) { obj.variant_id = value; } }, metadata: _metadata }, _variant_id_initializers, _variant_id_extraInitializers);
            __esDecorate(null, null, _product_id_decorators, { kind: "field", name: "product_id", static: false, private: false, access: { has: function (obj) { return "product_id" in obj; }, get: function (obj) { return obj.product_id; }, set: function (obj, value) { obj.product_id = value; } }, metadata: _metadata }, _product_id_initializers, _product_id_extraInitializers);
            __esDecorate(null, null, _unit_price_decorators, { kind: "field", name: "unit_price", static: false, private: false, access: { has: function (obj) { return "unit_price" in obj; }, get: function (obj) { return obj.unit_price; }, set: function (obj, value) { obj.unit_price = value; } }, metadata: _metadata }, _unit_price_initializers, _unit_price_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            __esDecorate(null, null, _tax_lines_decorators, { kind: "field", name: "tax_lines", static: false, private: false, access: { has: function (obj) { return "tax_lines" in obj; }, get: function (obj) { return obj.tax_lines; }, set: function (obj, value) { obj.tax_lines = value; } }, metadata: _metadata }, _tax_lines_initializers, _tax_lines_extraInitializers);
            __esDecorate(null, null, _cart_decorators, { kind: "field", name: "cart", static: false, private: false, access: { has: function (obj) { return "cart" in obj; }, get: function (obj) { return obj.cart; }, set: function (obj, value) { obj.cart = value; } }, metadata: _metadata }, _cart_initializers, _cart_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CartLineItemDTO = CartLineItemDTO;
