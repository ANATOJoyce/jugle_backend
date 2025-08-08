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
exports.FulfillmentItemSchema = exports.FulfillmentItem = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var FulfillmentItem = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: false,
            _id: false
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _sku_decorators;
    var _sku_initializers = [];
    var _sku_extraInitializers = [];
    var _barcode_decorators;
    var _barcode_initializers = [];
    var _barcode_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _line_item_id_decorators;
    var _line_item_id_initializers = [];
    var _line_item_id_extraInitializers = [];
    var _inventory_item_id_decorators;
    var _inventory_item_id_initializers = [];
    var _inventory_item_id_extraInitializers = [];
    var _fulfillment_decorators;
    var _fulfillment_initializers = [];
    var _fulfillment_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var FulfillmentItem = _classThis = /** @class */ (function () {
        function FulfillmentItem_1() {
            this.id = __runInitializers(this, _id_initializers, void 0); // Auto-generated with "fulit" prefix
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.sku = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _sku_initializers, void 0));
            this.barcode = (__runInitializers(this, _sku_extraInitializers), __runInitializers(this, _barcode_initializers, void 0));
            this.quantity = (__runInitializers(this, _barcode_extraInitializers), __runInitializers(this, _quantity_initializers, void 0)); // bigNumber becomes Number with validation
            this.line_item_id = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _line_item_id_initializers, void 0));
            this.inventory_item_id = (__runInitializers(this, _line_item_id_extraInitializers), __runInitializers(this, _inventory_item_id_initializers, void 0));
            this.fulfillment = (__runInitializers(this, _inventory_item_id_extraInitializers), __runInitializers(this, _fulfillment_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _fulfillment_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return FulfillmentItem_1;
    }());
    __setFunctionName(_classThis, "FulfillmentItem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                default: function () { return "fulit_".concat(Math.random().toString(36).substring(2, 11)); }
            })];
        _title_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _sku_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _barcode_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _quantity_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                required: true,
                validate: {
                    validator: function (v) { return Number.isFinite(v) && v > 0; },
                    message: 'Quantity must be a positive number'
                }
            })];
        _line_item_id_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _inventory_item_id_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _fulfillment_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Fulfillment',
                required: true
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _sku_decorators, { kind: "field", name: "sku", static: false, private: false, access: { has: function (obj) { return "sku" in obj; }, get: function (obj) { return obj.sku; }, set: function (obj, value) { obj.sku = value; } }, metadata: _metadata }, _sku_initializers, _sku_extraInitializers);
        __esDecorate(null, null, _barcode_decorators, { kind: "field", name: "barcode", static: false, private: false, access: { has: function (obj) { return "barcode" in obj; }, get: function (obj) { return obj.barcode; }, set: function (obj, value) { obj.barcode = value; } }, metadata: _metadata }, _barcode_initializers, _barcode_extraInitializers);
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _line_item_id_decorators, { kind: "field", name: "line_item_id", static: false, private: false, access: { has: function (obj) { return "line_item_id" in obj; }, get: function (obj) { return obj.line_item_id; }, set: function (obj, value) { obj.line_item_id = value; } }, metadata: _metadata }, _line_item_id_initializers, _line_item_id_extraInitializers);
        __esDecorate(null, null, _inventory_item_id_decorators, { kind: "field", name: "inventory_item_id", static: false, private: false, access: { has: function (obj) { return "inventory_item_id" in obj; }, get: function (obj) { return obj.inventory_item_id; }, set: function (obj, value) { obj.inventory_item_id = value; } }, metadata: _metadata }, _inventory_item_id_initializers, _inventory_item_id_extraInitializers);
        __esDecorate(null, null, _fulfillment_decorators, { kind: "field", name: "fulfillment", static: false, private: false, access: { has: function (obj) { return "fulfillment" in obj; }, get: function (obj) { return obj.fulfillment; }, set: function (obj, value) { obj.fulfillment = value; } }, metadata: _metadata }, _fulfillment_initializers, _fulfillment_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FulfillmentItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FulfillmentItem = _classThis;
}();
exports.FulfillmentItem = FulfillmentItem;
exports.FulfillmentItemSchema = mongoose_1.SchemaFactory.createForClass(FulfillmentItem);
