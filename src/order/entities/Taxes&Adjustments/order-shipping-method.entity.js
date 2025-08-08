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
exports.OrderShippingMethodSchema = exports.OrderShippingMethod = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderShippingMethod = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _is_tax_inclusive_decorators;
    var _is_tax_inclusive_initializers = [];
    var _is_tax_inclusive_extraInitializers = [];
    var _is_custom_amount_decorators;
    var _is_custom_amount_initializers = [];
    var _is_custom_amount_extraInitializers = [];
    var _shipping_option_id_decorators;
    var _shipping_option_id_initializers = [];
    var _shipping_option_id_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _tax_lines_decorators;
    var _tax_lines_initializers = [];
    var _tax_lines_extraInitializers = [];
    var _adjustments_decorators;
    var _adjustments_initializers = [];
    var _adjustments_extraInitializers = [];
    var OrderShippingMethod = _classThis = /** @class */ (function (_super) {
        __extends(OrderShippingMethod_1, _super);
        function OrderShippingMethod_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = __runInitializers(_this, _name_initializers, void 0);
            _this.description = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _description_initializers, void 0));
            _this.amount = (__runInitializers(_this, _description_extraInitializers), __runInitializers(_this, _amount_initializers, void 0));
            _this.is_tax_inclusive = (__runInitializers(_this, _amount_extraInitializers), __runInitializers(_this, _is_tax_inclusive_initializers, void 0));
            _this.is_custom_amount = (__runInitializers(_this, _is_tax_inclusive_extraInitializers), __runInitializers(_this, _is_custom_amount_initializers, void 0));
            _this.shipping_option_id = (__runInitializers(_this, _is_custom_amount_extraInitializers), __runInitializers(_this, _shipping_option_id_initializers, void 0));
            _this.data = (__runInitializers(_this, _shipping_option_id_extraInitializers), __runInitializers(_this, _data_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _data_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.tax_lines = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _tax_lines_initializers, void 0));
            _this.adjustments = (__runInitializers(_this, _tax_lines_extraInitializers), __runInitializers(_this, _adjustments_initializers, void 0));
            __runInitializers(_this, _adjustments_extraInitializers);
            return _this;
        }
        return OrderShippingMethod_1;
    }(_classSuper));
    __setFunctionName(_classThis, "OrderShippingMethod");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _description_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Mixed, default: null })];
        _amount_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true })];
        _is_tax_inclusive_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: false })];
        _is_custom_amount_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: false })];
        _shipping_option_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _data_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Mixed, default: null })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Mixed, default: null })];
        _tax_lines_decorators = [(0, mongoose_1.Prop)({
                type: [{
                        type: mongoose_2.SchemaTypes.ObjectId,
                        ref: 'OrderShippingMethodTaxLine'
                    }],
                default: []
            })];
        _adjustments_decorators = [(0, mongoose_1.Prop)({
                type: [{
                        type: mongoose_2.SchemaTypes.ObjectId,
                        ref: 'OrderShippingMethodAdjustment'
                    }],
                default: []
            })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _is_tax_inclusive_decorators, { kind: "field", name: "is_tax_inclusive", static: false, private: false, access: { has: function (obj) { return "is_tax_inclusive" in obj; }, get: function (obj) { return obj.is_tax_inclusive; }, set: function (obj, value) { obj.is_tax_inclusive = value; } }, metadata: _metadata }, _is_tax_inclusive_initializers, _is_tax_inclusive_extraInitializers);
        __esDecorate(null, null, _is_custom_amount_decorators, { kind: "field", name: "is_custom_amount", static: false, private: false, access: { has: function (obj) { return "is_custom_amount" in obj; }, get: function (obj) { return obj.is_custom_amount; }, set: function (obj, value) { obj.is_custom_amount = value; } }, metadata: _metadata }, _is_custom_amount_initializers, _is_custom_amount_extraInitializers);
        __esDecorate(null, null, _shipping_option_id_decorators, { kind: "field", name: "shipping_option_id", static: false, private: false, access: { has: function (obj) { return "shipping_option_id" in obj; }, get: function (obj) { return obj.shipping_option_id; }, set: function (obj, value) { obj.shipping_option_id = value; } }, metadata: _metadata }, _shipping_option_id_initializers, _shipping_option_id_extraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _tax_lines_decorators, { kind: "field", name: "tax_lines", static: false, private: false, access: { has: function (obj) { return "tax_lines" in obj; }, get: function (obj) { return obj.tax_lines; }, set: function (obj, value) { obj.tax_lines = value; } }, metadata: _metadata }, _tax_lines_initializers, _tax_lines_extraInitializers);
        __esDecorate(null, null, _adjustments_decorators, { kind: "field", name: "adjustments", static: false, private: false, access: { has: function (obj) { return "adjustments" in obj; }, get: function (obj) { return obj.adjustments; }, set: function (obj, value) { obj.adjustments = value; } }, metadata: _metadata }, _adjustments_initializers, _adjustments_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderShippingMethod = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderShippingMethod = _classThis;
}();
exports.OrderShippingMethod = OrderShippingMethod;
exports.OrderShippingMethodSchema = mongoose_1.SchemaFactory.createForClass(OrderShippingMethod);
