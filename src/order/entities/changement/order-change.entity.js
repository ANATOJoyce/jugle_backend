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
exports.OrderChangeSchema = exports.OrderChange = exports.OrderChangeStatus = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderChangeStatus;
(function (OrderChangeStatus) {
    OrderChangeStatus["PENDING"] = "pending";
    OrderChangeStatus["CONFIRMED"] = "confirmed";
    OrderChangeStatus["DECLINED"] = "declined";
    OrderChangeStatus["CANCELED"] = "canceled";
})(OrderChangeStatus || (exports.OrderChangeStatus = OrderChangeStatus = {}));
var OrderChange = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_changes',
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "ordch_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _return_id_decorators;
    var _return_id_initializers = [];
    var _return_id_extraInitializers = [];
    var _claim_id_decorators;
    var _claim_id_initializers = [];
    var _claim_id_extraInitializers = [];
    var _exchange_id_decorators;
    var _exchange_id_initializers = [];
    var _exchange_id_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _change_type_decorators;
    var _change_type_initializers = [];
    var _change_type_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _internal_note_decorators;
    var _internal_note_initializers = [];
    var _internal_note_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _requested_by_decorators;
    var _requested_by_initializers = [];
    var _requested_by_extraInitializers = [];
    var _requested_at_decorators;
    var _requested_at_initializers = [];
    var _requested_at_extraInitializers = [];
    var _confirmed_by_decorators;
    var _confirmed_by_initializers = [];
    var _confirmed_by_extraInitializers = [];
    var _confirmed_at_decorators;
    var _confirmed_at_initializers = [];
    var _confirmed_at_extraInitializers = [];
    var _declined_by_decorators;
    var _declined_by_initializers = [];
    var _declined_by_extraInitializers = [];
    var _declined_reason_decorators;
    var _declined_reason_initializers = [];
    var _declined_reason_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _declined_at_decorators;
    var _declined_at_initializers = [];
    var _declined_at_extraInitializers = [];
    var _canceled_by_decorators;
    var _canceled_by_initializers = [];
    var _canceled_by_extraInitializers = [];
    var _canceled_at_decorators;
    var _canceled_at_initializers = [];
    var _canceled_at_extraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var _actions_decorators;
    var _actions_initializers = [];
    var _actions_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderChange = _classThis = /** @class */ (function () {
        function OrderChange_1() {
            this.return_id = __runInitializers(this, _return_id_initializers, void 0);
            this.claim_id = (__runInitializers(this, _return_id_extraInitializers), __runInitializers(this, _claim_id_initializers, void 0));
            this.exchange_id = (__runInitializers(this, _claim_id_extraInitializers), __runInitializers(this, _exchange_id_initializers, void 0));
            this.version = (__runInitializers(this, _exchange_id_extraInitializers), __runInitializers(this, _version_initializers, void 0));
            this.change_type = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _change_type_initializers, void 0));
            this.description = (__runInitializers(this, _change_type_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.status = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.internal_note = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _internal_note_initializers, void 0));
            this.created_by = (__runInitializers(this, _internal_note_extraInitializers), __runInitializers(this, _created_by_initializers, void 0));
            this.requested_by = (__runInitializers(this, _created_by_extraInitializers), __runInitializers(this, _requested_by_initializers, void 0));
            this.requested_at = (__runInitializers(this, _requested_by_extraInitializers), __runInitializers(this, _requested_at_initializers, void 0));
            this.confirmed_by = (__runInitializers(this, _requested_at_extraInitializers), __runInitializers(this, _confirmed_by_initializers, void 0));
            this.confirmed_at = (__runInitializers(this, _confirmed_by_extraInitializers), __runInitializers(this, _confirmed_at_initializers, void 0));
            this.declined_by = (__runInitializers(this, _confirmed_at_extraInitializers), __runInitializers(this, _declined_by_initializers, void 0));
            this.declined_reason = (__runInitializers(this, _declined_by_extraInitializers), __runInitializers(this, _declined_reason_initializers, void 0));
            this.metadata = (__runInitializers(this, _declined_reason_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.declined_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _declined_at_initializers, void 0));
            this.canceled_by = (__runInitializers(this, _declined_at_extraInitializers), __runInitializers(this, _canceled_by_initializers, void 0));
            this.canceled_at = (__runInitializers(this, _canceled_by_extraInitializers), __runInitializers(this, _canceled_at_initializers, void 0));
            this.order = (__runInitializers(this, _canceled_at_extraInitializers), __runInitializers(this, _order_initializers, void 0));
            this.actions = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _actions_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _actions_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderChange_1;
    }());
    __setFunctionName(_classThis, "OrderChange");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _return_id_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _claim_id_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _exchange_id_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _version_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _change_type_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _description_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _status_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: OrderChangeStatus,
                default: OrderChangeStatus.PENDING,
            })];
        _internal_note_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _created_by_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _requested_by_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _requested_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        _confirmed_by_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _confirmed_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        _declined_by_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _declined_reason_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _declined_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        _canceled_by_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _canceled_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        _order_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Order',
                required: true,
            })];
        _actions_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderChangeAction' }],
                default: [],
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        __esDecorate(null, null, _return_id_decorators, { kind: "field", name: "return_id", static: false, private: false, access: { has: function (obj) { return "return_id" in obj; }, get: function (obj) { return obj.return_id; }, set: function (obj, value) { obj.return_id = value; } }, metadata: _metadata }, _return_id_initializers, _return_id_extraInitializers);
        __esDecorate(null, null, _claim_id_decorators, { kind: "field", name: "claim_id", static: false, private: false, access: { has: function (obj) { return "claim_id" in obj; }, get: function (obj) { return obj.claim_id; }, set: function (obj, value) { obj.claim_id = value; } }, metadata: _metadata }, _claim_id_initializers, _claim_id_extraInitializers);
        __esDecorate(null, null, _exchange_id_decorators, { kind: "field", name: "exchange_id", static: false, private: false, access: { has: function (obj) { return "exchange_id" in obj; }, get: function (obj) { return obj.exchange_id; }, set: function (obj, value) { obj.exchange_id = value; } }, metadata: _metadata }, _exchange_id_initializers, _exchange_id_extraInitializers);
        __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
        __esDecorate(null, null, _change_type_decorators, { kind: "field", name: "change_type", static: false, private: false, access: { has: function (obj) { return "change_type" in obj; }, get: function (obj) { return obj.change_type; }, set: function (obj, value) { obj.change_type = value; } }, metadata: _metadata }, _change_type_initializers, _change_type_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _internal_note_decorators, { kind: "field", name: "internal_note", static: false, private: false, access: { has: function (obj) { return "internal_note" in obj; }, get: function (obj) { return obj.internal_note; }, set: function (obj, value) { obj.internal_note = value; } }, metadata: _metadata }, _internal_note_initializers, _internal_note_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _requested_by_decorators, { kind: "field", name: "requested_by", static: false, private: false, access: { has: function (obj) { return "requested_by" in obj; }, get: function (obj) { return obj.requested_by; }, set: function (obj, value) { obj.requested_by = value; } }, metadata: _metadata }, _requested_by_initializers, _requested_by_extraInitializers);
        __esDecorate(null, null, _requested_at_decorators, { kind: "field", name: "requested_at", static: false, private: false, access: { has: function (obj) { return "requested_at" in obj; }, get: function (obj) { return obj.requested_at; }, set: function (obj, value) { obj.requested_at = value; } }, metadata: _metadata }, _requested_at_initializers, _requested_at_extraInitializers);
        __esDecorate(null, null, _confirmed_by_decorators, { kind: "field", name: "confirmed_by", static: false, private: false, access: { has: function (obj) { return "confirmed_by" in obj; }, get: function (obj) { return obj.confirmed_by; }, set: function (obj, value) { obj.confirmed_by = value; } }, metadata: _metadata }, _confirmed_by_initializers, _confirmed_by_extraInitializers);
        __esDecorate(null, null, _confirmed_at_decorators, { kind: "field", name: "confirmed_at", static: false, private: false, access: { has: function (obj) { return "confirmed_at" in obj; }, get: function (obj) { return obj.confirmed_at; }, set: function (obj, value) { obj.confirmed_at = value; } }, metadata: _metadata }, _confirmed_at_initializers, _confirmed_at_extraInitializers);
        __esDecorate(null, null, _declined_by_decorators, { kind: "field", name: "declined_by", static: false, private: false, access: { has: function (obj) { return "declined_by" in obj; }, get: function (obj) { return obj.declined_by; }, set: function (obj, value) { obj.declined_by = value; } }, metadata: _metadata }, _declined_by_initializers, _declined_by_extraInitializers);
        __esDecorate(null, null, _declined_reason_decorators, { kind: "field", name: "declined_reason", static: false, private: false, access: { has: function (obj) { return "declined_reason" in obj; }, get: function (obj) { return obj.declined_reason; }, set: function (obj, value) { obj.declined_reason = value; } }, metadata: _metadata }, _declined_reason_initializers, _declined_reason_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _declined_at_decorators, { kind: "field", name: "declined_at", static: false, private: false, access: { has: function (obj) { return "declined_at" in obj; }, get: function (obj) { return obj.declined_at; }, set: function (obj, value) { obj.declined_at = value; } }, metadata: _metadata }, _declined_at_initializers, _declined_at_extraInitializers);
        __esDecorate(null, null, _canceled_by_decorators, { kind: "field", name: "canceled_by", static: false, private: false, access: { has: function (obj) { return "canceled_by" in obj; }, get: function (obj) { return obj.canceled_by; }, set: function (obj, value) { obj.canceled_by = value; } }, metadata: _metadata }, _canceled_by_initializers, _canceled_by_extraInitializers);
        __esDecorate(null, null, _canceled_at_decorators, { kind: "field", name: "canceled_at", static: false, private: false, access: { has: function (obj) { return "canceled_at" in obj; }, get: function (obj) { return obj.canceled_at; }, set: function (obj, value) { obj.canceled_at = value; } }, metadata: _metadata }, _canceled_at_initializers, _canceled_at_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _actions_decorators, { kind: "field", name: "actions", static: false, private: false, access: { has: function (obj) { return "actions" in obj; }, get: function (obj) { return obj.actions; }, set: function (obj, value) { obj.actions = value; } }, metadata: _metadata }, _actions_initializers, _actions_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderChange = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderChange = _classThis;
}();
exports.OrderChange = OrderChange;
exports.OrderChangeSchema = mongoose_1.SchemaFactory.createForClass(OrderChange);
