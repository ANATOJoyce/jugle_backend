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
exports.ReturnItemSchema = exports.ReturnItem = void 0;
// return-item.entity.ts
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ReturnItem = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'return_items',
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "retitem_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _received_quantity_decorators;
    var _received_quantity_initializers = [];
    var _received_quantity_extraInitializers = [];
    var _damaged_quantity_decorators;
    var _damaged_quantity_initializers = [];
    var _damaged_quantity_extraInitializers = [];
    var _note_decorators;
    var _note_initializers = [];
    var _note_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _reason_decorators;
    var _reason_initializers = [];
    var _reason_extraInitializers = [];
    var _return_decorators;
    var _return_initializers = [];
    var _return_extraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _item_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var ReturnItem = _classThis = /** @class */ (function () {
        function ReturnItem_1() {
            this.quantity = __runInitializers(this, _quantity_initializers, void 0);
            this.received_quantity = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _received_quantity_initializers, void 0));
            this.damaged_quantity = (__runInitializers(this, _received_quantity_extraInitializers), __runInitializers(this, _damaged_quantity_initializers, void 0));
            this.note = (__runInitializers(this, _damaged_quantity_extraInitializers), __runInitializers(this, _note_initializers, void 0));
            this.metadata = (__runInitializers(this, _note_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.reason = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _reason_initializers, void 0));
            this.return = (__runInitializers(this, _reason_extraInitializers), __runInitializers(this, _return_initializers, void 0));
            this.item = (__runInitializers(this, _return_extraInitializers), __runInitializers(this, _item_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _item_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return ReturnItem_1;
    }());
    __setFunctionName(_classThis, "ReturnItem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _quantity_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _received_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _damaged_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _note_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _reason_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'ReturnReason',
            })];
        _return_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Return',
                required: true,
            })];
        _item_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderLineItem',
                required: true,
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _received_quantity_decorators, { kind: "field", name: "received_quantity", static: false, private: false, access: { has: function (obj) { return "received_quantity" in obj; }, get: function (obj) { return obj.received_quantity; }, set: function (obj, value) { obj.received_quantity = value; } }, metadata: _metadata }, _received_quantity_initializers, _received_quantity_extraInitializers);
        __esDecorate(null, null, _damaged_quantity_decorators, { kind: "field", name: "damaged_quantity", static: false, private: false, access: { has: function (obj) { return "damaged_quantity" in obj; }, get: function (obj) { return obj.damaged_quantity; }, set: function (obj, value) { obj.damaged_quantity = value; } }, metadata: _metadata }, _damaged_quantity_initializers, _damaged_quantity_extraInitializers);
        __esDecorate(null, null, _note_decorators, { kind: "field", name: "note", static: false, private: false, access: { has: function (obj) { return "note" in obj; }, get: function (obj) { return obj.note; }, set: function (obj, value) { obj.note = value; } }, metadata: _metadata }, _note_initializers, _note_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _reason_decorators, { kind: "field", name: "reason", static: false, private: false, access: { has: function (obj) { return "reason" in obj; }, get: function (obj) { return obj.reason; }, set: function (obj, value) { obj.reason = value; } }, metadata: _metadata }, _reason_initializers, _reason_extraInitializers);
        __esDecorate(null, null, _return_decorators, { kind: "field", name: "return", static: false, private: false, access: { has: function (obj) { return "return" in obj; }, get: function (obj) { return obj.return; }, set: function (obj, value) { obj.return = value; } }, metadata: _metadata }, _return_initializers, _return_extraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _item_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReturnItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReturnItem = _classThis;
}();
exports.ReturnItem = ReturnItem;
exports.ReturnItemSchema = mongoose_1.SchemaFactory.createForClass(ReturnItem);
