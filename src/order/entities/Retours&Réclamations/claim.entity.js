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
exports.OrderClaimSchema = exports.OrderClaim = exports.ClaimType = void 0;
// order-claim.entity.ts
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ClaimType;
(function (ClaimType) {
    ClaimType["REFUND"] = "refund";
    ClaimType["REPLACEMENT"] = "replacement";
})(ClaimType || (exports.ClaimType = ClaimType = {}));
var OrderClaim = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_claims',
            autoIndex: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "claim_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
            id: false, // Désactive le virtual getter 'id' par défaut
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _order_version_decorators;
    var _order_version_initializers = [];
    var _order_version_extraInitializers = [];
    var _display_id_decorators;
    var _display_id_initializers = [];
    var _display_id_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _no_notification_decorators;
    var _no_notification_initializers = [];
    var _no_notification_extraInitializers = [];
    var _refund_amount_decorators;
    var _refund_amount_initializers = [];
    var _refund_amount_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _canceled_at_decorators;
    var _canceled_at_initializers = [];
    var _canceled_at_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var _return_decorators;
    var _return_initializers = [];
    var _return_extraInitializers = [];
    var _additional_items_decorators;
    var _additional_items_initializers = [];
    var _additional_items_extraInitializers = [];
    var _claim_items_decorators;
    var _claim_items_initializers = [];
    var _claim_items_extraInitializers = [];
    var _shipping_methods_decorators;
    var _shipping_methods_initializers = [];
    var _shipping_methods_extraInitializers = [];
    var _transactions_decorators;
    var _transactions_initializers = [];
    var _transactions_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderClaim = _classThis = /** @class */ (function () {
        function OrderClaim_1() {
            this.order_version = __runInitializers(this, _order_version_initializers, void 0);
            this.display_id = (__runInitializers(this, _order_version_extraInitializers), __runInitializers(this, _display_id_initializers, void 0));
            this.type = (__runInitializers(this, _display_id_extraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.no_notification = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _no_notification_initializers, void 0));
            this.refund_amount = (__runInitializers(this, _no_notification_extraInitializers), __runInitializers(this, _refund_amount_initializers, void 0));
            this.created_by = (__runInitializers(this, _refund_amount_extraInitializers), __runInitializers(this, _created_by_initializers, void 0));
            this.canceled_at = (__runInitializers(this, _created_by_extraInitializers), __runInitializers(this, _canceled_at_initializers, void 0));
            this.metadata = (__runInitializers(this, _canceled_at_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.order = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _order_initializers, void 0));
            this.return = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _return_initializers, void 0));
            this.additional_items = (__runInitializers(this, _return_extraInitializers), __runInitializers(this, _additional_items_initializers, void 0));
            this.claim_items = (__runInitializers(this, _additional_items_extraInitializers), __runInitializers(this, _claim_items_initializers, void 0));
            this.shipping_methods = (__runInitializers(this, _claim_items_extraInitializers), __runInitializers(this, _shipping_methods_initializers, void 0));
            this.transactions = (__runInitializers(this, _shipping_methods_extraInitializers), __runInitializers(this, _transactions_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _transactions_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            // Déclaration explicite pour TypeScript
            this._id = __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderClaim_1;
    }());
    __setFunctionName(_classThis, "OrderClaim");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _order_version_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true })];
        _display_id_decorators = [(0, mongoose_1.Prop)({ type: Number, unique: true })];
        _type_decorators = [(0, mongoose_1.Prop)({ type: String, enum: ClaimType, required: true })];
        _no_notification_decorators = [(0, mongoose_1.Prop)({ type: Boolean, required: false })];
        _refund_amount_decorators = [(0, mongoose_1.Prop)({ type: Number, required: false })];
        _created_by_decorators = [(0, mongoose_1.Prop)({ type: String, required: false })];
        _canceled_at_decorators = [(0, mongoose_1.Prop)({ type: Date, required: false })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, required: false })];
        _order_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Order', required: true, index: true })];
        _return_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Return', required: false, index: true })];
        _additional_items_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderClaimItem' }], default: [] })];
        _claim_items_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderClaimItem' }], default: [] })];
        _shipping_methods_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderShipping' }], default: [] })];
        _transactions_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderTransaction' }], default: [] })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, required: false, index: true })];
        __esDecorate(null, null, _order_version_decorators, { kind: "field", name: "order_version", static: false, private: false, access: { has: function (obj) { return "order_version" in obj; }, get: function (obj) { return obj.order_version; }, set: function (obj, value) { obj.order_version = value; } }, metadata: _metadata }, _order_version_initializers, _order_version_extraInitializers);
        __esDecorate(null, null, _display_id_decorators, { kind: "field", name: "display_id", static: false, private: false, access: { has: function (obj) { return "display_id" in obj; }, get: function (obj) { return obj.display_id; }, set: function (obj, value) { obj.display_id = value; } }, metadata: _metadata }, _display_id_initializers, _display_id_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _no_notification_decorators, { kind: "field", name: "no_notification", static: false, private: false, access: { has: function (obj) { return "no_notification" in obj; }, get: function (obj) { return obj.no_notification; }, set: function (obj, value) { obj.no_notification = value; } }, metadata: _metadata }, _no_notification_initializers, _no_notification_extraInitializers);
        __esDecorate(null, null, _refund_amount_decorators, { kind: "field", name: "refund_amount", static: false, private: false, access: { has: function (obj) { return "refund_amount" in obj; }, get: function (obj) { return obj.refund_amount; }, set: function (obj, value) { obj.refund_amount = value; } }, metadata: _metadata }, _refund_amount_initializers, _refund_amount_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _canceled_at_decorators, { kind: "field", name: "canceled_at", static: false, private: false, access: { has: function (obj) { return "canceled_at" in obj; }, get: function (obj) { return obj.canceled_at; }, set: function (obj, value) { obj.canceled_at = value; } }, metadata: _metadata }, _canceled_at_initializers, _canceled_at_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _return_decorators, { kind: "field", name: "return", static: false, private: false, access: { has: function (obj) { return "return" in obj; }, get: function (obj) { return obj.return; }, set: function (obj, value) { obj.return = value; } }, metadata: _metadata }, _return_initializers, _return_extraInitializers);
        __esDecorate(null, null, _additional_items_decorators, { kind: "field", name: "additional_items", static: false, private: false, access: { has: function (obj) { return "additional_items" in obj; }, get: function (obj) { return obj.additional_items; }, set: function (obj, value) { obj.additional_items = value; } }, metadata: _metadata }, _additional_items_initializers, _additional_items_extraInitializers);
        __esDecorate(null, null, _claim_items_decorators, { kind: "field", name: "claim_items", static: false, private: false, access: { has: function (obj) { return "claim_items" in obj; }, get: function (obj) { return obj.claim_items; }, set: function (obj, value) { obj.claim_items = value; } }, metadata: _metadata }, _claim_items_initializers, _claim_items_extraInitializers);
        __esDecorate(null, null, _shipping_methods_decorators, { kind: "field", name: "shipping_methods", static: false, private: false, access: { has: function (obj) { return "shipping_methods" in obj; }, get: function (obj) { return obj.shipping_methods; }, set: function (obj, value) { obj.shipping_methods = value; } }, metadata: _metadata }, _shipping_methods_initializers, _shipping_methods_extraInitializers);
        __esDecorate(null, null, _transactions_decorators, { kind: "field", name: "transactions", static: false, private: false, access: { has: function (obj) { return "transactions" in obj; }, get: function (obj) { return obj.transactions; }, set: function (obj, value) { obj.transactions = value; } }, metadata: _metadata }, _transactions_initializers, _transactions_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderClaim = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderClaim = _classThis;
}();
exports.OrderClaim = OrderClaim;
exports.OrderClaimSchema = mongoose_1.SchemaFactory.createForClass(OrderClaim);
