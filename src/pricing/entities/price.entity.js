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
exports.PriceSchema = exports.Price = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Price = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _min_quantity_decorators;
    var _min_quantity_initializers = [];
    var _min_quantity_extraInitializers = [];
    var _max_quantity_decorators;
    var _max_quantity_initializers = [];
    var _max_quantity_extraInitializers = [];
    var _rules_count_decorators;
    var _rules_count_initializers = [];
    var _rules_count_extraInitializers = [];
    var _price_set_decorators;
    var _price_set_initializers = [];
    var _price_set_extraInitializers = [];
    var _price_rules_decorators;
    var _price_rules_initializers = [];
    var _price_rules_extraInitializers = [];
    var _store_id_decorators;
    var _store_id_initializers = [];
    var _store_id_extraInitializers = [];
    var _price_list_decorators;
    var _price_list_initializers = [];
    var _price_list_extraInitializers = [];
    var _region_decorators;
    var _region_initializers = [];
    var _region_extraInitializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _country_extraInitializers = [];
    var _product_variant_decorators;
    var _product_variant_initializers = [];
    var _product_variant_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var Price = _classThis = /** @class */ (function (_super) {
        __extends(Price_1, _super);
        function Price_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = __runInitializers(_this, _title_initializers, void 0);
            _this.currency_code = (__runInitializers(_this, _title_extraInitializers), __runInitializers(_this, _currency_code_initializers, void 0));
            _this.amount = (__runInitializers(_this, _currency_code_extraInitializers), __runInitializers(_this, _amount_initializers, void 0));
            _this.min_quantity = (__runInitializers(_this, _amount_extraInitializers), __runInitializers(_this, _min_quantity_initializers, void 0));
            _this.max_quantity = (__runInitializers(_this, _min_quantity_extraInitializers), __runInitializers(_this, _max_quantity_initializers, void 0));
            _this.rules_count = (__runInitializers(_this, _max_quantity_extraInitializers), __runInitializers(_this, _rules_count_initializers, void 0));
            _this.price_set = (__runInitializers(_this, _rules_count_extraInitializers), __runInitializers(_this, _price_set_initializers, void 0));
            _this.price_rules = (__runInitializers(_this, _price_set_extraInitializers), __runInitializers(_this, _price_rules_initializers, void 0));
            _this.store_id = (__runInitializers(_this, _price_rules_extraInitializers), __runInitializers(_this, _store_id_initializers, void 0));
            _this.price_list = (__runInitializers(_this, _store_id_extraInitializers), __runInitializers(_this, _price_list_initializers, void 0));
            // Nouveaux champs relationnels
            _this.region = (__runInitializers(_this, _price_list_extraInitializers), __runInitializers(_this, _region_initializers, void 0));
            _this.country = (__runInitializers(_this, _region_extraInitializers), __runInitializers(_this, _country_initializers, void 0));
            _this.product_variant = (__runInitializers(_this, _country_extraInitializers), __runInitializers(_this, _product_variant_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _product_variant_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            __runInitializers(_this, _deleted_at_extraInitializers);
            return _this;
        }
        return Price_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Price");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _currency_code_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _amount_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true })];
        _min_quantity_decorators = [(0, mongoose_1.Prop)({ type: Number })];
        _max_quantity_decorators = [(0, mongoose_1.Prop)({ type: Number })];
        _rules_count_decorators = [(0, mongoose_1.Prop)({ type: Number, default: 0 })];
        _price_set_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'PriceSet', required: true })];
        _price_rules_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'PriceRule' }] })];
        _store_id_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Store', required: true })];
        _price_list_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'PriceList' })];
        _region_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Region' })];
        _country_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Country' })];
        _product_variant_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'ProductVariant' })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _min_quantity_decorators, { kind: "field", name: "min_quantity", static: false, private: false, access: { has: function (obj) { return "min_quantity" in obj; }, get: function (obj) { return obj.min_quantity; }, set: function (obj, value) { obj.min_quantity = value; } }, metadata: _metadata }, _min_quantity_initializers, _min_quantity_extraInitializers);
        __esDecorate(null, null, _max_quantity_decorators, { kind: "field", name: "max_quantity", static: false, private: false, access: { has: function (obj) { return "max_quantity" in obj; }, get: function (obj) { return obj.max_quantity; }, set: function (obj, value) { obj.max_quantity = value; } }, metadata: _metadata }, _max_quantity_initializers, _max_quantity_extraInitializers);
        __esDecorate(null, null, _rules_count_decorators, { kind: "field", name: "rules_count", static: false, private: false, access: { has: function (obj) { return "rules_count" in obj; }, get: function (obj) { return obj.rules_count; }, set: function (obj, value) { obj.rules_count = value; } }, metadata: _metadata }, _rules_count_initializers, _rules_count_extraInitializers);
        __esDecorate(null, null, _price_set_decorators, { kind: "field", name: "price_set", static: false, private: false, access: { has: function (obj) { return "price_set" in obj; }, get: function (obj) { return obj.price_set; }, set: function (obj, value) { obj.price_set = value; } }, metadata: _metadata }, _price_set_initializers, _price_set_extraInitializers);
        __esDecorate(null, null, _price_rules_decorators, { kind: "field", name: "price_rules", static: false, private: false, access: { has: function (obj) { return "price_rules" in obj; }, get: function (obj) { return obj.price_rules; }, set: function (obj, value) { obj.price_rules = value; } }, metadata: _metadata }, _price_rules_initializers, _price_rules_extraInitializers);
        __esDecorate(null, null, _store_id_decorators, { kind: "field", name: "store_id", static: false, private: false, access: { has: function (obj) { return "store_id" in obj; }, get: function (obj) { return obj.store_id; }, set: function (obj, value) { obj.store_id = value; } }, metadata: _metadata }, _store_id_initializers, _store_id_extraInitializers);
        __esDecorate(null, null, _price_list_decorators, { kind: "field", name: "price_list", static: false, private: false, access: { has: function (obj) { return "price_list" in obj; }, get: function (obj) { return obj.price_list; }, set: function (obj, value) { obj.price_list = value; } }, metadata: _metadata }, _price_list_initializers, _price_list_extraInitializers);
        __esDecorate(null, null, _region_decorators, { kind: "field", name: "region", static: false, private: false, access: { has: function (obj) { return "region" in obj; }, get: function (obj) { return obj.region; }, set: function (obj, value) { obj.region = value; } }, metadata: _metadata }, _region_initializers, _region_extraInitializers);
        __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _country_extraInitializers);
        __esDecorate(null, null, _product_variant_decorators, { kind: "field", name: "product_variant", static: false, private: false, access: { has: function (obj) { return "product_variant" in obj; }, get: function (obj) { return obj.product_variant; }, set: function (obj, value) { obj.product_variant = value; } }, metadata: _metadata }, _product_variant_initializers, _product_variant_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Price = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Price = _classThis;
}();
exports.Price = Price;
exports.PriceSchema = mongoose_1.SchemaFactory.createForClass(Price);
