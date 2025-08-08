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
exports.OrderChangeActionSchema = exports.OrderChangeAction = void 0;
// order-change-action.entity.ts
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderChangeAction = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true, // Adds createdAt and updatedAt fields
            toJSON: { virtuals: true },
            toObject: { virtuals: true },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _order_id_decorators;
    var _order_id_initializers = [];
    var _order_id_extraInitializers = [];
    var _return_id_decorators;
    var _return_id_initializers = [];
    var _return_id_extraInitializers = [];
    var _claim_id_decorators;
    var _claim_id_initializers = [];
    var _claim_id_extraInitializers = [];
    var _exchange_id_decorators;
    var _exchange_id_initializers = [];
    var _exchange_id_extraInitializers = [];
    var _ordering_decorators;
    var _ordering_initializers = [];
    var _ordering_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _reference_decorators;
    var _reference_initializers = [];
    var _reference_extraInitializers = [];
    var _reference_id_decorators;
    var _reference_id_initializers = [];
    var _reference_id_extraInitializers = [];
    var _action_decorators;
    var _action_initializers = [];
    var _action_extraInitializers = [];
    var _details_decorators;
    var _details_initializers = [];
    var _details_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _internal_note_decorators;
    var _internal_note_initializers = [];
    var _internal_note_extraInitializers = [];
    var _applied_decorators;
    var _applied_initializers = [];
    var _applied_extraInitializers = [];
    var _order_change_decorators;
    var _order_change_initializers = [];
    var _order_change_extraInitializers = [];
    var _deletedAt_decorators;
    var _deletedAt_initializers = [];
    var _deletedAt_extraInitializers = [];
    var OrderChangeAction = _classThis = /** @class */ (function () {
        function OrderChangeAction_1() {
            this.order_id = __runInitializers(this, _order_id_initializers, void 0);
            this.return_id = (__runInitializers(this, _order_id_extraInitializers), __runInitializers(this, _return_id_initializers, void 0));
            this.claim_id = (__runInitializers(this, _return_id_extraInitializers), __runInitializers(this, _claim_id_initializers, void 0));
            this.exchange_id = (__runInitializers(this, _claim_id_extraInitializers), __runInitializers(this, _exchange_id_initializers, void 0));
            this.ordering = (__runInitializers(this, _exchange_id_extraInitializers), __runInitializers(this, _ordering_initializers, void 0));
            this.version = (__runInitializers(this, _ordering_extraInitializers), __runInitializers(this, _version_initializers, void 0));
            this.reference = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _reference_initializers, void 0));
            this.reference_id = (__runInitializers(this, _reference_extraInitializers), __runInitializers(this, _reference_id_initializers, void 0));
            this.action = (__runInitializers(this, _reference_id_extraInitializers), __runInitializers(this, _action_initializers, void 0));
            this.details = (__runInitializers(this, _action_extraInitializers), __runInitializers(this, _details_initializers, void 0));
            this.amount = (__runInitializers(this, _details_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.internal_note = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _internal_note_initializers, void 0));
            this.applied = (__runInitializers(this, _internal_note_extraInitializers), __runInitializers(this, _applied_initializers, void 0));
            this.order_change = (__runInitializers(this, _applied_extraInitializers), __runInitializers(this, _order_change_initializers, void 0));
            // Soft delete support
            this.deletedAt = (__runInitializers(this, _order_change_extraInitializers), __runInitializers(this, _deletedAt_initializers, void 0));
            __runInitializers(this, _deletedAt_extraInitializers);
        }
        return OrderChangeAction_1;
    }());
    __setFunctionName(_classThis, "OrderChangeAction");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _order_id_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Order', required: true })];
        _return_id_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Return' })];
        _claim_id_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Claim' })];
        _exchange_id_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Exchange' })];
        _ordering_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _version_decorators = [(0, mongoose_1.Prop)()];
        _reference_decorators = [(0, mongoose_1.Prop)()];
        _reference_id_decorators = [(0, mongoose_1.Prop)()];
        _action_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _details_decorators = [(0, mongoose_1.Prop)({ type: Object, default: {} })];
        _amount_decorators = [(0, mongoose_1.Prop)()];
        _internal_note_decorators = [(0, mongoose_1.Prop)()];
        _applied_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _order_change_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'OrderChange' })];
        _deletedAt_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _order_id_decorators, { kind: "field", name: "order_id", static: false, private: false, access: { has: function (obj) { return "order_id" in obj; }, get: function (obj) { return obj.order_id; }, set: function (obj, value) { obj.order_id = value; } }, metadata: _metadata }, _order_id_initializers, _order_id_extraInitializers);
        __esDecorate(null, null, _return_id_decorators, { kind: "field", name: "return_id", static: false, private: false, access: { has: function (obj) { return "return_id" in obj; }, get: function (obj) { return obj.return_id; }, set: function (obj, value) { obj.return_id = value; } }, metadata: _metadata }, _return_id_initializers, _return_id_extraInitializers);
        __esDecorate(null, null, _claim_id_decorators, { kind: "field", name: "claim_id", static: false, private: false, access: { has: function (obj) { return "claim_id" in obj; }, get: function (obj) { return obj.claim_id; }, set: function (obj, value) { obj.claim_id = value; } }, metadata: _metadata }, _claim_id_initializers, _claim_id_extraInitializers);
        __esDecorate(null, null, _exchange_id_decorators, { kind: "field", name: "exchange_id", static: false, private: false, access: { has: function (obj) { return "exchange_id" in obj; }, get: function (obj) { return obj.exchange_id; }, set: function (obj, value) { obj.exchange_id = value; } }, metadata: _metadata }, _exchange_id_initializers, _exchange_id_extraInitializers);
        __esDecorate(null, null, _ordering_decorators, { kind: "field", name: "ordering", static: false, private: false, access: { has: function (obj) { return "ordering" in obj; }, get: function (obj) { return obj.ordering; }, set: function (obj, value) { obj.ordering = value; } }, metadata: _metadata }, _ordering_initializers, _ordering_extraInitializers);
        __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
        __esDecorate(null, null, _reference_decorators, { kind: "field", name: "reference", static: false, private: false, access: { has: function (obj) { return "reference" in obj; }, get: function (obj) { return obj.reference; }, set: function (obj, value) { obj.reference = value; } }, metadata: _metadata }, _reference_initializers, _reference_extraInitializers);
        __esDecorate(null, null, _reference_id_decorators, { kind: "field", name: "reference_id", static: false, private: false, access: { has: function (obj) { return "reference_id" in obj; }, get: function (obj) { return obj.reference_id; }, set: function (obj, value) { obj.reference_id = value; } }, metadata: _metadata }, _reference_id_initializers, _reference_id_extraInitializers);
        __esDecorate(null, null, _action_decorators, { kind: "field", name: "action", static: false, private: false, access: { has: function (obj) { return "action" in obj; }, get: function (obj) { return obj.action; }, set: function (obj, value) { obj.action = value; } }, metadata: _metadata }, _action_initializers, _action_extraInitializers);
        __esDecorate(null, null, _details_decorators, { kind: "field", name: "details", static: false, private: false, access: { has: function (obj) { return "details" in obj; }, get: function (obj) { return obj.details; }, set: function (obj, value) { obj.details = value; } }, metadata: _metadata }, _details_initializers, _details_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _internal_note_decorators, { kind: "field", name: "internal_note", static: false, private: false, access: { has: function (obj) { return "internal_note" in obj; }, get: function (obj) { return obj.internal_note; }, set: function (obj, value) { obj.internal_note = value; } }, metadata: _metadata }, _internal_note_initializers, _internal_note_extraInitializers);
        __esDecorate(null, null, _applied_decorators, { kind: "field", name: "applied", static: false, private: false, access: { has: function (obj) { return "applied" in obj; }, get: function (obj) { return obj.applied; }, set: function (obj, value) { obj.applied = value; } }, metadata: _metadata }, _applied_initializers, _applied_extraInitializers);
        __esDecorate(null, null, _order_change_decorators, { kind: "field", name: "order_change", static: false, private: false, access: { has: function (obj) { return "order_change" in obj; }, get: function (obj) { return obj.order_change; }, set: function (obj, value) { obj.order_change = value; } }, metadata: _metadata }, _order_change_initializers, _order_change_extraInitializers);
        __esDecorate(null, null, _deletedAt_decorators, { kind: "field", name: "deletedAt", static: false, private: false, access: { has: function (obj) { return "deletedAt" in obj; }, get: function (obj) { return obj.deletedAt; }, set: function (obj, value) { obj.deletedAt = value; } }, metadata: _metadata }, _deletedAt_initializers, _deletedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderChangeAction = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderChangeAction = _classThis;
}();
exports.OrderChangeAction = OrderChangeAction;
exports.OrderChangeActionSchema = mongoose_1.SchemaFactory.createForClass(OrderChangeAction);
