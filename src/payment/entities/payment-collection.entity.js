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
exports.PaymentCollectionSchema = exports.PaymentCollection = exports.PaymentCollectionStatus = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var PaymentCollectionStatus;
(function (PaymentCollectionStatus) {
    PaymentCollectionStatus["NOT_PAID"] = "not_paid";
    PaymentCollectionStatus["AWAITING"] = "awaiting";
    PaymentCollectionStatus["AUTHORIZED"] = "authorized";
    PaymentCollectionStatus["PARTIALLY_CAPTURED"] = "partially_captured";
    PaymentCollectionStatus["CAPTURED"] = "captured";
    PaymentCollectionStatus["PARTIALLY_REFUNDED"] = "partially_refunded";
    PaymentCollectionStatus["REFUNDED"] = "refunded";
    PaymentCollectionStatus["CANCELED"] = "canceled";
    PaymentCollectionStatus["REQUIRES_ACTION"] = "requires_action";
})(PaymentCollectionStatus || (exports.PaymentCollectionStatus = PaymentCollectionStatus = {}));
var PaymentCollection = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _authorized_amount_decorators;
    var _authorized_amount_initializers = [];
    var _authorized_amount_extraInitializers = [];
    var _captured_amount_decorators;
    var _captured_amount_initializers = [];
    var _captured_amount_extraInitializers = [];
    var _refunded_amount_decorators;
    var _refunded_amount_initializers = [];
    var _refunded_amount_extraInitializers = [];
    var _completed_at_decorators;
    var _completed_at_initializers = [];
    var _completed_at_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _payment_providers_decorators;
    var _payment_providers_initializers = [];
    var _payment_providers_extraInitializers = [];
    var _payment_sessions_decorators;
    var _payment_sessions_initializers = [];
    var _payment_sessions_extraInitializers = [];
    var _payments_decorators;
    var _payments_initializers = [];
    var _payments_extraInitializers = [];
    var PaymentCollection = _classThis = /** @class */ (function () {
        function PaymentCollection_1() {
            this.currency_code = __runInitializers(this, _currency_code_initializers, void 0);
            this.amount = (__runInitializers(this, _currency_code_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.authorized_amount = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _authorized_amount_initializers, void 0));
            this.captured_amount = (__runInitializers(this, _authorized_amount_extraInitializers), __runInitializers(this, _captured_amount_initializers, void 0));
            this.refunded_amount = (__runInitializers(this, _captured_amount_extraInitializers), __runInitializers(this, _refunded_amount_initializers, void 0));
            this.completed_at = (__runInitializers(this, _refunded_amount_extraInitializers), __runInitializers(this, _completed_at_initializers, void 0));
            this.status = (__runInitializers(this, _completed_at_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.metadata = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            // Many-to-Many with PaymentProvider
            this.payment_providers = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _payment_providers_initializers, void 0));
            // One-to-Many with PaymentSession
            this.payment_sessions = (__runInitializers(this, _payment_providers_extraInitializers), __runInitializers(this, _payment_sessions_initializers, void 0));
            // One-to-Many with Payment
            this.payments = (__runInitializers(this, _payment_sessions_extraInitializers), __runInitializers(this, _payments_initializers, void 0));
            __runInitializers(this, _payments_extraInitializers);
        }
        return PaymentCollection_1;
    }());
    __setFunctionName(_classThis, "PaymentCollection");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _currency_code_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _amount_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Decimal128, required: true })];
        _authorized_amount_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Decimal128, default: null })];
        _captured_amount_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Decimal128, default: null })];
        _refunded_amount_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Decimal128, default: null })];
        _completed_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _status_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: Object.values(PaymentCollectionStatus),
                default: PaymentCollectionStatus.NOT_PAID,
            })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _payment_providers_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'PaymentProvider' }],
                default: [],
            })];
        _payment_sessions_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'PaymentSession' }],
                default: [],
            })];
        _payments_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Payment' }],
                default: [],
            })];
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _authorized_amount_decorators, { kind: "field", name: "authorized_amount", static: false, private: false, access: { has: function (obj) { return "authorized_amount" in obj; }, get: function (obj) { return obj.authorized_amount; }, set: function (obj, value) { obj.authorized_amount = value; } }, metadata: _metadata }, _authorized_amount_initializers, _authorized_amount_extraInitializers);
        __esDecorate(null, null, _captured_amount_decorators, { kind: "field", name: "captured_amount", static: false, private: false, access: { has: function (obj) { return "captured_amount" in obj; }, get: function (obj) { return obj.captured_amount; }, set: function (obj, value) { obj.captured_amount = value; } }, metadata: _metadata }, _captured_amount_initializers, _captured_amount_extraInitializers);
        __esDecorate(null, null, _refunded_amount_decorators, { kind: "field", name: "refunded_amount", static: false, private: false, access: { has: function (obj) { return "refunded_amount" in obj; }, get: function (obj) { return obj.refunded_amount; }, set: function (obj, value) { obj.refunded_amount = value; } }, metadata: _metadata }, _refunded_amount_initializers, _refunded_amount_extraInitializers);
        __esDecorate(null, null, _completed_at_decorators, { kind: "field", name: "completed_at", static: false, private: false, access: { has: function (obj) { return "completed_at" in obj; }, get: function (obj) { return obj.completed_at; }, set: function (obj, value) { obj.completed_at = value; } }, metadata: _metadata }, _completed_at_initializers, _completed_at_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _payment_providers_decorators, { kind: "field", name: "payment_providers", static: false, private: false, access: { has: function (obj) { return "payment_providers" in obj; }, get: function (obj) { return obj.payment_providers; }, set: function (obj, value) { obj.payment_providers = value; } }, metadata: _metadata }, _payment_providers_initializers, _payment_providers_extraInitializers);
        __esDecorate(null, null, _payment_sessions_decorators, { kind: "field", name: "payment_sessions", static: false, private: false, access: { has: function (obj) { return "payment_sessions" in obj; }, get: function (obj) { return obj.payment_sessions; }, set: function (obj, value) { obj.payment_sessions = value; } }, metadata: _metadata }, _payment_sessions_initializers, _payment_sessions_extraInitializers);
        __esDecorate(null, null, _payments_decorators, { kind: "field", name: "payments", static: false, private: false, access: { has: function (obj) { return "payments" in obj; }, get: function (obj) { return obj.payments; }, set: function (obj, value) { obj.payments = value; } }, metadata: _metadata }, _payments_initializers, _payments_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaymentCollection = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaymentCollection = _classThis;
}();
exports.PaymentCollection = PaymentCollection;
exports.PaymentCollectionSchema = mongoose_1.SchemaFactory.createForClass(PaymentCollection);
