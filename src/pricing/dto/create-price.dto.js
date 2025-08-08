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
exports.CreatePriceDto = void 0;
var class_validator_1 = require("class-validator");
var CreatePriceDto = function () {
    var _a;
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
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePriceDto() {
                this.title = __runInitializers(this, _title_initializers, void 0);
                this.currency_code = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _currency_code_initializers, void 0));
                this.amount = (__runInitializers(this, _currency_code_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.min_quantity = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _min_quantity_initializers, void 0));
                this.max_quantity = (__runInitializers(this, _min_quantity_extraInitializers), __runInitializers(this, _max_quantity_initializers, void 0));
                this.price_set = (__runInitializers(this, _max_quantity_extraInitializers), __runInitializers(this, _price_set_initializers, void 0));
                this.price_rules = (__runInitializers(this, _price_set_extraInitializers), __runInitializers(this, _price_rules_initializers, void 0));
                this.store_id = (__runInitializers(this, _price_rules_extraInitializers), __runInitializers(this, _store_id_initializers, void 0));
                this.price_list = (__runInitializers(this, _store_id_extraInitializers), __runInitializers(this, _price_list_initializers, void 0));
                this.region = (__runInitializers(this, _price_list_extraInitializers), __runInitializers(this, _region_initializers, void 0));
                this.country = (__runInitializers(this, _region_extraInitializers), __runInitializers(this, _country_initializers, void 0));
                this.product_variant = (__runInitializers(this, _country_extraInitializers), __runInitializers(this, _product_variant_initializers, void 0));
                this.phone = (__runInitializers(this, _product_variant_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
                __runInitializers(this, _phone_extraInitializers);
            }
            return CreatePriceDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [(0, class_validator_1.IsString)()];
            _currency_code_decorators = [(0, class_validator_1.IsString)()];
            _amount_decorators = [(0, class_validator_1.IsNumber)()];
            _min_quantity_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _max_quantity_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _price_set_decorators = [(0, class_validator_1.IsMongoId)()];
            _price_rules_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)({ each: true })];
            _store_id_decorators = [(0, class_validator_1.IsMongoId)()];
            _price_list_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _region_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _country_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _product_variant_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _phone_decorators = [(0, class_validator_1.IsString)()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _min_quantity_decorators, { kind: "field", name: "min_quantity", static: false, private: false, access: { has: function (obj) { return "min_quantity" in obj; }, get: function (obj) { return obj.min_quantity; }, set: function (obj, value) { obj.min_quantity = value; } }, metadata: _metadata }, _min_quantity_initializers, _min_quantity_extraInitializers);
            __esDecorate(null, null, _max_quantity_decorators, { kind: "field", name: "max_quantity", static: false, private: false, access: { has: function (obj) { return "max_quantity" in obj; }, get: function (obj) { return obj.max_quantity; }, set: function (obj, value) { obj.max_quantity = value; } }, metadata: _metadata }, _max_quantity_initializers, _max_quantity_extraInitializers);
            __esDecorate(null, null, _price_set_decorators, { kind: "field", name: "price_set", static: false, private: false, access: { has: function (obj) { return "price_set" in obj; }, get: function (obj) { return obj.price_set; }, set: function (obj, value) { obj.price_set = value; } }, metadata: _metadata }, _price_set_initializers, _price_set_extraInitializers);
            __esDecorate(null, null, _price_rules_decorators, { kind: "field", name: "price_rules", static: false, private: false, access: { has: function (obj) { return "price_rules" in obj; }, get: function (obj) { return obj.price_rules; }, set: function (obj, value) { obj.price_rules = value; } }, metadata: _metadata }, _price_rules_initializers, _price_rules_extraInitializers);
            __esDecorate(null, null, _store_id_decorators, { kind: "field", name: "store_id", static: false, private: false, access: { has: function (obj) { return "store_id" in obj; }, get: function (obj) { return obj.store_id; }, set: function (obj, value) { obj.store_id = value; } }, metadata: _metadata }, _store_id_initializers, _store_id_extraInitializers);
            __esDecorate(null, null, _price_list_decorators, { kind: "field", name: "price_list", static: false, private: false, access: { has: function (obj) { return "price_list" in obj; }, get: function (obj) { return obj.price_list; }, set: function (obj, value) { obj.price_list = value; } }, metadata: _metadata }, _price_list_initializers, _price_list_extraInitializers);
            __esDecorate(null, null, _region_decorators, { kind: "field", name: "region", static: false, private: false, access: { has: function (obj) { return "region" in obj; }, get: function (obj) { return obj.region; }, set: function (obj, value) { obj.region = value; } }, metadata: _metadata }, _region_initializers, _region_extraInitializers);
            __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _country_extraInitializers);
            __esDecorate(null, null, _product_variant_decorators, { kind: "field", name: "product_variant", static: false, private: false, access: { has: function (obj) { return "product_variant" in obj; }, get: function (obj) { return obj.product_variant; }, set: function (obj, value) { obj.product_variant = value; } }, metadata: _metadata }, _product_variant_initializers, _product_variant_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePriceDto = CreatePriceDto;
