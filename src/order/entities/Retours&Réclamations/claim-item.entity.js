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
exports.OrderClaimItemSchema = exports.OrderClaimItem = exports.ClaimReason = void 0;
// order-claim-item.entity.ts
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ClaimReason;
(function (ClaimReason) {
    ClaimReason["MISSING_ITEM"] = "missing_item";
    ClaimReason["WRONG_ITEM"] = "wrong_item";
    ClaimReason["PRODUCTION_FAILURE"] = "production_failure";
    ClaimReason["OTHER"] = "other";
})(ClaimReason || (exports.ClaimReason = ClaimReason = {}));
var OrderClaimItem = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_claim_items',
            autoIndex: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "claitem_".concat(doc._id.toString());
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
    var _reason_decorators;
    var _reason_initializers = [];
    var _reason_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _is_additional_item_decorators;
    var _is_additional_item_initializers = [];
    var _is_additional_item_extraInitializers = [];
    var _note_decorators;
    var _note_initializers = [];
    var _note_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _claim_decorators;
    var _claim_initializers = [];
    var _claim_extraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _item_extraInitializers = [];
    var _images_decorators;
    var _images_initializers = [];
    var _images_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderClaimItem = _classThis = /** @class */ (function () {
        function OrderClaimItem_1() {
            this.reason = __runInitializers(this, _reason_initializers, void 0);
            this.quantity = (__runInitializers(this, _reason_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
            this.is_additional_item = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _is_additional_item_initializers, void 0));
            this.note = (__runInitializers(this, _is_additional_item_extraInitializers), __runInitializers(this, _note_initializers, void 0));
            this.metadata = (__runInitializers(this, _note_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.claim = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _claim_initializers, void 0));
            this.item = (__runInitializers(this, _claim_extraInitializers), __runInitializers(this, _item_initializers, void 0));
            this.images = (__runInitializers(this, _item_extraInitializers), __runInitializers(this, _images_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _images_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            // Déclaration explicite pour TypeScript
            this._id = __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderClaimItem_1;
    }());
    __setFunctionName(_classThis, "OrderClaimItem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _reason_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: ClaimReason,
                required: false,
            })];
        _quantity_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                required: true,
            })];
        _is_additional_item_decorators = [(0, mongoose_1.Prop)({
                type: Boolean,
                default: false,
            })];
        _note_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: false,
            })];
        _metadata_decorators = [(0, mongoose_1.Prop)({
                type: Object,
                required: false,
            })];
        _claim_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderClaim',
                required: true,
                index: true,
            })];
        _item_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderLineItem',
                required: true,
                index: true,
            })];
        _images_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Types.ObjectId, ref: 'OrderClaimItemImage' }],
                default: [],
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({
                type: Date,
                required: false,
                index: true,
            })];
        __esDecorate(null, null, _reason_decorators, { kind: "field", name: "reason", static: false, private: false, access: { has: function (obj) { return "reason" in obj; }, get: function (obj) { return obj.reason; }, set: function (obj, value) { obj.reason = value; } }, metadata: _metadata }, _reason_initializers, _reason_extraInitializers);
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _is_additional_item_decorators, { kind: "field", name: "is_additional_item", static: false, private: false, access: { has: function (obj) { return "is_additional_item" in obj; }, get: function (obj) { return obj.is_additional_item; }, set: function (obj, value) { obj.is_additional_item = value; } }, metadata: _metadata }, _is_additional_item_initializers, _is_additional_item_extraInitializers);
        __esDecorate(null, null, _note_decorators, { kind: "field", name: "note", static: false, private: false, access: { has: function (obj) { return "note" in obj; }, get: function (obj) { return obj.note; }, set: function (obj, value) { obj.note = value; } }, metadata: _metadata }, _note_initializers, _note_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _claim_decorators, { kind: "field", name: "claim", static: false, private: false, access: { has: function (obj) { return "claim" in obj; }, get: function (obj) { return obj.claim; }, set: function (obj, value) { obj.claim = value; } }, metadata: _metadata }, _claim_initializers, _claim_extraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _item_extraInitializers);
        __esDecorate(null, null, _images_decorators, { kind: "field", name: "images", static: false, private: false, access: { has: function (obj) { return "images" in obj; }, get: function (obj) { return obj.images; }, set: function (obj, value) { obj.images = value; } }, metadata: _metadata }, _images_initializers, _images_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderClaimItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderClaimItem = _classThis;
}();
exports.OrderClaimItem = OrderClaimItem;
exports.OrderClaimItemSchema = mongoose_1.SchemaFactory.createForClass(OrderClaimItem);
