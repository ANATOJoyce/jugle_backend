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
exports.OrderItemSchema = exports.OrderItem = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderItem = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_items',
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "orditem_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _unit_price_decorators;
    var _unit_price_initializers = [];
    var _unit_price_extraInitializers = [];
    var _compare_at_unit_price_decorators;
    var _compare_at_unit_price_initializers = [];
    var _compare_at_unit_price_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _fulfilled_quantity_decorators;
    var _fulfilled_quantity_initializers = [];
    var _fulfilled_quantity_extraInitializers = [];
    var _delivered_quantity_decorators;
    var _delivered_quantity_initializers = [];
    var _delivered_quantity_extraInitializers = [];
    var _shipped_quantity_decorators;
    var _shipped_quantity_initializers = [];
    var _shipped_quantity_extraInitializers = [];
    var _return_requested_quantity_decorators;
    var _return_requested_quantity_initializers = [];
    var _return_requested_quantity_extraInitializers = [];
    var _return_received_quantity_decorators;
    var _return_received_quantity_initializers = [];
    var _return_received_quantity_extraInitializers = [];
    var _return_dismissed_quantity_decorators;
    var _return_dismissed_quantity_initializers = [];
    var _return_dismissed_quantity_extraInitializers = [];
    var _written_off_quantity_decorators;
    var _written_off_quantity_initializers = [];
    var _written_off_quantity_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _item_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderItem = _classThis = /** @class */ (function () {
        function OrderItem_1() {
            this.version = __runInitializers(this, _version_initializers, void 0);
            this.unit_price = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _unit_price_initializers, void 0));
            this.compare_at_unit_price = (__runInitializers(this, _unit_price_extraInitializers), __runInitializers(this, _compare_at_unit_price_initializers, void 0));
            this.quantity = (__runInitializers(this, _compare_at_unit_price_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
            this.fulfilled_quantity = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _fulfilled_quantity_initializers, void 0));
            this.delivered_quantity = (__runInitializers(this, _fulfilled_quantity_extraInitializers), __runInitializers(this, _delivered_quantity_initializers, void 0));
            this.shipped_quantity = (__runInitializers(this, _delivered_quantity_extraInitializers), __runInitializers(this, _shipped_quantity_initializers, void 0));
            this.return_requested_quantity = (__runInitializers(this, _shipped_quantity_extraInitializers), __runInitializers(this, _return_requested_quantity_initializers, void 0));
            this.return_received_quantity = (__runInitializers(this, _return_requested_quantity_extraInitializers), __runInitializers(this, _return_received_quantity_initializers, void 0));
            this.return_dismissed_quantity = (__runInitializers(this, _return_received_quantity_extraInitializers), __runInitializers(this, _return_dismissed_quantity_initializers, void 0));
            this.written_off_quantity = (__runInitializers(this, _return_dismissed_quantity_extraInitializers), __runInitializers(this, _written_off_quantity_initializers, void 0));
            this.metadata = (__runInitializers(this, _written_off_quantity_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.order = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _order_initializers, void 0));
            this.item = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _item_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _item_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderItem_1;
    }());
    __setFunctionName(_classThis, "OrderItem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _version_decorators = [(0, mongoose_1.Prop)({ default: 1 })];
        _unit_price_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _compare_at_unit_price_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _quantity_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _fulfilled_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _delivered_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _shipped_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _return_requested_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _return_received_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _return_dismissed_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _written_off_quantity_decorators = [(0, mongoose_1.Prop)({ type: String, default: '0' })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _order_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Order',
                required: true,
            })];
        _item_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderLineItem',
                required: true,
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
        __esDecorate(null, null, _unit_price_decorators, { kind: "field", name: "unit_price", static: false, private: false, access: { has: function (obj) { return "unit_price" in obj; }, get: function (obj) { return obj.unit_price; }, set: function (obj, value) { obj.unit_price = value; } }, metadata: _metadata }, _unit_price_initializers, _unit_price_extraInitializers);
        __esDecorate(null, null, _compare_at_unit_price_decorators, { kind: "field", name: "compare_at_unit_price", static: false, private: false, access: { has: function (obj) { return "compare_at_unit_price" in obj; }, get: function (obj) { return obj.compare_at_unit_price; }, set: function (obj, value) { obj.compare_at_unit_price = value; } }, metadata: _metadata }, _compare_at_unit_price_initializers, _compare_at_unit_price_extraInitializers);
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _fulfilled_quantity_decorators, { kind: "field", name: "fulfilled_quantity", static: false, private: false, access: { has: function (obj) { return "fulfilled_quantity" in obj; }, get: function (obj) { return obj.fulfilled_quantity; }, set: function (obj, value) { obj.fulfilled_quantity = value; } }, metadata: _metadata }, _fulfilled_quantity_initializers, _fulfilled_quantity_extraInitializers);
        __esDecorate(null, null, _delivered_quantity_decorators, { kind: "field", name: "delivered_quantity", static: false, private: false, access: { has: function (obj) { return "delivered_quantity" in obj; }, get: function (obj) { return obj.delivered_quantity; }, set: function (obj, value) { obj.delivered_quantity = value; } }, metadata: _metadata }, _delivered_quantity_initializers, _delivered_quantity_extraInitializers);
        __esDecorate(null, null, _shipped_quantity_decorators, { kind: "field", name: "shipped_quantity", static: false, private: false, access: { has: function (obj) { return "shipped_quantity" in obj; }, get: function (obj) { return obj.shipped_quantity; }, set: function (obj, value) { obj.shipped_quantity = value; } }, metadata: _metadata }, _shipped_quantity_initializers, _shipped_quantity_extraInitializers);
        __esDecorate(null, null, _return_requested_quantity_decorators, { kind: "field", name: "return_requested_quantity", static: false, private: false, access: { has: function (obj) { return "return_requested_quantity" in obj; }, get: function (obj) { return obj.return_requested_quantity; }, set: function (obj, value) { obj.return_requested_quantity = value; } }, metadata: _metadata }, _return_requested_quantity_initializers, _return_requested_quantity_extraInitializers);
        __esDecorate(null, null, _return_received_quantity_decorators, { kind: "field", name: "return_received_quantity", static: false, private: false, access: { has: function (obj) { return "return_received_quantity" in obj; }, get: function (obj) { return obj.return_received_quantity; }, set: function (obj, value) { obj.return_received_quantity = value; } }, metadata: _metadata }, _return_received_quantity_initializers, _return_received_quantity_extraInitializers);
        __esDecorate(null, null, _return_dismissed_quantity_decorators, { kind: "field", name: "return_dismissed_quantity", static: false, private: false, access: { has: function (obj) { return "return_dismissed_quantity" in obj; }, get: function (obj) { return obj.return_dismissed_quantity; }, set: function (obj, value) { obj.return_dismissed_quantity = value; } }, metadata: _metadata }, _return_dismissed_quantity_initializers, _return_dismissed_quantity_extraInitializers);
        __esDecorate(null, null, _written_off_quantity_decorators, { kind: "field", name: "written_off_quantity", static: false, private: false, access: { has: function (obj) { return "written_off_quantity" in obj; }, get: function (obj) { return obj.written_off_quantity; }, set: function (obj, value) { obj.written_off_quantity = value; } }, metadata: _metadata }, _written_off_quantity_initializers, _written_off_quantity_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _item_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderItem = _classThis;
}();
exports.OrderItem = OrderItem;
exports.OrderItemSchema = mongoose_1.SchemaFactory.createForClass(OrderItem);
