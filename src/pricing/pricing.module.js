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
exports.PricingModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var pricing_service_1 = require("./pricing.service");
var price_list_entity_1 = require("./entities/price-list.entity");
var price_list_rule_entity_1 = require("./entities/price-list-rule.entity");
var price_preference_entity_1 = require("./entities/price-preference.entity");
var price_rule_entity_1 = require("./entities/price-rule.entity");
var price_set_entity_1 = require("./entities/price-set.entity");
var money_amount_entity_1 = require("./entities/money-amount.entity");
var customer_entity_1 = require("../../../../../../../../src/customer/entities/customer.entity");
var pricing_controller_1 = require("./pricing.controller");
var price_entity_1 = require("./entities/price.entity");
var product_variant_entity_1 = require("../../../../../../../../src/product/entities/product-variant.entity");
var currency_entity_1 = require("../../../../../../../../src/currency/entities/currency.entity");
var PricingModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: price_list_entity_1.PriceList.name, schema: price_list_entity_1.PriceListSchema },
                    { name: price_list_rule_entity_1.PriceListRule.name, schema: price_list_rule_entity_1.PriceListRuleSchema },
                    { name: price_preference_entity_1.PricePreference.name, schema: price_preference_entity_1.PricePreferenceSchema },
                    { name: price_rule_entity_1.PriceRule.name, schema: price_rule_entity_1.PriceRuleSchema },
                    { name: price_set_entity_1.PriceSet.name, schema: price_set_entity_1.PriceSetSchema },
                    { name: price_entity_1.Price.name, schema: price_entity_1.PriceSchema },
                    { name: customer_entity_1.Customer.name, schema: customer_entity_1.CustomerSchema },
                    { name: money_amount_entity_1.MoneyAmount.name, schema: money_amount_entity_1.MoneyAmountSchema },
                    { name: product_variant_entity_1.ProductVariant.name, schema: product_variant_entity_1.ProductVariantSchema },
                    { name: currency_entity_1.Currency.name, schema: currency_entity_1.CurrencySchema },
                ]),
            ],
            controllers: [pricing_controller_1.PricingController],
            providers: [pricing_service_1.PricingService],
            exports: [pricing_service_1.PricingService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PricingModule = _classThis = /** @class */ (function () {
        function PricingModule_1() {
        }
        return PricingModule_1;
    }());
    __setFunctionName(_classThis, "PricingModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PricingModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PricingModule = _classThis;
}();
exports.PricingModule = PricingModule;
