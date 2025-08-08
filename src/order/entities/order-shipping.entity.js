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
exports.OrderShippingSchema = exports.OrderShipping = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderShipping = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_shippings',
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "ordspmv_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var _return_decorators;
    var _return_initializers = [];
    var _return_extraInitializers = [];
    var _exchange_decorators;
    var _exchange_initializers = [];
    var _exchange_extraInitializers = [];
    var _claim_decorators;
    var _claim_initializers = [];
    var _claim_extraInitializers = [];
    var _shipping_method_decorators;
    var _shipping_method_initializers = [];
    var _shipping_method_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderShipping = _classThis = /** @class */ (function () {
        function OrderShipping_1() {
            this.version = __runInitializers(this, _version_initializers, void 0);
            this.order = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _order_initializers, void 0));
            this.return = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _return_initializers, void 0));
            this.exchange = (__runInitializers(this, _return_extraInitializers), __runInitializers(this, _exchange_initializers, void 0));
            this.claim = (__runInitializers(this, _exchange_extraInitializers), __runInitializers(this, _claim_initializers, void 0));
            this.shipping_method = (__runInitializers(this, _claim_extraInitializers), __runInitializers(this, _shipping_method_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _shipping_method_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderShipping_1;
    }());
    __setFunctionName(_classThis, "OrderShipping");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _version_decorators = [(0, mongoose_1.Prop)({ default: 1 })];
        _order_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Order',
                required: true,
            })];
        _return_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Return',
            })];
        _exchange_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderExchange',
            })];
        _claim_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderClaim',
            })];
        _shipping_method_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderShippingMethod',
                required: true,
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _return_decorators, { kind: "field", name: "return", static: false, private: false, access: { has: function (obj) { return "return" in obj; }, get: function (obj) { return obj.return; }, set: function (obj, value) { obj.return = value; } }, metadata: _metadata }, _return_initializers, _return_extraInitializers);
        __esDecorate(null, null, _exchange_decorators, { kind: "field", name: "exchange", static: false, private: false, access: { has: function (obj) { return "exchange" in obj; }, get: function (obj) { return obj.exchange; }, set: function (obj, value) { obj.exchange = value; } }, metadata: _metadata }, _exchange_initializers, _exchange_extraInitializers);
        __esDecorate(null, null, _claim_decorators, { kind: "field", name: "claim", static: false, private: false, access: { has: function (obj) { return "claim" in obj; }, get: function (obj) { return obj.claim; }, set: function (obj, value) { obj.claim = value; } }, metadata: _metadata }, _claim_initializers, _claim_extraInitializers);
        __esDecorate(null, null, _shipping_method_decorators, { kind: "field", name: "shipping_method", static: false, private: false, access: { has: function (obj) { return "shipping_method" in obj; }, get: function (obj) { return obj.shipping_method; }, set: function (obj, value) { obj.shipping_method = value; } }, metadata: _metadata }, _shipping_method_initializers, _shipping_method_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderShipping = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderShipping = _classThis;
}();
exports.OrderShipping = OrderShipping;
exports.OrderShippingSchema = mongoose_1.SchemaFactory.createForClass(OrderShipping);
