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
exports.ApplicationMethodSchema = exports.ApplicationMethod = exports.ApplicationMethodAllocation = exports.ApplicationMethodTargetType = exports.ApplicationMethodType = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ApplicationMethodType;
(function (ApplicationMethodType) {
    ApplicationMethodType["FIXED"] = "fixed";
    ApplicationMethodType["PERCENTAGE"] = "percentage";
    ApplicationMethodType["FREE_SHIPPING"] = "free_shipping";
})(ApplicationMethodType || (exports.ApplicationMethodType = ApplicationMethodType = {}));
var ApplicationMethodTargetType;
(function (ApplicationMethodTargetType) {
    ApplicationMethodTargetType["ORDER"] = "order";
    ApplicationMethodTargetType["SHIPPING_METHODS"] = "shipping_methods";
    ApplicationMethodTargetType["ITEMS"] = "items";
})(ApplicationMethodTargetType || (exports.ApplicationMethodTargetType = ApplicationMethodTargetType = {}));
var ApplicationMethodAllocation;
(function (ApplicationMethodAllocation) {
    ApplicationMethodAllocation["EACH"] = "each";
    ApplicationMethodAllocation["ACROSS"] = "across";
})(ApplicationMethodAllocation || (exports.ApplicationMethodAllocation = ApplicationMethodAllocation = {}));
var ApplicationMethod = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            collection: 'promotion_application_method',
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true }
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _max_quantity_decorators;
    var _max_quantity_initializers = [];
    var _max_quantity_extraInitializers = [];
    var _apply_to_quantity_decorators;
    var _apply_to_quantity_initializers = [];
    var _apply_to_quantity_extraInitializers = [];
    var _buy_rules_min_quantity_decorators;
    var _buy_rules_min_quantity_initializers = [];
    var _buy_rules_min_quantity_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _target_type_decorators;
    var _target_type_initializers = [];
    var _target_type_extraInitializers = [];
    var _allocation_decorators;
    var _allocation_initializers = [];
    var _allocation_extraInitializers = [];
    var _promotion_decorators;
    var _promotion_initializers = [];
    var _promotion_extraInitializers = [];
    var _target_rules_decorators;
    var _target_rules_initializers = [];
    var _target_rules_extraInitializers = [];
    var _buy_rules_decorators;
    var _buy_rules_initializers = [];
    var _buy_rules_extraInitializers = [];
    var ApplicationMethod = _classThis = /** @class */ (function (_super) {
        __extends(ApplicationMethod_1, _super);
        function ApplicationMethod_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = __runInitializers(_this, _value_initializers, void 0);
            _this.currency_code = (__runInitializers(_this, _value_extraInitializers), __runInitializers(_this, _currency_code_initializers, void 0));
            _this.max_quantity = (__runInitializers(_this, _currency_code_extraInitializers), __runInitializers(_this, _max_quantity_initializers, void 0));
            _this.apply_to_quantity = (__runInitializers(_this, _max_quantity_extraInitializers), __runInitializers(_this, _apply_to_quantity_initializers, void 0));
            _this.buy_rules_min_quantity = (__runInitializers(_this, _apply_to_quantity_extraInitializers), __runInitializers(_this, _buy_rules_min_quantity_initializers, void 0));
            _this.type = (__runInitializers(_this, _buy_rules_min_quantity_extraInitializers), __runInitializers(_this, _type_initializers, void 0));
            _this.target_type = (__runInitializers(_this, _type_extraInitializers), __runInitializers(_this, _target_type_initializers, void 0));
            _this.allocation = (__runInitializers(_this, _target_type_extraInitializers), __runInitializers(_this, _allocation_initializers, void 0));
            _this.promotion = (__runInitializers(_this, _allocation_extraInitializers), __runInitializers(_this, _promotion_initializers, void 0));
            _this.target_rules = (__runInitializers(_this, _promotion_extraInitializers), __runInitializers(_this, _target_rules_initializers, void 0));
            _this.buy_rules = (__runInitializers(_this, _target_rules_extraInitializers), __runInitializers(_this, _buy_rules_initializers, void 0));
            __runInitializers(_this, _buy_rules_extraInitializers);
            return _this;
        }
        return ApplicationMethod_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ApplicationMethod");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _value_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                get: function (v) { return (v ? Number(v.toString()) : v); },
                set: function (v) { return (v ? Number(v.toString()) : v); }
            })];
        _currency_code_decorators = [(0, mongoose_1.Prop)({ index: true })];
        _max_quantity_decorators = [(0, mongoose_1.Prop)()];
        _apply_to_quantity_decorators = [(0, mongoose_1.Prop)()];
        _buy_rules_min_quantity_decorators = [(0, mongoose_1.Prop)()];
        _type_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: Object.values(ApplicationMethodType),
                required: true
            })];
        _target_type_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: Object.values(ApplicationMethodTargetType),
                required: true
            })];
        _allocation_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: Object.values(ApplicationMethodAllocation)
            })];
        _promotion_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Promotion',
                required: true
            })];
        _target_rules_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Types.ObjectId, ref: 'PromotionRule' }],
                default: []
            })];
        _buy_rules_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Types.ObjectId, ref: 'PromotionRule' }],
                default: []
            })];
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _max_quantity_decorators, { kind: "field", name: "max_quantity", static: false, private: false, access: { has: function (obj) { return "max_quantity" in obj; }, get: function (obj) { return obj.max_quantity; }, set: function (obj, value) { obj.max_quantity = value; } }, metadata: _metadata }, _max_quantity_initializers, _max_quantity_extraInitializers);
        __esDecorate(null, null, _apply_to_quantity_decorators, { kind: "field", name: "apply_to_quantity", static: false, private: false, access: { has: function (obj) { return "apply_to_quantity" in obj; }, get: function (obj) { return obj.apply_to_quantity; }, set: function (obj, value) { obj.apply_to_quantity = value; } }, metadata: _metadata }, _apply_to_quantity_initializers, _apply_to_quantity_extraInitializers);
        __esDecorate(null, null, _buy_rules_min_quantity_decorators, { kind: "field", name: "buy_rules_min_quantity", static: false, private: false, access: { has: function (obj) { return "buy_rules_min_quantity" in obj; }, get: function (obj) { return obj.buy_rules_min_quantity; }, set: function (obj, value) { obj.buy_rules_min_quantity = value; } }, metadata: _metadata }, _buy_rules_min_quantity_initializers, _buy_rules_min_quantity_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _target_type_decorators, { kind: "field", name: "target_type", static: false, private: false, access: { has: function (obj) { return "target_type" in obj; }, get: function (obj) { return obj.target_type; }, set: function (obj, value) { obj.target_type = value; } }, metadata: _metadata }, _target_type_initializers, _target_type_extraInitializers);
        __esDecorate(null, null, _allocation_decorators, { kind: "field", name: "allocation", static: false, private: false, access: { has: function (obj) { return "allocation" in obj; }, get: function (obj) { return obj.allocation; }, set: function (obj, value) { obj.allocation = value; } }, metadata: _metadata }, _allocation_initializers, _allocation_extraInitializers);
        __esDecorate(null, null, _promotion_decorators, { kind: "field", name: "promotion", static: false, private: false, access: { has: function (obj) { return "promotion" in obj; }, get: function (obj) { return obj.promotion; }, set: function (obj, value) { obj.promotion = value; } }, metadata: _metadata }, _promotion_initializers, _promotion_extraInitializers);
        __esDecorate(null, null, _target_rules_decorators, { kind: "field", name: "target_rules", static: false, private: false, access: { has: function (obj) { return "target_rules" in obj; }, get: function (obj) { return obj.target_rules; }, set: function (obj, value) { obj.target_rules = value; } }, metadata: _metadata }, _target_rules_initializers, _target_rules_extraInitializers);
        __esDecorate(null, null, _buy_rules_decorators, { kind: "field", name: "buy_rules", static: false, private: false, access: { has: function (obj) { return "buy_rules" in obj; }, get: function (obj) { return obj.buy_rules; }, set: function (obj, value) { obj.buy_rules = value; } }, metadata: _metadata }, _buy_rules_initializers, _buy_rules_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApplicationMethod = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApplicationMethod = _classThis;
}();
exports.ApplicationMethod = ApplicationMethod;
exports.ApplicationMethodSchema = mongoose_1.SchemaFactory.createForClass(ApplicationMethod);
