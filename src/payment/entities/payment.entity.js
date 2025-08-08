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
exports.PaymentSchema = exports.Payment = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Payment = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _provider_id_decorators;
    var _provider_id_initializers = [];
    var _provider_id_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _captured_at_decorators;
    var _captured_at_initializers = [];
    var _captured_at_extraInitializers = [];
    var _canceled_at_decorators;
    var _canceled_at_initializers = [];
    var _canceled_at_extraInitializers = [];
    var _payment_collection_decorators;
    var _payment_collection_initializers = [];
    var _payment_collection_extraInitializers = [];
    var _payment_session_decorators;
    var _payment_session_initializers = [];
    var _payment_session_extraInitializers = [];
    var _refunds_decorators;
    var _refunds_initializers = [];
    var _refunds_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _captures_decorators;
    var _captures_initializers = [];
    var _captures_extraInitializers = [];
    var Payment = _classThis = /** @class */ (function () {
        function Payment_1() {
            this.amount = __runInitializers(this, _amount_initializers, void 0);
            this.currency_code = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _currency_code_initializers, void 0));
            this.provider_id = (__runInitializers(this, _currency_code_extraInitializers), __runInitializers(this, _provider_id_initializers, void 0));
            this.data = (__runInitializers(this, _provider_id_extraInitializers), __runInitializers(this, _data_initializers, void 0));
            this.metadata = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.captured_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _captured_at_initializers, void 0));
            this.canceled_at = (__runInitializers(this, _captured_at_extraInitializers), __runInitializers(this, _canceled_at_initializers, void 0));
            // Relationships
            this.payment_collection = (__runInitializers(this, _canceled_at_extraInitializers), __runInitializers(this, _payment_collection_initializers, void 0));
            this.payment_session = (__runInitializers(this, _payment_collection_extraInitializers), __runInitializers(this, _payment_session_initializers, void 0));
            this.refunds = (__runInitializers(this, _payment_session_extraInitializers), __runInitializers(this, _refunds_initializers, void 0));
            this.status = (__runInitializers(this, _refunds_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.captures = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _captures_initializers, void 0));
            __runInitializers(this, _captures_extraInitializers);
        }
        return Payment_1;
    }());
    __setFunctionName(_classThis, "Payment");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _amount_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Decimal128, required: true })];
        _currency_code_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _provider_id_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _data_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _captured_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _canceled_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _payment_collection_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Schema.Types.ObjectId,
                ref: 'PaymentCollection',
                required: true
            })];
        _payment_session_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Schema.Types.ObjectId,
                ref: 'PaymentSession',
                default: null
            })];
        _refunds_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Refund' }],
                default: []
            })];
        _status_decorators = [(0, mongoose_1.Prop)({ type: String, enum: ['pending', 'captured', 'refunded'], default: 'pending' })];
        _captures_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Capture' }],
                default: []
            })];
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _provider_id_decorators, { kind: "field", name: "provider_id", static: false, private: false, access: { has: function (obj) { return "provider_id" in obj; }, get: function (obj) { return obj.provider_id; }, set: function (obj, value) { obj.provider_id = value; } }, metadata: _metadata }, _provider_id_initializers, _provider_id_extraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _captured_at_decorators, { kind: "field", name: "captured_at", static: false, private: false, access: { has: function (obj) { return "captured_at" in obj; }, get: function (obj) { return obj.captured_at; }, set: function (obj, value) { obj.captured_at = value; } }, metadata: _metadata }, _captured_at_initializers, _captured_at_extraInitializers);
        __esDecorate(null, null, _canceled_at_decorators, { kind: "field", name: "canceled_at", static: false, private: false, access: { has: function (obj) { return "canceled_at" in obj; }, get: function (obj) { return obj.canceled_at; }, set: function (obj, value) { obj.canceled_at = value; } }, metadata: _metadata }, _canceled_at_initializers, _canceled_at_extraInitializers);
        __esDecorate(null, null, _payment_collection_decorators, { kind: "field", name: "payment_collection", static: false, private: false, access: { has: function (obj) { return "payment_collection" in obj; }, get: function (obj) { return obj.payment_collection; }, set: function (obj, value) { obj.payment_collection = value; } }, metadata: _metadata }, _payment_collection_initializers, _payment_collection_extraInitializers);
        __esDecorate(null, null, _payment_session_decorators, { kind: "field", name: "payment_session", static: false, private: false, access: { has: function (obj) { return "payment_session" in obj; }, get: function (obj) { return obj.payment_session; }, set: function (obj, value) { obj.payment_session = value; } }, metadata: _metadata }, _payment_session_initializers, _payment_session_extraInitializers);
        __esDecorate(null, null, _refunds_decorators, { kind: "field", name: "refunds", static: false, private: false, access: { has: function (obj) { return "refunds" in obj; }, get: function (obj) { return obj.refunds; }, set: function (obj, value) { obj.refunds = value; } }, metadata: _metadata }, _refunds_initializers, _refunds_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _captures_decorators, { kind: "field", name: "captures", static: false, private: false, access: { has: function (obj) { return "captures" in obj; }, get: function (obj) { return obj.captures; }, set: function (obj, value) { obj.captures = value; } }, metadata: _metadata }, _captures_initializers, _captures_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Payment = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Payment = _classThis;
}();
exports.Payment = Payment;
exports.PaymentSchema = mongoose_1.SchemaFactory.createForClass(Payment);
