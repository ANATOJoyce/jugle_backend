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
exports.CreateShippingOptionRuleDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var shipping_option_rule_entity_1 = require("../entities/shipping-option-rule.entity");
var CreateShippingOptionRuleDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _attribute_decorators;
    var _attribute_initializers = [];
    var _attribute_extraInitializers = [];
    var _operator_decorators;
    var _operator_initializers = [];
    var _operator_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _shipping_option_decorators;
    var _shipping_option_initializers = [];
    var _shipping_option_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateShippingOptionRuleDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.attribute = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _attribute_initializers, void 0));
                this.operator = (__runInitializers(this, _attribute_extraInitializers), __runInitializers(this, _operator_initializers, void 0));
                this.value = (__runInitializers(this, _operator_extraInitializers), __runInitializers(this, _value_initializers, void 0));
                this.shipping_option = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _shipping_option_initializers, void 0));
                __runInitializers(this, _shipping_option_extraInitializers);
            }
            return CreateShippingOptionRuleDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({ example: 'sorul_60c72b2f9b1e8c001cf9fabc', description: 'Unique ShippingOptionRule ID' }), (0, class_validator_1.IsString)()];
            _attribute_decorators = [(0, swagger_1.ApiProperty)({ example: 'weight', description: 'Attribute on which the rule applies' }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _operator_decorators = [(0, swagger_1.ApiProperty)({ enum: shipping_option_rule_entity_1.RuleOperator, description: 'Operator of the rule' }), (0, class_validator_1.IsEnum)(shipping_option_rule_entity_1.RuleOperator)];
            _value_decorators = [(0, swagger_1.ApiProperty)({ example: { min: 1, max: 10 }, description: 'Value for the rule', required: false, nullable: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            _shipping_option_decorators = [(0, swagger_1.ApiProperty)({ description: 'Reference to ShippingOption by ID' }), (0, class_validator_1.IsMongoId)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _attribute_decorators, { kind: "field", name: "attribute", static: false, private: false, access: { has: function (obj) { return "attribute" in obj; }, get: function (obj) { return obj.attribute; }, set: function (obj, value) { obj.attribute = value; } }, metadata: _metadata }, _attribute_initializers, _attribute_extraInitializers);
            __esDecorate(null, null, _operator_decorators, { kind: "field", name: "operator", static: false, private: false, access: { has: function (obj) { return "operator" in obj; }, get: function (obj) { return obj.operator; }, set: function (obj, value) { obj.operator = value; } }, metadata: _metadata }, _operator_initializers, _operator_extraInitializers);
            __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(null, null, _shipping_option_decorators, { kind: "field", name: "shipping_option", static: false, private: false, access: { has: function (obj) { return "shipping_option" in obj; }, get: function (obj) { return obj.shipping_option; }, set: function (obj, value) { obj.shipping_option = value; } }, metadata: _metadata }, _shipping_option_initializers, _shipping_option_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateShippingOptionRuleDto = CreateShippingOptionRuleDto;
