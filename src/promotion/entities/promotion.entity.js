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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionSchema = exports.Promotion = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var enum_pormotion_1 = require("../enum-pormotion");
var class_validator_1 = require("class-validator");
var promotion_type_enum_1 = require("../promotion-type.enum");
var Promotion = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _discount_type_decorators;
    var _discount_type_initializers = [];
    var _discount_type_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _min_cart_total_decorators;
    var _min_cart_total_initializers = [];
    var _min_cart_total_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _start_date_decorators;
    var _start_date_initializers = [];
    var _start_date_extraInitializers = [];
    var _end_date_decorators;
    var _end_date_initializers = [];
    var _end_date_extraInitializers = [];
    var _is_active_decorators;
    var _is_active_initializers = [];
    var _is_active_extraInitializers = [];
    var _products_decorators;
    var _products_initializers = [];
    var _products_extraInitializers = [];
    var _collections_decorators;
    var _collections_initializers = [];
    var _collections_extraInitializers = [];
    var _categories_decorators;
    var _categories_initializers = [];
    var _categories_extraInitializers = [];
    var _store_decorators;
    var _store_initializers = [];
    var _store_extraInitializers = [];
    var _customerGroups_decorators;
    var _customerGroups_initializers = [];
    var _customerGroups_extraInitializers = [];
    var _regions_decorators;
    var _regions_initializers = [];
    var _regions_extraInitializers = [];
    var _applies_to_shipping_decorators;
    var _applies_to_shipping_initializers = [];
    var _applies_to_shipping_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _deleted_decorators;
    var _deleted_initializers = [];
    var _deleted_extraInitializers = [];
    var Promotion = _classThis = /** @class */ (function () {
        function Promotion_1() {
            this.code = __runInitializers(this, _code_initializers, void 0); // Ex: SUMMER2025
            this.discount_type = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _discount_type_initializers, void 0));
            this.value = (__runInitializers(this, _discount_type_extraInitializers), __runInitializers(this, _value_initializers, void 0)); // Ex: 10 (10% ou 10€)
            this.min_cart_total = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _min_cart_total_initializers, void 0)); // Montant min du panier pour être éligible
            this.status = (__runInitializers(this, _min_cart_total_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.start_date = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _start_date_initializers, void 0));
            this.end_date = (__runInitializers(this, _start_date_extraInitializers), __runInitializers(this, _end_date_initializers, void 0));
            this.is_active = (__runInitializers(this, _end_date_extraInitializers), __runInitializers(this, _is_active_initializers, void 0));
            this.products = (__runInitializers(this, _is_active_extraInitializers), __runInitializers(this, _products_initializers, void 0));
            this.collections = (__runInitializers(this, _products_extraInitializers), __runInitializers(this, _collections_initializers, void 0));
            this.categories = (__runInitializers(this, _collections_extraInitializers), __runInitializers(this, _categories_initializers, void 0));
            this.store = (__runInitializers(this, _categories_extraInitializers), __runInitializers(this, _store_initializers, void 0));
            this.customerGroups = (__runInitializers(this, _store_extraInitializers), __runInitializers(this, _customerGroups_initializers, void 0));
            this.regions = (__runInitializers(this, _customerGroups_extraInitializers), __runInitializers(this, _regions_initializers, void 0));
            this.applies_to_shipping = (__runInitializers(this, _regions_extraInitializers), __runInitializers(this, _applies_to_shipping_initializers, void 0));
            this.metadata = (__runInitializers(this, _applies_to_shipping_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.type = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.deleted = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _deleted_initializers, void 0));
            __runInitializers(this, _deleted_extraInitializers);
        }
        return Promotion_1;
    }());
    __setFunctionName(_classThis, "Promotion");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _code_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true })];
        _discount_type_decorators = [(0, mongoose_1.Prop)({ required: true, enum: ['percentage', 'fixed'] })];
        _value_decorators = [(0, mongoose_1.Prop)({ required: true, min: 0 })];
        _min_cart_total_decorators = [(0, mongoose_1.Prop)({ type: Number, default: 0 })];
        _status_decorators = [(0, mongoose_1.Prop)({ type: String, enum: enum_pormotion_1.PromotionStatus, default: enum_pormotion_1.PromotionStatus.DRAFT })];
        _start_date_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        _end_date_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        _is_active_decorators = [(0, mongoose_1.Prop)({ type: Boolean })];
        _products_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Product' }], default: [] })];
        _collections_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductCollection' }], default: [] })];
        _categories_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductCategory' }], default: [] })];
        _store_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Store', required: true })];
        _customerGroups_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'CustomerGroup' }], default: [] })];
        _regions_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Region' }], default: [] })];
        _applies_to_shipping_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: false })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: {} })];
        _type_decorators = [(0, class_validator_1.IsEnum)(promotion_type_enum_1.PromotionType)];
        _deleted_decorators = [(0, mongoose_1.Prop)({ default: false })];
        __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
        __esDecorate(null, null, _discount_type_decorators, { kind: "field", name: "discount_type", static: false, private: false, access: { has: function (obj) { return "discount_type" in obj; }, get: function (obj) { return obj.discount_type; }, set: function (obj, value) { obj.discount_type = value; } }, metadata: _metadata }, _discount_type_initializers, _discount_type_extraInitializers);
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
        __esDecorate(null, null, _min_cart_total_decorators, { kind: "field", name: "min_cart_total", static: false, private: false, access: { has: function (obj) { return "min_cart_total" in obj; }, get: function (obj) { return obj.min_cart_total; }, set: function (obj, value) { obj.min_cart_total = value; } }, metadata: _metadata }, _min_cart_total_initializers, _min_cart_total_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _start_date_decorators, { kind: "field", name: "start_date", static: false, private: false, access: { has: function (obj) { return "start_date" in obj; }, get: function (obj) { return obj.start_date; }, set: function (obj, value) { obj.start_date = value; } }, metadata: _metadata }, _start_date_initializers, _start_date_extraInitializers);
        __esDecorate(null, null, _end_date_decorators, { kind: "field", name: "end_date", static: false, private: false, access: { has: function (obj) { return "end_date" in obj; }, get: function (obj) { return obj.end_date; }, set: function (obj, value) { obj.end_date = value; } }, metadata: _metadata }, _end_date_initializers, _end_date_extraInitializers);
        __esDecorate(null, null, _is_active_decorators, { kind: "field", name: "is_active", static: false, private: false, access: { has: function (obj) { return "is_active" in obj; }, get: function (obj) { return obj.is_active; }, set: function (obj, value) { obj.is_active = value; } }, metadata: _metadata }, _is_active_initializers, _is_active_extraInitializers);
        __esDecorate(null, null, _products_decorators, { kind: "field", name: "products", static: false, private: false, access: { has: function (obj) { return "products" in obj; }, get: function (obj) { return obj.products; }, set: function (obj, value) { obj.products = value; } }, metadata: _metadata }, _products_initializers, _products_extraInitializers);
        __esDecorate(null, null, _collections_decorators, { kind: "field", name: "collections", static: false, private: false, access: { has: function (obj) { return "collections" in obj; }, get: function (obj) { return obj.collections; }, set: function (obj, value) { obj.collections = value; } }, metadata: _metadata }, _collections_initializers, _collections_extraInitializers);
        __esDecorate(null, null, _categories_decorators, { kind: "field", name: "categories", static: false, private: false, access: { has: function (obj) { return "categories" in obj; }, get: function (obj) { return obj.categories; }, set: function (obj, value) { obj.categories = value; } }, metadata: _metadata }, _categories_initializers, _categories_extraInitializers);
        __esDecorate(null, null, _store_decorators, { kind: "field", name: "store", static: false, private: false, access: { has: function (obj) { return "store" in obj; }, get: function (obj) { return obj.store; }, set: function (obj, value) { obj.store = value; } }, metadata: _metadata }, _store_initializers, _store_extraInitializers);
        __esDecorate(null, null, _customerGroups_decorators, { kind: "field", name: "customerGroups", static: false, private: false, access: { has: function (obj) { return "customerGroups" in obj; }, get: function (obj) { return obj.customerGroups; }, set: function (obj, value) { obj.customerGroups = value; } }, metadata: _metadata }, _customerGroups_initializers, _customerGroups_extraInitializers);
        __esDecorate(null, null, _regions_decorators, { kind: "field", name: "regions", static: false, private: false, access: { has: function (obj) { return "regions" in obj; }, get: function (obj) { return obj.regions; }, set: function (obj, value) { obj.regions = value; } }, metadata: _metadata }, _regions_initializers, _regions_extraInitializers);
        __esDecorate(null, null, _applies_to_shipping_decorators, { kind: "field", name: "applies_to_shipping", static: false, private: false, access: { has: function (obj) { return "applies_to_shipping" in obj; }, get: function (obj) { return obj.applies_to_shipping; }, set: function (obj, value) { obj.applies_to_shipping = value; } }, metadata: _metadata }, _applies_to_shipping_initializers, _applies_to_shipping_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _deleted_decorators, { kind: "field", name: "deleted", static: false, private: false, access: { has: function (obj) { return "deleted" in obj; }, get: function (obj) { return obj.deleted; }, set: function (obj, value) { obj.deleted = value; } }, metadata: _metadata }, _deleted_initializers, _deleted_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Promotion = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Promotion = _classThis;
}();
exports.Promotion = Promotion;
exports.PromotionSchema = mongoose_1.SchemaFactory.createForClass(Promotion);
