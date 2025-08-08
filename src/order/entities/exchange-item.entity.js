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
exports.OrderExchangeItemSchema = exports.OrderExchangeItem = void 0;
// order-exchange-item.entity.ts
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderExchangeItem = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_exchange_items',
            autoIndex: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "oexcitem_".concat(doc._id.toString());
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
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _note_decorators;
    var _note_initializers = [];
    var _note_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _exchange_decorators;
    var _exchange_initializers = [];
    var _exchange_extraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _item_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderExchangeItem = _classThis = /** @class */ (function () {
        function OrderExchangeItem_1() {
            this.quantity = __runInitializers(this, _quantity_initializers, void 0);
            this.note = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _note_initializers, void 0));
            this.metadata = (__runInitializers(this, _note_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.exchange = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _exchange_initializers, void 0));
            this.item = (__runInitializers(this, _exchange_extraInitializers), __runInitializers(this, _item_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _item_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            // Déclaration explicite pour TypeScript
            this._id = __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderExchangeItem_1;
    }());
    __setFunctionName(_classThis, "OrderExchangeItem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _quantity_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true })];
        _note_decorators = [(0, mongoose_1.Prop)({ type: String, required: false })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, required: false })];
        _exchange_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderExchange',
                required: true,
                index: true,
            })];
        _item_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderLineItem',
                required: true,
                index: true,
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, required: false, index: true })];
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _note_decorators, { kind: "field", name: "note", static: false, private: false, access: { has: function (obj) { return "note" in obj; }, get: function (obj) { return obj.note; }, set: function (obj, value) { obj.note = value; } }, metadata: _metadata }, _note_initializers, _note_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _exchange_decorators, { kind: "field", name: "exchange", static: false, private: false, access: { has: function (obj) { return "exchange" in obj; }, get: function (obj) { return obj.exchange; }, set: function (obj, value) { obj.exchange = value; } }, metadata: _metadata }, _exchange_initializers, _exchange_extraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _item_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderExchangeItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderExchangeItem = _classThis;
}();
exports.OrderExchangeItem = OrderExchangeItem;
exports.OrderExchangeItemSchema = mongoose_1.SchemaFactory.createForClass(OrderExchangeItem);
