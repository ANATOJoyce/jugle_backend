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
exports.OrderSchema = exports.Order = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var order_status_enum_1 = require("../../order-status.enum");
var Order = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'orders',
            toJSON: {
                virtuals: true,
                transform: function (_, ret) {
                    ret.id = ret._id.toString();
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _display_id_decorators;
    var _display_id_initializers = [];
    var _display_id_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _store_decorators;
    var _store_initializers = [];
    var _store_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _shipping_address_decorators;
    var _shipping_address_initializers = [];
    var _shipping_address_extraInitializers = [];
    var _billing_address_decorators;
    var _billing_address_initializers = [];
    var _billing_address_extraInitializers = [];
    var _summaries_decorators;
    var _summaries_initializers = [];
    var _summaries_extraInitializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _items_extraInitializers = [];
    var _shipping_methods_decorators;
    var _shipping_methods_initializers = [];
    var _shipping_methods_extraInitializers = [];
    var _payments_decorators;
    var _payments_initializers = [];
    var _payments_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var Order = _classThis = /** @class */ (function (_super) {
        __extends(Order_1, _super);
        function Order_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.display_id = __runInitializers(_this, _display_id_initializers, void 0);
            _this.status = (__runInitializers(_this, _display_id_extraInitializers), __runInitializers(_this, _status_initializers, void 0));
            _this.currency_code = (__runInitializers(_this, _status_extraInitializers), __runInitializers(_this, _currency_code_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _currency_code_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.store = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _store_initializers, void 0));
            _this.email = (__runInitializers(_this, _store_extraInitializers), __runInitializers(_this, _email_initializers, void 0));
            _this.shipping_address = (__runInitializers(_this, _email_extraInitializers), __runInitializers(_this, _shipping_address_initializers, void 0));
            _this.billing_address = (__runInitializers(_this, _shipping_address_extraInitializers), __runInitializers(_this, _billing_address_initializers, void 0));
            _this.summaries = (__runInitializers(_this, _billing_address_extraInitializers), __runInitializers(_this, _summaries_initializers, void 0)); // ou OrderSummary[]
            _this.items = (__runInitializers(_this, _summaries_extraInitializers), __runInitializers(_this, _items_initializers, void 0)); // ou OrderItem[]
            _this.shipping_methods = (__runInitializers(_this, _items_extraInitializers), __runInitializers(_this, _shipping_methods_initializers, void 0)); // ou OrderShippingMethod[]
            _this.payments = (__runInitializers(_this, _shipping_methods_extraInitializers), __runInitializers(_this, _payments_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _payments_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            _this.total = (__runInitializers(_this, _deleted_at_extraInitializers), __runInitializers(_this, _total_initializers, void 0));
            __runInitializers(_this, _total_extraInitializers);
            return _this;
        }
        return Order_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Order");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _display_id_decorators = [(0, mongoose_1.Prop)({ type: Number, unique: true })];
        _status_decorators = [(0, mongoose_1.Prop)({
                required: true,
                enum: order_status_enum_1.OrderStatus, // Restriction aux valeurs de l'enum OrderStatus
                default: order_status_enum_1.OrderStatus.PENDING // Par défaut, une commande est "pending"
            })];
        _currency_code_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: {} })];
        _store_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Store' })];
        _email_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _shipping_address_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'OrderAddress', default: null })];
        _billing_address_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'OrderAddress', default: null })];
        _summaries_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderSummary' }], default: [] })];
        _items_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderItem' }], default: [] })];
        _shipping_methods_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderShippingMethod' }], default: [] })];
        _payments_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Payment' }], default: [] })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)()];
        _total_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true, default: 0 })];
        __esDecorate(null, null, _display_id_decorators, { kind: "field", name: "display_id", static: false, private: false, access: { has: function (obj) { return "display_id" in obj; }, get: function (obj) { return obj.display_id; }, set: function (obj, value) { obj.display_id = value; } }, metadata: _metadata }, _display_id_initializers, _display_id_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _store_decorators, { kind: "field", name: "store", static: false, private: false, access: { has: function (obj) { return "store" in obj; }, get: function (obj) { return obj.store; }, set: function (obj, value) { obj.store = value; } }, metadata: _metadata }, _store_initializers, _store_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _shipping_address_decorators, { kind: "field", name: "shipping_address", static: false, private: false, access: { has: function (obj) { return "shipping_address" in obj; }, get: function (obj) { return obj.shipping_address; }, set: function (obj, value) { obj.shipping_address = value; } }, metadata: _metadata }, _shipping_address_initializers, _shipping_address_extraInitializers);
        __esDecorate(null, null, _billing_address_decorators, { kind: "field", name: "billing_address", static: false, private: false, access: { has: function (obj) { return "billing_address" in obj; }, get: function (obj) { return obj.billing_address; }, set: function (obj, value) { obj.billing_address = value; } }, metadata: _metadata }, _billing_address_initializers, _billing_address_extraInitializers);
        __esDecorate(null, null, _summaries_decorators, { kind: "field", name: "summaries", static: false, private: false, access: { has: function (obj) { return "summaries" in obj; }, get: function (obj) { return obj.summaries; }, set: function (obj, value) { obj.summaries = value; } }, metadata: _metadata }, _summaries_initializers, _summaries_extraInitializers);
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
        __esDecorate(null, null, _shipping_methods_decorators, { kind: "field", name: "shipping_methods", static: false, private: false, access: { has: function (obj) { return "shipping_methods" in obj; }, get: function (obj) { return obj.shipping_methods; }, set: function (obj, value) { obj.shipping_methods = value; } }, metadata: _metadata }, _shipping_methods_initializers, _shipping_methods_extraInitializers);
        __esDecorate(null, null, _payments_decorators, { kind: "field", name: "payments", static: false, private: false, access: { has: function (obj) { return "payments" in obj; }, get: function (obj) { return obj.payments; }, set: function (obj, value) { obj.payments = value; } }, metadata: _metadata }, _payments_initializers, _payments_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Order = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Order = _classThis;
}();
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
