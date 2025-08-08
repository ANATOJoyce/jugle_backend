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
exports.OrderLineItemSchema = exports.OrderLineItem = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderLineItem = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_line_items',
            autoIndex: true,
            toJSON: {
                transform: function (doc, ret) {
                    ret.id = "ordli_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            }
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _product_decorators;
    var _product_initializers = [];
    var _product_extraInitializers = [];
    var _subtitle_decorators;
    var _subtitle_initializers = [];
    var _subtitle_extraInitializers = [];
    var _thumbnail_decorators;
    var _thumbnail_initializers = [];
    var _thumbnail_extraInitializers = [];
    var _variant_id_decorators;
    var _variant_id_initializers = [];
    var _variant_id_extraInitializers = [];
    var _product_id_decorators;
    var _product_id_initializers = [];
    var _product_id_extraInitializers = [];
    var _product_title_decorators;
    var _product_title_initializers = [];
    var _product_title_extraInitializers = [];
    var _product_description_decorators;
    var _product_description_initializers = [];
    var _product_description_extraInitializers = [];
    var _product_subtitle_decorators;
    var _product_subtitle_initializers = [];
    var _product_subtitle_extraInitializers = [];
    var _product_type_decorators;
    var _product_type_initializers = [];
    var _product_type_extraInitializers = [];
    var _product_type_id_decorators;
    var _product_type_id_initializers = [];
    var _product_type_id_extraInitializers = [];
    var _product_collection_decorators;
    var _product_collection_initializers = [];
    var _product_collection_extraInitializers = [];
    var _product_handle_decorators;
    var _product_handle_initializers = [];
    var _product_handle_extraInitializers = [];
    var _variant_sku_decorators;
    var _variant_sku_initializers = [];
    var _variant_sku_extraInitializers = [];
    var _variant_barcode_decorators;
    var _variant_barcode_initializers = [];
    var _variant_barcode_extraInitializers = [];
    var _variant_title_decorators;
    var _variant_title_initializers = [];
    var _variant_title_extraInitializers = [];
    var _variant_option_values_decorators;
    var _variant_option_values_initializers = [];
    var _variant_option_values_extraInitializers = [];
    var _requires_shipping_decorators;
    var _requires_shipping_initializers = [];
    var _requires_shipping_extraInitializers = [];
    var _is_giftcard_decorators;
    var _is_giftcard_initializers = [];
    var _is_giftcard_extraInitializers = [];
    var _is_discountable_decorators;
    var _is_discountable_initializers = [];
    var _is_discountable_extraInitializers = [];
    var _is_tax_inclusive_decorators;
    var _is_tax_inclusive_initializers = [];
    var _is_tax_inclusive_extraInitializers = [];
    var _compare_at_unit_price_decorators;
    var _compare_at_unit_price_initializers = [];
    var _compare_at_unit_price_extraInitializers = [];
    var _unit_price_decorators;
    var _unit_price_initializers = [];
    var _unit_price_extraInitializers = [];
    var _is_custom_price_decorators;
    var _is_custom_price_initializers = [];
    var _is_custom_price_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _tax_lines_decorators;
    var _tax_lines_initializers = [];
    var _tax_lines_extraInitializers = [];
    var _adjustments_decorators;
    var _adjustments_initializers = [];
    var _adjustments_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderLineItem = _classThis = /** @class */ (function (_super) {
        __extends(OrderLineItem_1, _super);
        function OrderLineItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = __runInitializers(_this, _title_initializers, void 0);
            _this.product = (__runInitializers(_this, _title_extraInitializers), __runInitializers(_this, _product_initializers, void 0));
            _this.subtitle = (__runInitializers(_this, _product_extraInitializers), __runInitializers(_this, _subtitle_initializers, void 0));
            _this.thumbnail = (__runInitializers(_this, _subtitle_extraInitializers), __runInitializers(_this, _thumbnail_initializers, void 0));
            _this.variant_id = (__runInitializers(_this, _thumbnail_extraInitializers), __runInitializers(_this, _variant_id_initializers, void 0));
            _this.product_id = (__runInitializers(_this, _variant_id_extraInitializers), __runInitializers(_this, _product_id_initializers, void 0));
            _this.product_title = (__runInitializers(_this, _product_id_extraInitializers), __runInitializers(_this, _product_title_initializers, void 0));
            _this.product_description = (__runInitializers(_this, _product_title_extraInitializers), __runInitializers(_this, _product_description_initializers, void 0));
            _this.product_subtitle = (__runInitializers(_this, _product_description_extraInitializers), __runInitializers(_this, _product_subtitle_initializers, void 0));
            _this.product_type = (__runInitializers(_this, _product_subtitle_extraInitializers), __runInitializers(_this, _product_type_initializers, void 0));
            _this.product_type_id = (__runInitializers(_this, _product_type_extraInitializers), __runInitializers(_this, _product_type_id_initializers, void 0));
            _this.product_collection = (__runInitializers(_this, _product_type_id_extraInitializers), __runInitializers(_this, _product_collection_initializers, void 0));
            _this.product_handle = (__runInitializers(_this, _product_collection_extraInitializers), __runInitializers(_this, _product_handle_initializers, void 0));
            _this.variant_sku = (__runInitializers(_this, _product_handle_extraInitializers), __runInitializers(_this, _variant_sku_initializers, void 0));
            _this.variant_barcode = (__runInitializers(_this, _variant_sku_extraInitializers), __runInitializers(_this, _variant_barcode_initializers, void 0));
            _this.variant_title = (__runInitializers(_this, _variant_barcode_extraInitializers), __runInitializers(_this, _variant_title_initializers, void 0));
            _this.variant_option_values = (__runInitializers(_this, _variant_title_extraInitializers), __runInitializers(_this, _variant_option_values_initializers, void 0));
            _this.requires_shipping = (__runInitializers(_this, _variant_option_values_extraInitializers), __runInitializers(_this, _requires_shipping_initializers, void 0));
            _this.is_giftcard = (__runInitializers(_this, _requires_shipping_extraInitializers), __runInitializers(_this, _is_giftcard_initializers, void 0));
            _this.is_discountable = (__runInitializers(_this, _is_giftcard_extraInitializers), __runInitializers(_this, _is_discountable_initializers, void 0));
            _this.is_tax_inclusive = (__runInitializers(_this, _is_discountable_extraInitializers), __runInitializers(_this, _is_tax_inclusive_initializers, void 0));
            _this.compare_at_unit_price = (__runInitializers(_this, _is_tax_inclusive_extraInitializers), __runInitializers(_this, _compare_at_unit_price_initializers, void 0));
            _this.unit_price = (__runInitializers(_this, _compare_at_unit_price_extraInitializers), __runInitializers(_this, _unit_price_initializers, void 0));
            _this.is_custom_price = (__runInitializers(_this, _unit_price_extraInitializers), __runInitializers(_this, _is_custom_price_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _is_custom_price_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.tax_lines = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _tax_lines_initializers, void 0));
            _this.adjustments = (__runInitializers(_this, _tax_lines_extraInitializers), __runInitializers(_this, _adjustments_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _adjustments_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            __runInitializers(_this, _deleted_at_extraInitializers);
            return _this;
        }
        return OrderLineItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "OrderLineItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _product_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Product', required: true })];
        _subtitle_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _thumbnail_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _variant_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null, index: true })];
        _product_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null, index: true })];
        _product_title_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _product_description_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _product_subtitle_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _product_type_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _product_type_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null, index: true })];
        _product_collection_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _product_handle_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _variant_sku_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _variant_barcode_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _variant_title_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _variant_option_values_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _requires_shipping_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: true })];
        _is_giftcard_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: false })];
        _is_discountable_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: true })];
        _is_tax_inclusive_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: false })];
        _compare_at_unit_price_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _unit_price_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _is_custom_price_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: false })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _tax_lines_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderLineItemTaxLine' }],
                default: []
            })];
        _adjustments_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderLineItemAdjustment' }],
                default: []
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _product_decorators, { kind: "field", name: "product", static: false, private: false, access: { has: function (obj) { return "product" in obj; }, get: function (obj) { return obj.product; }, set: function (obj, value) { obj.product = value; } }, metadata: _metadata }, _product_initializers, _product_extraInitializers);
        __esDecorate(null, null, _subtitle_decorators, { kind: "field", name: "subtitle", static: false, private: false, access: { has: function (obj) { return "subtitle" in obj; }, get: function (obj) { return obj.subtitle; }, set: function (obj, value) { obj.subtitle = value; } }, metadata: _metadata }, _subtitle_initializers, _subtitle_extraInitializers);
        __esDecorate(null, null, _thumbnail_decorators, { kind: "field", name: "thumbnail", static: false, private: false, access: { has: function (obj) { return "thumbnail" in obj; }, get: function (obj) { return obj.thumbnail; }, set: function (obj, value) { obj.thumbnail = value; } }, metadata: _metadata }, _thumbnail_initializers, _thumbnail_extraInitializers);
        __esDecorate(null, null, _variant_id_decorators, { kind: "field", name: "variant_id", static: false, private: false, access: { has: function (obj) { return "variant_id" in obj; }, get: function (obj) { return obj.variant_id; }, set: function (obj, value) { obj.variant_id = value; } }, metadata: _metadata }, _variant_id_initializers, _variant_id_extraInitializers);
        __esDecorate(null, null, _product_id_decorators, { kind: "field", name: "product_id", static: false, private: false, access: { has: function (obj) { return "product_id" in obj; }, get: function (obj) { return obj.product_id; }, set: function (obj, value) { obj.product_id = value; } }, metadata: _metadata }, _product_id_initializers, _product_id_extraInitializers);
        __esDecorate(null, null, _product_title_decorators, { kind: "field", name: "product_title", static: false, private: false, access: { has: function (obj) { return "product_title" in obj; }, get: function (obj) { return obj.product_title; }, set: function (obj, value) { obj.product_title = value; } }, metadata: _metadata }, _product_title_initializers, _product_title_extraInitializers);
        __esDecorate(null, null, _product_description_decorators, { kind: "field", name: "product_description", static: false, private: false, access: { has: function (obj) { return "product_description" in obj; }, get: function (obj) { return obj.product_description; }, set: function (obj, value) { obj.product_description = value; } }, metadata: _metadata }, _product_description_initializers, _product_description_extraInitializers);
        __esDecorate(null, null, _product_subtitle_decorators, { kind: "field", name: "product_subtitle", static: false, private: false, access: { has: function (obj) { return "product_subtitle" in obj; }, get: function (obj) { return obj.product_subtitle; }, set: function (obj, value) { obj.product_subtitle = value; } }, metadata: _metadata }, _product_subtitle_initializers, _product_subtitle_extraInitializers);
        __esDecorate(null, null, _product_type_decorators, { kind: "field", name: "product_type", static: false, private: false, access: { has: function (obj) { return "product_type" in obj; }, get: function (obj) { return obj.product_type; }, set: function (obj, value) { obj.product_type = value; } }, metadata: _metadata }, _product_type_initializers, _product_type_extraInitializers);
        __esDecorate(null, null, _product_type_id_decorators, { kind: "field", name: "product_type_id", static: false, private: false, access: { has: function (obj) { return "product_type_id" in obj; }, get: function (obj) { return obj.product_type_id; }, set: function (obj, value) { obj.product_type_id = value; } }, metadata: _metadata }, _product_type_id_initializers, _product_type_id_extraInitializers);
        __esDecorate(null, null, _product_collection_decorators, { kind: "field", name: "product_collection", static: false, private: false, access: { has: function (obj) { return "product_collection" in obj; }, get: function (obj) { return obj.product_collection; }, set: function (obj, value) { obj.product_collection = value; } }, metadata: _metadata }, _product_collection_initializers, _product_collection_extraInitializers);
        __esDecorate(null, null, _product_handle_decorators, { kind: "field", name: "product_handle", static: false, private: false, access: { has: function (obj) { return "product_handle" in obj; }, get: function (obj) { return obj.product_handle; }, set: function (obj, value) { obj.product_handle = value; } }, metadata: _metadata }, _product_handle_initializers, _product_handle_extraInitializers);
        __esDecorate(null, null, _variant_sku_decorators, { kind: "field", name: "variant_sku", static: false, private: false, access: { has: function (obj) { return "variant_sku" in obj; }, get: function (obj) { return obj.variant_sku; }, set: function (obj, value) { obj.variant_sku = value; } }, metadata: _metadata }, _variant_sku_initializers, _variant_sku_extraInitializers);
        __esDecorate(null, null, _variant_barcode_decorators, { kind: "field", name: "variant_barcode", static: false, private: false, access: { has: function (obj) { return "variant_barcode" in obj; }, get: function (obj) { return obj.variant_barcode; }, set: function (obj, value) { obj.variant_barcode = value; } }, metadata: _metadata }, _variant_barcode_initializers, _variant_barcode_extraInitializers);
        __esDecorate(null, null, _variant_title_decorators, { kind: "field", name: "variant_title", static: false, private: false, access: { has: function (obj) { return "variant_title" in obj; }, get: function (obj) { return obj.variant_title; }, set: function (obj, value) { obj.variant_title = value; } }, metadata: _metadata }, _variant_title_initializers, _variant_title_extraInitializers);
        __esDecorate(null, null, _variant_option_values_decorators, { kind: "field", name: "variant_option_values", static: false, private: false, access: { has: function (obj) { return "variant_option_values" in obj; }, get: function (obj) { return obj.variant_option_values; }, set: function (obj, value) { obj.variant_option_values = value; } }, metadata: _metadata }, _variant_option_values_initializers, _variant_option_values_extraInitializers);
        __esDecorate(null, null, _requires_shipping_decorators, { kind: "field", name: "requires_shipping", static: false, private: false, access: { has: function (obj) { return "requires_shipping" in obj; }, get: function (obj) { return obj.requires_shipping; }, set: function (obj, value) { obj.requires_shipping = value; } }, metadata: _metadata }, _requires_shipping_initializers, _requires_shipping_extraInitializers);
        __esDecorate(null, null, _is_giftcard_decorators, { kind: "field", name: "is_giftcard", static: false, private: false, access: { has: function (obj) { return "is_giftcard" in obj; }, get: function (obj) { return obj.is_giftcard; }, set: function (obj, value) { obj.is_giftcard = value; } }, metadata: _metadata }, _is_giftcard_initializers, _is_giftcard_extraInitializers);
        __esDecorate(null, null, _is_discountable_decorators, { kind: "field", name: "is_discountable", static: false, private: false, access: { has: function (obj) { return "is_discountable" in obj; }, get: function (obj) { return obj.is_discountable; }, set: function (obj, value) { obj.is_discountable = value; } }, metadata: _metadata }, _is_discountable_initializers, _is_discountable_extraInitializers);
        __esDecorate(null, null, _is_tax_inclusive_decorators, { kind: "field", name: "is_tax_inclusive", static: false, private: false, access: { has: function (obj) { return "is_tax_inclusive" in obj; }, get: function (obj) { return obj.is_tax_inclusive; }, set: function (obj, value) { obj.is_tax_inclusive = value; } }, metadata: _metadata }, _is_tax_inclusive_initializers, _is_tax_inclusive_extraInitializers);
        __esDecorate(null, null, _compare_at_unit_price_decorators, { kind: "field", name: "compare_at_unit_price", static: false, private: false, access: { has: function (obj) { return "compare_at_unit_price" in obj; }, get: function (obj) { return obj.compare_at_unit_price; }, set: function (obj, value) { obj.compare_at_unit_price = value; } }, metadata: _metadata }, _compare_at_unit_price_initializers, _compare_at_unit_price_extraInitializers);
        __esDecorate(null, null, _unit_price_decorators, { kind: "field", name: "unit_price", static: false, private: false, access: { has: function (obj) { return "unit_price" in obj; }, get: function (obj) { return obj.unit_price; }, set: function (obj, value) { obj.unit_price = value; } }, metadata: _metadata }, _unit_price_initializers, _unit_price_extraInitializers);
        __esDecorate(null, null, _is_custom_price_decorators, { kind: "field", name: "is_custom_price", static: false, private: false, access: { has: function (obj) { return "is_custom_price" in obj; }, get: function (obj) { return obj.is_custom_price; }, set: function (obj, value) { obj.is_custom_price = value; } }, metadata: _metadata }, _is_custom_price_initializers, _is_custom_price_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _tax_lines_decorators, { kind: "field", name: "tax_lines", static: false, private: false, access: { has: function (obj) { return "tax_lines" in obj; }, get: function (obj) { return obj.tax_lines; }, set: function (obj, value) { obj.tax_lines = value; } }, metadata: _metadata }, _tax_lines_initializers, _tax_lines_extraInitializers);
        __esDecorate(null, null, _adjustments_decorators, { kind: "field", name: "adjustments", static: false, private: false, access: { has: function (obj) { return "adjustments" in obj; }, get: function (obj) { return obj.adjustments; }, set: function (obj, value) { obj.adjustments = value; } }, metadata: _metadata }, _adjustments_initializers, _adjustments_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderLineItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderLineItem = _classThis;
}();
exports.OrderLineItem = OrderLineItem;
exports.OrderLineItemSchema = mongoose_1.SchemaFactory.createForClass(OrderLineItem);
