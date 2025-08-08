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
exports.CreatePriceRuleDto = void 0;
var class_validator_1 = require("class-validator");
var price_rule_entity_1 = require("../entities/price-rule.entity");
var CreatePriceRuleDto = function () {
    var _a;
    var _attribute_decorators;
    var _attribute_initializers = [];
    var _attribute_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _operator_decorators;
    var _operator_initializers = [];
    var _operator_extraInitializers = [];
    var _priority_decorators;
    var _priority_initializers = [];
    var _priority_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePriceRuleDto() {
                this.attribute = __runInitializers(this, _attribute_initializers, void 0);
                this.value = (__runInitializers(this, _attribute_extraInitializers), __runInitializers(this, _value_initializers, void 0));
                this.operator = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _operator_initializers, void 0));
                this.priority = (__runInitializers(this, _operator_extraInitializers), __runInitializers(this, _priority_initializers, void 0));
                this.price = (__runInitializers(this, _priority_extraInitializers), __runInitializers(this, _price_initializers, void 0));
                __runInitializers(this, _price_extraInitializers);
            }
            return CreatePriceRuleDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _attribute_decorators = [(0, class_validator_1.IsString)()];
            _value_decorators = [(0, class_validator_1.IsString)()];
            _operator_decorators = [(0, class_validator_1.IsEnum)(price_rule_entity_1.PricingRuleOperator)];
            _priority_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _price_decorators = [(0, class_validator_1.IsMongoId)()];
            __esDecorate(null, null, _attribute_decorators, { kind: "field", name: "attribute", static: false, private: false, access: { has: function (obj) { return "attribute" in obj; }, get: function (obj) { return obj.attribute; }, set: function (obj, value) { obj.attribute = value; } }, metadata: _metadata }, _attribute_initializers, _attribute_extraInitializers);
            __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(null, null, _operator_decorators, { kind: "field", name: "operator", static: false, private: false, access: { has: function (obj) { return "operator" in obj; }, get: function (obj) { return obj.operator; }, set: function (obj, value) { obj.operator = value; } }, metadata: _metadata }, _operator_initializers, _operator_extraInitializers);
            __esDecorate(null, null, _priority_decorators, { kind: "field", name: "priority", static: false, private: false, access: { has: function (obj) { return "priority" in obj; }, get: function (obj) { return obj.priority; }, set: function (obj, value) { obj.priority = value; } }, metadata: _metadata }, _priority_initializers, _priority_extraInitializers);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePriceRuleDto = CreatePriceRuleDto;
