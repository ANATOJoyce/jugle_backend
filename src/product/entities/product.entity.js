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
exports.ProductSchema = exports.Product = exports.ProductStatus = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["DRAFT"] = "draft";
    ProductStatus["PROPOSED"] = "proposed";
    ProductStatus["PUBLISHED"] = "published";
    ProductStatus["REJECTED"] = "rejected";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
var Product = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _handle_decorators;
    var _handle_initializers = [];
    var _handle_extraInitializers = [];
    var _subtitle_decorators;
    var _subtitle_initializers = [];
    var _subtitle_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _is_giftcard_decorators;
    var _is_giftcard_initializers = [];
    var _is_giftcard_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _thumbnail_decorators;
    var _thumbnail_initializers = [];
    var _thumbnail_extraInitializers = [];
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
    var _origin_country_decorators;
    var _origin_country_initializers = [];
    var _origin_country_extraInitializers = [];
    var _hs_code_decorators;
    var _hs_code_initializers = [];
    var _hs_code_extraInitializers = [];
    var _mid_code_decorators;
    var _mid_code_initializers = [];
    var _mid_code_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _discountable_decorators;
    var _discountable_initializers = [];
    var _discountable_extraInitializers = [];
    var _external_id_decorators;
    var _external_id_initializers = [];
    var _external_id_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _store_decorators;
    var _store_initializers = [];
    var _store_extraInitializers = [];
    var _variants_decorators;
    var _variants_initializers = [];
    var _variants_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _tags_decorators;
    var _tags_initializers = [];
    var _tags_extraInitializers = [];
    var _options_decorators;
    var _options_initializers = [];
    var _options_extraInitializers = [];
    var _images_decorators;
    var _images_initializers = [];
    var _images_extraInitializers = [];
    var _Collection_decorators;
    var _Collection_initializers = [];
    var _Collection_extraInitializers = [];
    var _categories_decorators;
    var _categories_initializers = [];
    var _categories_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var Product = _classThis = /** @class */ (function (_super) {
        __extends(Product_1, _super);
        function Product_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = __runInitializers(_this, _title_initializers, void 0);
            _this.handle = (__runInitializers(_this, _title_extraInitializers), __runInitializers(_this, _handle_initializers, void 0));
            _this.subtitle = (__runInitializers(_this, _handle_extraInitializers), __runInitializers(_this, _subtitle_initializers, void 0));
            _this.description = (__runInitializers(_this, _subtitle_extraInitializers), __runInitializers(_this, _description_initializers, void 0));
            _this.is_giftcard = (__runInitializers(_this, _description_extraInitializers), __runInitializers(_this, _is_giftcard_initializers, void 0));
            _this.status = (__runInitializers(_this, _is_giftcard_extraInitializers), __runInitializers(_this, _status_initializers, void 0));
            _this.thumbnail = (__runInitializers(_this, _status_extraInitializers), __runInitializers(_this, _thumbnail_initializers, void 0));
            _this.weight = (__runInitializers(_this, _thumbnail_extraInitializers), __runInitializers(_this, _weight_initializers, void 0));
            _this.length = (__runInitializers(_this, _weight_extraInitializers), __runInitializers(_this, _length_initializers, void 0));
            _this.height = (__runInitializers(_this, _length_extraInitializers), __runInitializers(_this, _height_initializers, void 0));
            _this.width = (__runInitializers(_this, _height_extraInitializers), __runInitializers(_this, _width_initializers, void 0));
            _this.origin_country = (__runInitializers(_this, _width_extraInitializers), __runInitializers(_this, _origin_country_initializers, void 0));
            _this.hs_code = (__runInitializers(_this, _origin_country_extraInitializers), __runInitializers(_this, _hs_code_initializers, void 0));
            _this.mid_code = (__runInitializers(_this, _hs_code_extraInitializers), __runInitializers(_this, _mid_code_initializers, void 0));
            _this.material = (__runInitializers(_this, _mid_code_extraInitializers), __runInitializers(_this, _material_initializers, void 0));
            _this.discountable = (__runInitializers(_this, _material_extraInitializers), __runInitializers(_this, _discountable_initializers, void 0));
            _this.external_id = (__runInitializers(_this, _discountable_extraInitializers), __runInitializers(_this, _external_id_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _external_id_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.store = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _store_initializers, void 0));
            _this.variants = (__runInitializers(_this, _store_extraInitializers), __runInitializers(_this, _variants_initializers, void 0));
            _this.type = (__runInitializers(_this, _variants_extraInitializers), __runInitializers(_this, _type_initializers, void 0));
            _this.tags = (__runInitializers(_this, _type_extraInitializers), __runInitializers(_this, _tags_initializers, void 0));
            _this.options = (__runInitializers(_this, _tags_extraInitializers), __runInitializers(_this, _options_initializers, void 0));
            _this.images = (__runInitializers(_this, _options_extraInitializers), __runInitializers(_this, _images_initializers, void 0));
            _this.Collection = (__runInitializers(_this, _images_extraInitializers), __runInitializers(_this, _Collection_initializers, void 0));
            _this.categories = (__runInitializers(_this, _Collection_extraInitializers), __runInitializers(_this, _categories_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _categories_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            __runInitializers(_this, _deleted_at_extraInitializers);
            return _this;
        }
        return Product_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Product");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [(0, mongoose_1.Prop)({ type: String, required: true, index: true })];
        _handle_decorators = [(0, mongoose_1.Prop)({ type: String, required: true, unique: true })];
        _subtitle_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _description_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _is_giftcard_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: false })];
        _status_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: Object.values(ProductStatus),
                default: ProductStatus.DRAFT,
            })];
        _thumbnail_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _weight_decorators = [(0, mongoose_1.Prop)({ type: Number })];
        _length_decorators = [(0, mongoose_1.Prop)({ type: Number })];
        _height_decorators = [(0, mongoose_1.Prop)({ type: Number })];
        _width_decorators = [(0, mongoose_1.Prop)({ type: Number })];
        _origin_country_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _hs_code_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _mid_code_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _material_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _discountable_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: true })];
        _external_id_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _store_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Store', required: true })];
        _variants_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductVariant' }] })];
        _type_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'ProductType' })];
        _tags_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductTag' }] })];
        _options_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductOption' }] })];
        _images_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductImage' }] })];
        _Collection_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'ProductCollection' })];
        _categories_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductCategory' }] })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _handle_decorators, { kind: "field", name: "handle", static: false, private: false, access: { has: function (obj) { return "handle" in obj; }, get: function (obj) { return obj.handle; }, set: function (obj, value) { obj.handle = value; } }, metadata: _metadata }, _handle_initializers, _handle_extraInitializers);
        __esDecorate(null, null, _subtitle_decorators, { kind: "field", name: "subtitle", static: false, private: false, access: { has: function (obj) { return "subtitle" in obj; }, get: function (obj) { return obj.subtitle; }, set: function (obj, value) { obj.subtitle = value; } }, metadata: _metadata }, _subtitle_initializers, _subtitle_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _is_giftcard_decorators, { kind: "field", name: "is_giftcard", static: false, private: false, access: { has: function (obj) { return "is_giftcard" in obj; }, get: function (obj) { return obj.is_giftcard; }, set: function (obj, value) { obj.is_giftcard = value; } }, metadata: _metadata }, _is_giftcard_initializers, _is_giftcard_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _thumbnail_decorators, { kind: "field", name: "thumbnail", static: false, private: false, access: { has: function (obj) { return "thumbnail" in obj; }, get: function (obj) { return obj.thumbnail; }, set: function (obj, value) { obj.thumbnail = value; } }, metadata: _metadata }, _thumbnail_initializers, _thumbnail_extraInitializers);
        __esDecorate(null, null, _weight_decorators, { kind: "field", name: "weight", static: false, private: false, access: { has: function (obj) { return "weight" in obj; }, get: function (obj) { return obj.weight; }, set: function (obj, value) { obj.weight = value; } }, metadata: _metadata }, _weight_initializers, _weight_extraInitializers);
        __esDecorate(null, null, _length_decorators, { kind: "field", name: "length", static: false, private: false, access: { has: function (obj) { return "length" in obj; }, get: function (obj) { return obj.length; }, set: function (obj, value) { obj.length = value; } }, metadata: _metadata }, _length_initializers, _length_extraInitializers);
        __esDecorate(null, null, _height_decorators, { kind: "field", name: "height", static: false, private: false, access: { has: function (obj) { return "height" in obj; }, get: function (obj) { return obj.height; }, set: function (obj, value) { obj.height = value; } }, metadata: _metadata }, _height_initializers, _height_extraInitializers);
        __esDecorate(null, null, _width_decorators, { kind: "field", name: "width", static: false, private: false, access: { has: function (obj) { return "width" in obj; }, get: function (obj) { return obj.width; }, set: function (obj, value) { obj.width = value; } }, metadata: _metadata }, _width_initializers, _width_extraInitializers);
        __esDecorate(null, null, _origin_country_decorators, { kind: "field", name: "origin_country", static: false, private: false, access: { has: function (obj) { return "origin_country" in obj; }, get: function (obj) { return obj.origin_country; }, set: function (obj, value) { obj.origin_country = value; } }, metadata: _metadata }, _origin_country_initializers, _origin_country_extraInitializers);
        __esDecorate(null, null, _hs_code_decorators, { kind: "field", name: "hs_code", static: false, private: false, access: { has: function (obj) { return "hs_code" in obj; }, get: function (obj) { return obj.hs_code; }, set: function (obj, value) { obj.hs_code = value; } }, metadata: _metadata }, _hs_code_initializers, _hs_code_extraInitializers);
        __esDecorate(null, null, _mid_code_decorators, { kind: "field", name: "mid_code", static: false, private: false, access: { has: function (obj) { return "mid_code" in obj; }, get: function (obj) { return obj.mid_code; }, set: function (obj, value) { obj.mid_code = value; } }, metadata: _metadata }, _mid_code_initializers, _mid_code_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _discountable_decorators, { kind: "field", name: "discountable", static: false, private: false, access: { has: function (obj) { return "discountable" in obj; }, get: function (obj) { return obj.discountable; }, set: function (obj, value) { obj.discountable = value; } }, metadata: _metadata }, _discountable_initializers, _discountable_extraInitializers);
        __esDecorate(null, null, _external_id_decorators, { kind: "field", name: "external_id", static: false, private: false, access: { has: function (obj) { return "external_id" in obj; }, get: function (obj) { return obj.external_id; }, set: function (obj, value) { obj.external_id = value; } }, metadata: _metadata }, _external_id_initializers, _external_id_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _store_decorators, { kind: "field", name: "store", static: false, private: false, access: { has: function (obj) { return "store" in obj; }, get: function (obj) { return obj.store; }, set: function (obj, value) { obj.store = value; } }, metadata: _metadata }, _store_initializers, _store_extraInitializers);
        __esDecorate(null, null, _variants_decorators, { kind: "field", name: "variants", static: false, private: false, access: { has: function (obj) { return "variants" in obj; }, get: function (obj) { return obj.variants; }, set: function (obj, value) { obj.variants = value; } }, metadata: _metadata }, _variants_initializers, _variants_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _tags_decorators, { kind: "field", name: "tags", static: false, private: false, access: { has: function (obj) { return "tags" in obj; }, get: function (obj) { return obj.tags; }, set: function (obj, value) { obj.tags = value; } }, metadata: _metadata }, _tags_initializers, _tags_extraInitializers);
        __esDecorate(null, null, _options_decorators, { kind: "field", name: "options", static: false, private: false, access: { has: function (obj) { return "options" in obj; }, get: function (obj) { return obj.options; }, set: function (obj, value) { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
        __esDecorate(null, null, _images_decorators, { kind: "field", name: "images", static: false, private: false, access: { has: function (obj) { return "images" in obj; }, get: function (obj) { return obj.images; }, set: function (obj, value) { obj.images = value; } }, metadata: _metadata }, _images_initializers, _images_extraInitializers);
        __esDecorate(null, null, _Collection_decorators, { kind: "field", name: "Collection", static: false, private: false, access: { has: function (obj) { return "Collection" in obj; }, get: function (obj) { return obj.Collection; }, set: function (obj, value) { obj.Collection = value; } }, metadata: _metadata }, _Collection_initializers, _Collection_extraInitializers);
        __esDecorate(null, null, _categories_decorators, { kind: "field", name: "categories", static: false, private: false, access: { has: function (obj) { return "categories" in obj; }, get: function (obj) { return obj.categories; }, set: function (obj, value) { obj.categories = value; } }, metadata: _metadata }, _categories_initializers, _categories_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Product = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Product = _classThis;
}();
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
