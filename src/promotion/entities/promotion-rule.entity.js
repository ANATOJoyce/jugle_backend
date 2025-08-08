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
exports.PromotionRuleSchema = exports.PromotionRule = exports.PromotionRuleOperator = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var PromotionRuleOperator;
(function (PromotionRuleOperator) {
    PromotionRuleOperator["IN"] = "in";
    PromotionRuleOperator["NOT_IN"] = "not_in";
    PromotionRuleOperator["EQ"] = "eq";
    PromotionRuleOperator["NE"] = "ne";
    PromotionRuleOperator["GT"] = "gt";
    PromotionRuleOperator["GTE"] = "gte";
    PromotionRuleOperator["LT"] = "lt";
    PromotionRuleOperator["LTE"] = "lte";
})(PromotionRuleOperator || (exports.PromotionRuleOperator = PromotionRuleOperator = {}));
var PromotionRule = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true },
            collection: 'promotion_rule',
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _attribute_decorators;
    var _attribute_initializers = [];
    var _attribute_extraInitializers = [];
    var _operator_decorators;
    var _operator_initializers = [];
    var _operator_extraInitializers = [];
    var _values_decorators;
    var _values_initializers = [];
    var _values_extraInitializers = [];
    var _promotions_decorators;
    var _promotions_initializers = [];
    var _promotions_extraInitializers = [];
    var _method_target_rules_decorators;
    var _method_target_rules_initializers = [];
    var _method_target_rules_extraInitializers = [];
    var _method_buy_rules_decorators;
    var _method_buy_rules_initializers = [];
    var _method_buy_rules_extraInitializers = [];
    var PromotionRule = _classThis = /** @class */ (function (_super) {
        __extends(PromotionRule_1, _super);
        function PromotionRule_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.description = __runInitializers(_this, _description_initializers, void 0);
            _this.attribute = (__runInitializers(_this, _description_extraInitializers), __runInitializers(_this, _attribute_initializers, void 0));
            _this.operator = (__runInitializers(_this, _attribute_extraInitializers), __runInitializers(_this, _operator_initializers, void 0));
            _this.values = (__runInitializers(_this, _operator_extraInitializers), __runInitializers(_this, _values_initializers, void 0));
            _this.promotions = (__runInitializers(_this, _values_extraInitializers), __runInitializers(_this, _promotions_initializers, void 0));
            _this.method_target_rules = (__runInitializers(_this, _promotions_extraInitializers), __runInitializers(_this, _method_target_rules_initializers, void 0));
            _this.method_buy_rules = (__runInitializers(_this, _method_target_rules_extraInitializers), __runInitializers(_this, _method_buy_rules_initializers, void 0));
            __runInitializers(_this, _method_buy_rules_extraInitializers);
            return _this;
        }
        return PromotionRule_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PromotionRule");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _description_decorators = [(0, mongoose_1.Prop)()];
        _attribute_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _operator_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: Object.values(PromotionRuleOperator),
                required: true,
                index: true,
            })];
        _values_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'PromotionRuleValue' }],
            })];
        _promotions_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Promotion' }],
            })];
        _method_target_rules_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'ApplicationMethod' }],
            })];
        _method_buy_rules_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'ApplicationMethod' }],
            })];
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _attribute_decorators, { kind: "field", name: "attribute", static: false, private: false, access: { has: function (obj) { return "attribute" in obj; }, get: function (obj) { return obj.attribute; }, set: function (obj, value) { obj.attribute = value; } }, metadata: _metadata }, _attribute_initializers, _attribute_extraInitializers);
        __esDecorate(null, null, _operator_decorators, { kind: "field", name: "operator", static: false, private: false, access: { has: function (obj) { return "operator" in obj; }, get: function (obj) { return obj.operator; }, set: function (obj, value) { obj.operator = value; } }, metadata: _metadata }, _operator_initializers, _operator_extraInitializers);
        __esDecorate(null, null, _values_decorators, { kind: "field", name: "values", static: false, private: false, access: { has: function (obj) { return "values" in obj; }, get: function (obj) { return obj.values; }, set: function (obj, value) { obj.values = value; } }, metadata: _metadata }, _values_initializers, _values_extraInitializers);
        __esDecorate(null, null, _promotions_decorators, { kind: "field", name: "promotions", static: false, private: false, access: { has: function (obj) { return "promotions" in obj; }, get: function (obj) { return obj.promotions; }, set: function (obj, value) { obj.promotions = value; } }, metadata: _metadata }, _promotions_initializers, _promotions_extraInitializers);
        __esDecorate(null, null, _method_target_rules_decorators, { kind: "field", name: "method_target_rules", static: false, private: false, access: { has: function (obj) { return "method_target_rules" in obj; }, get: function (obj) { return obj.method_target_rules; }, set: function (obj, value) { obj.method_target_rules = value; } }, metadata: _metadata }, _method_target_rules_initializers, _method_target_rules_extraInitializers);
        __esDecorate(null, null, _method_buy_rules_decorators, { kind: "field", name: "method_buy_rules", static: false, private: false, access: { has: function (obj) { return "method_buy_rules" in obj; }, get: function (obj) { return obj.method_buy_rules; }, set: function (obj, value) { obj.method_buy_rules = value; } }, metadata: _metadata }, _method_buy_rules_initializers, _method_buy_rules_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PromotionRule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PromotionRule = _classThis;
}();
exports.PromotionRule = PromotionRule;
exports.PromotionRuleSchema = mongoose_1.SchemaFactory.createForClass(PromotionRule);
