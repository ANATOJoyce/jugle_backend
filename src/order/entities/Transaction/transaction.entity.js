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
exports.OrderTransactionSchema = exports.OrderTransaction = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderTransaction = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ collection: 'order_transactions', timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _reference_decorators;
    var _reference_initializers = [];
    var _reference_extraInitializers = [];
    var _reference_id_decorators;
    var _reference_id_initializers = [];
    var _reference_id_extraInitializers = [];
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
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderTransaction = _classThis = /** @class */ (function () {
        function OrderTransaction_1() {
            this.version = __runInitializers(this, _version_initializers, void 0);
            this.amount = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.currency_code = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _currency_code_initializers, void 0));
            this.reference = (__runInitializers(this, _currency_code_extraInitializers), __runInitializers(this, _reference_initializers, void 0));
            this.reference_id = (__runInitializers(this, _reference_extraInitializers), __runInitializers(this, _reference_id_initializers, void 0));
            this.order = (__runInitializers(this, _reference_id_extraInitializers), __runInitializers(this, _order_initializers, void 0));
            this.return = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _return_initializers, void 0));
            this.exchange = (__runInitializers(this, _return_extraInitializers), __runInitializers(this, _exchange_initializers, void 0));
            this.claim = (__runInitializers(this, _exchange_extraInitializers), __runInitializers(this, _claim_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _claim_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderTransaction_1;
    }());
    __setFunctionName(_classThis, "OrderTransaction");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _version_decorators = [(0, mongoose_1.Prop)({ type: Number, default: 1 })];
        _amount_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true })];
        _currency_code_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _reference_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _reference_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _order_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'Order', required: true })];
        _return_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'Return', default: null })];
        _exchange_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'OrderExchange', default: null })];
        _claim_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'OrderClaim', default: null })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _reference_decorators, { kind: "field", name: "reference", static: false, private: false, access: { has: function (obj) { return "reference" in obj; }, get: function (obj) { return obj.reference; }, set: function (obj, value) { obj.reference = value; } }, metadata: _metadata }, _reference_initializers, _reference_extraInitializers);
        __esDecorate(null, null, _reference_id_decorators, { kind: "field", name: "reference_id", static: false, private: false, access: { has: function (obj) { return "reference_id" in obj; }, get: function (obj) { return obj.reference_id; }, set: function (obj, value) { obj.reference_id = value; } }, metadata: _metadata }, _reference_id_initializers, _reference_id_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _return_decorators, { kind: "field", name: "return", static: false, private: false, access: { has: function (obj) { return "return" in obj; }, get: function (obj) { return obj.return; }, set: function (obj, value) { obj.return = value; } }, metadata: _metadata }, _return_initializers, _return_extraInitializers);
        __esDecorate(null, null, _exchange_decorators, { kind: "field", name: "exchange", static: false, private: false, access: { has: function (obj) { return "exchange" in obj; }, get: function (obj) { return obj.exchange; }, set: function (obj, value) { obj.exchange = value; } }, metadata: _metadata }, _exchange_initializers, _exchange_extraInitializers);
        __esDecorate(null, null, _claim_decorators, { kind: "field", name: "claim", static: false, private: false, access: { has: function (obj) { return "claim" in obj; }, get: function (obj) { return obj.claim; }, set: function (obj, value) { obj.claim = value; } }, metadata: _metadata }, _claim_initializers, _claim_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderTransaction = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderTransaction = _classThis;
}();
exports.OrderTransaction = OrderTransaction;
exports.OrderTransactionSchema = mongoose_1.SchemaFactory.createForClass(OrderTransaction);
