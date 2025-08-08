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
exports.ReturnSchema = exports.Return = exports.ReturnStatus = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ReturnStatus;
(function (ReturnStatus) {
    ReturnStatus["OPEN"] = "open";
    ReturnStatus["REQUESTED"] = "requested";
    ReturnStatus["RECEIVED"] = "received";
    ReturnStatus["CANCELED"] = "canceled";
    ReturnStatus["REQUIRES_ACTION"] = "requires_action";
})(ReturnStatus || (exports.ReturnStatus = ReturnStatus = {}));
var Return = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _order_version_decorators;
    var _order_version_initializers = [];
    var _order_version_extraInitializers = [];
    var _display_id_decorators;
    var _display_id_initializers = [];
    var _display_id_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _location_id_decorators;
    var _location_id_initializers = [];
    var _location_id_extraInitializers = [];
    var _no_notification_decorators;
    var _no_notification_initializers = [];
    var _no_notification_extraInitializers = [];
    var _refund_amount_decorators;
    var _refund_amount_initializers = [];
    var _refund_amount_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _requested_at_decorators;
    var _requested_at_initializers = [];
    var _requested_at_extraInitializers = [];
    var _received_at_decorators;
    var _received_at_initializers = [];
    var _received_at_extraInitializers = [];
    var _canceled_at_decorators;
    var _canceled_at_initializers = [];
    var _canceled_at_extraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var _exchange_decorators;
    var _exchange_initializers = [];
    var _exchange_extraInitializers = [];
    var _claim_decorators;
    var _claim_initializers = [];
    var _claim_extraInitializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _items_extraInitializers = [];
    var _shipping_methods_decorators;
    var _shipping_methods_initializers = [];
    var _shipping_methods_extraInitializers = [];
    var _transactions_decorators;
    var _transactions_initializers = [];
    var _transactions_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var Return = _classThis = /** @class */ (function (_super) {
        __extends(Return_1, _super);
        function Return_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.order_version = __runInitializers(_this, _order_version_initializers, void 0);
            _this.display_id = (__runInitializers(_this, _order_version_extraInitializers), __runInitializers(_this, _display_id_initializers, void 0));
            _this.status = (__runInitializers(_this, _display_id_extraInitializers), __runInitializers(_this, _status_initializers, void 0));
            _this.location_id = (__runInitializers(_this, _status_extraInitializers), __runInitializers(_this, _location_id_initializers, void 0));
            _this.no_notification = (__runInitializers(_this, _location_id_extraInitializers), __runInitializers(_this, _no_notification_initializers, void 0));
            _this.refund_amount = (__runInitializers(_this, _no_notification_extraInitializers), __runInitializers(_this, _refund_amount_initializers, void 0));
            _this.created_by = (__runInitializers(_this, _refund_amount_extraInitializers), __runInitializers(_this, _created_by_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _created_by_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.requested_at = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _requested_at_initializers, void 0));
            _this.received_at = (__runInitializers(_this, _requested_at_extraInitializers), __runInitializers(_this, _received_at_initializers, void 0));
            _this.canceled_at = (__runInitializers(_this, _received_at_extraInitializers), __runInitializers(_this, _canceled_at_initializers, void 0));
            _this.order = (__runInitializers(_this, _canceled_at_extraInitializers), __runInitializers(_this, _order_initializers, void 0));
            _this.exchange = (__runInitializers(_this, _order_extraInitializers), __runInitializers(_this, _exchange_initializers, void 0));
            _this.claim = (__runInitializers(_this, _exchange_extraInitializers), __runInitializers(_this, _claim_initializers, void 0));
            _this.items = (__runInitializers(_this, _claim_extraInitializers), __runInitializers(_this, _items_initializers, void 0));
            _this.shipping_methods = (__runInitializers(_this, _items_extraInitializers), __runInitializers(_this, _shipping_methods_initializers, void 0));
            _this.transactions = (__runInitializers(_this, _shipping_methods_extraInitializers), __runInitializers(_this, _transactions_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _transactions_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            __runInitializers(_this, _deleted_at_extraInitializers);
            return _this;
        }
        return Return_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Return");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _order_version_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true })];
        _display_id_decorators = [(0, mongoose_1.Prop)({ type: Number, unique: true })];
        _status_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: Object.values(ReturnStatus),
                default: ReturnStatus.OPEN
            })];
        _location_id_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId })];
        _no_notification_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: null })];
        _refund_amount_decorators = [(0, mongoose_1.Prop)({ type: Number, default: null })];
        _created_by_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _requested_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _received_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _canceled_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _order_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'Order', required: true })];
        _exchange_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'OrderExchange', default: null })];
        _claim_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'OrderClaim', default: null })];
        _items_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.SchemaTypes.ObjectId, ref: 'ReturnItem' }] })];
        _shipping_methods_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.SchemaTypes.ObjectId, ref: 'OrderShipping' }] })];
        _transactions_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.SchemaTypes.ObjectId, ref: 'OrderTransaction' }] })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _order_version_decorators, { kind: "field", name: "order_version", static: false, private: false, access: { has: function (obj) { return "order_version" in obj; }, get: function (obj) { return obj.order_version; }, set: function (obj, value) { obj.order_version = value; } }, metadata: _metadata }, _order_version_initializers, _order_version_extraInitializers);
        __esDecorate(null, null, _display_id_decorators, { kind: "field", name: "display_id", static: false, private: false, access: { has: function (obj) { return "display_id" in obj; }, get: function (obj) { return obj.display_id; }, set: function (obj, value) { obj.display_id = value; } }, metadata: _metadata }, _display_id_initializers, _display_id_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _location_id_decorators, { kind: "field", name: "location_id", static: false, private: false, access: { has: function (obj) { return "location_id" in obj; }, get: function (obj) { return obj.location_id; }, set: function (obj, value) { obj.location_id = value; } }, metadata: _metadata }, _location_id_initializers, _location_id_extraInitializers);
        __esDecorate(null, null, _no_notification_decorators, { kind: "field", name: "no_notification", static: false, private: false, access: { has: function (obj) { return "no_notification" in obj; }, get: function (obj) { return obj.no_notification; }, set: function (obj, value) { obj.no_notification = value; } }, metadata: _metadata }, _no_notification_initializers, _no_notification_extraInitializers);
        __esDecorate(null, null, _refund_amount_decorators, { kind: "field", name: "refund_amount", static: false, private: false, access: { has: function (obj) { return "refund_amount" in obj; }, get: function (obj) { return obj.refund_amount; }, set: function (obj, value) { obj.refund_amount = value; } }, metadata: _metadata }, _refund_amount_initializers, _refund_amount_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _requested_at_decorators, { kind: "field", name: "requested_at", static: false, private: false, access: { has: function (obj) { return "requested_at" in obj; }, get: function (obj) { return obj.requested_at; }, set: function (obj, value) { obj.requested_at = value; } }, metadata: _metadata }, _requested_at_initializers, _requested_at_extraInitializers);
        __esDecorate(null, null, _received_at_decorators, { kind: "field", name: "received_at", static: false, private: false, access: { has: function (obj) { return "received_at" in obj; }, get: function (obj) { return obj.received_at; }, set: function (obj, value) { obj.received_at = value; } }, metadata: _metadata }, _received_at_initializers, _received_at_extraInitializers);
        __esDecorate(null, null, _canceled_at_decorators, { kind: "field", name: "canceled_at", static: false, private: false, access: { has: function (obj) { return "canceled_at" in obj; }, get: function (obj) { return obj.canceled_at; }, set: function (obj, value) { obj.canceled_at = value; } }, metadata: _metadata }, _canceled_at_initializers, _canceled_at_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _exchange_decorators, { kind: "field", name: "exchange", static: false, private: false, access: { has: function (obj) { return "exchange" in obj; }, get: function (obj) { return obj.exchange; }, set: function (obj, value) { obj.exchange = value; } }, metadata: _metadata }, _exchange_initializers, _exchange_extraInitializers);
        __esDecorate(null, null, _claim_decorators, { kind: "field", name: "claim", static: false, private: false, access: { has: function (obj) { return "claim" in obj; }, get: function (obj) { return obj.claim; }, set: function (obj, value) { obj.claim = value; } }, metadata: _metadata }, _claim_initializers, _claim_extraInitializers);
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
        __esDecorate(null, null, _shipping_methods_decorators, { kind: "field", name: "shipping_methods", static: false, private: false, access: { has: function (obj) { return "shipping_methods" in obj; }, get: function (obj) { return obj.shipping_methods; }, set: function (obj, value) { obj.shipping_methods = value; } }, metadata: _metadata }, _shipping_methods_initializers, _shipping_methods_extraInitializers);
        __esDecorate(null, null, _transactions_decorators, { kind: "field", name: "transactions", static: false, private: false, access: { has: function (obj) { return "transactions" in obj; }, get: function (obj) { return obj.transactions; }, set: function (obj, value) { obj.transactions = value; } }, metadata: _metadata }, _transactions_initializers, _transactions_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Return = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Return = _classThis;
}();
exports.Return = Return;
exports.ReturnSchema = mongoose_1.SchemaFactory.createForClass(Return);
