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
exports.FulfillmentSchema = exports.Fulfillment = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Fulfillment = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                }
            }
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _location_id_decorators;
    var _location_id_initializers = [];
    var _location_id_extraInitializers = [];
    var _packed_at_decorators;
    var _packed_at_initializers = [];
    var _packed_at_extraInitializers = [];
    var _shipped_at_decorators;
    var _shipped_at_initializers = [];
    var _shipped_at_extraInitializers = [];
    var _marked_shipped_by_decorators;
    var _marked_shipped_by_initializers = [];
    var _marked_shipped_by_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _delivered_at_decorators;
    var _delivered_at_initializers = [];
    var _delivered_at_extraInitializers = [];
    var _canceled_at_decorators;
    var _canceled_at_initializers = [];
    var _canceled_at_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _requires_shipping_decorators;
    var _requires_shipping_initializers = [];
    var _requires_shipping_extraInitializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _items_extraInitializers = [];
    var _labels_decorators;
    var _labels_initializers = [];
    var _labels_extraInitializers = [];
    var _provider_decorators;
    var _provider_initializers = [];
    var _provider_extraInitializers = [];
    var _shipping_option_decorators;
    var _shipping_option_initializers = [];
    var _shipping_option_extraInitializers = [];
    var _delivery_address_decorators;
    var _delivery_address_initializers = [];
    var _delivery_address_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var Fulfillment = _classThis = /** @class */ (function () {
        function Fulfillment_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.location_id = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _location_id_initializers, void 0));
            this.packed_at = (__runInitializers(this, _location_id_extraInitializers), __runInitializers(this, _packed_at_initializers, void 0));
            this.shipped_at = (__runInitializers(this, _packed_at_extraInitializers), __runInitializers(this, _shipped_at_initializers, void 0));
            this.marked_shipped_by = (__runInitializers(this, _shipped_at_extraInitializers), __runInitializers(this, _marked_shipped_by_initializers, void 0));
            this.created_by = (__runInitializers(this, _marked_shipped_by_extraInitializers), __runInitializers(this, _created_by_initializers, void 0));
            this.delivered_at = (__runInitializers(this, _created_by_extraInitializers), __runInitializers(this, _delivered_at_initializers, void 0));
            this.canceled_at = (__runInitializers(this, _delivered_at_extraInitializers), __runInitializers(this, _canceled_at_initializers, void 0));
            this.data = (__runInitializers(this, _canceled_at_extraInitializers), __runInitializers(this, _data_initializers, void 0));
            this.requires_shipping = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _requires_shipping_initializers, void 0));
            this.items = (__runInitializers(this, _requires_shipping_extraInitializers), __runInitializers(this, _items_initializers, void 0));
            this.labels = (__runInitializers(this, _items_extraInitializers), __runInitializers(this, _labels_initializers, void 0));
            this.provider = (__runInitializers(this, _labels_extraInitializers), __runInitializers(this, _provider_initializers, void 0));
            this.shipping_option = (__runInitializers(this, _provider_extraInitializers), __runInitializers(this, _shipping_option_initializers, void 0));
            this.delivery_address = (__runInitializers(this, _shipping_option_extraInitializers), __runInitializers(this, _delivery_address_initializers, void 0));
            this.metadata = (__runInitializers(this, _delivery_address_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            this.order = (__runInitializers(this, _deleted_at_extraInitializers), __runInitializers(this, _order_initializers, void 0)); // Lien vers la commande
            // Virtuals pour la population
            this.items_details = __runInitializers(this, _order_extraInitializers);
        }
        return Fulfillment_1;
    }());
    __setFunctionName(_classThis, "Fulfillment");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                default: function () { return "ful_".concat(new mongoose_2.Types.ObjectId().toString()); },
            })];
        _location_id_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _packed_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _shipped_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _marked_shipped_by_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _created_by_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _delivered_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _canceled_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _data_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _requires_shipping_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: true })];
        _items_decorators = [(0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'FulfillmentItem', default: [] })];
        _labels_decorators = [(0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'FulfillmentLabel', default: [] })];
        _provider_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'FulfillmentProvider', default: null })];
        _shipping_option_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'ShippingOption', default: null })];
        _delivery_address_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'FulfillmentAddress', default: null })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _order_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Order', required: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _location_id_decorators, { kind: "field", name: "location_id", static: false, private: false, access: { has: function (obj) { return "location_id" in obj; }, get: function (obj) { return obj.location_id; }, set: function (obj, value) { obj.location_id = value; } }, metadata: _metadata }, _location_id_initializers, _location_id_extraInitializers);
        __esDecorate(null, null, _packed_at_decorators, { kind: "field", name: "packed_at", static: false, private: false, access: { has: function (obj) { return "packed_at" in obj; }, get: function (obj) { return obj.packed_at; }, set: function (obj, value) { obj.packed_at = value; } }, metadata: _metadata }, _packed_at_initializers, _packed_at_extraInitializers);
        __esDecorate(null, null, _shipped_at_decorators, { kind: "field", name: "shipped_at", static: false, private: false, access: { has: function (obj) { return "shipped_at" in obj; }, get: function (obj) { return obj.shipped_at; }, set: function (obj, value) { obj.shipped_at = value; } }, metadata: _metadata }, _shipped_at_initializers, _shipped_at_extraInitializers);
        __esDecorate(null, null, _marked_shipped_by_decorators, { kind: "field", name: "marked_shipped_by", static: false, private: false, access: { has: function (obj) { return "marked_shipped_by" in obj; }, get: function (obj) { return obj.marked_shipped_by; }, set: function (obj, value) { obj.marked_shipped_by = value; } }, metadata: _metadata }, _marked_shipped_by_initializers, _marked_shipped_by_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _delivered_at_decorators, { kind: "field", name: "delivered_at", static: false, private: false, access: { has: function (obj) { return "delivered_at" in obj; }, get: function (obj) { return obj.delivered_at; }, set: function (obj, value) { obj.delivered_at = value; } }, metadata: _metadata }, _delivered_at_initializers, _delivered_at_extraInitializers);
        __esDecorate(null, null, _canceled_at_decorators, { kind: "field", name: "canceled_at", static: false, private: false, access: { has: function (obj) { return "canceled_at" in obj; }, get: function (obj) { return obj.canceled_at; }, set: function (obj, value) { obj.canceled_at = value; } }, metadata: _metadata }, _canceled_at_initializers, _canceled_at_extraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, null, _requires_shipping_decorators, { kind: "field", name: "requires_shipping", static: false, private: false, access: { has: function (obj) { return "requires_shipping" in obj; }, get: function (obj) { return obj.requires_shipping; }, set: function (obj, value) { obj.requires_shipping = value; } }, metadata: _metadata }, _requires_shipping_initializers, _requires_shipping_extraInitializers);
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
        __esDecorate(null, null, _labels_decorators, { kind: "field", name: "labels", static: false, private: false, access: { has: function (obj) { return "labels" in obj; }, get: function (obj) { return obj.labels; }, set: function (obj, value) { obj.labels = value; } }, metadata: _metadata }, _labels_initializers, _labels_extraInitializers);
        __esDecorate(null, null, _provider_decorators, { kind: "field", name: "provider", static: false, private: false, access: { has: function (obj) { return "provider" in obj; }, get: function (obj) { return obj.provider; }, set: function (obj, value) { obj.provider = value; } }, metadata: _metadata }, _provider_initializers, _provider_extraInitializers);
        __esDecorate(null, null, _shipping_option_decorators, { kind: "field", name: "shipping_option", static: false, private: false, access: { has: function (obj) { return "shipping_option" in obj; }, get: function (obj) { return obj.shipping_option; }, set: function (obj, value) { obj.shipping_option = value; } }, metadata: _metadata }, _shipping_option_initializers, _shipping_option_extraInitializers);
        __esDecorate(null, null, _delivery_address_decorators, { kind: "field", name: "delivery_address", static: false, private: false, access: { has: function (obj) { return "delivery_address" in obj; }, get: function (obj) { return obj.delivery_address; }, set: function (obj, value) { obj.delivery_address = value; } }, metadata: _metadata }, _delivery_address_initializers, _delivery_address_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Fulfillment = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Fulfillment = _classThis;
}();
exports.Fulfillment = Fulfillment;
exports.FulfillmentSchema = mongoose_1.SchemaFactory.createForClass(Fulfillment);
