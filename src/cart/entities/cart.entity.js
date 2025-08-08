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
exports.CartSchema = exports.Cart = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Cart = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true }
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _customer_decorators;
    var _customer_initializers = [];
    var _customer_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _region_id_decorators;
    var _region_id_initializers = [];
    var _region_id_extraInitializers = [];
    var _sales_channel_id_decorators;
    var _sales_channel_id_initializers = [];
    var _sales_channel_id_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _shipping_address_decorators;
    var _shipping_address_initializers = [];
    var _shipping_address_extraInitializers = [];
    var _billing_address_decorators;
    var _billing_address_initializers = [];
    var _billing_address_extraInitializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _items_extraInitializers = [];
    var _credit_lines_decorators;
    var _credit_lines_initializers = [];
    var _credit_lines_extraInitializers = [];
    var _shipping_methods_decorators;
    var _shipping_methods_initializers = [];
    var _shipping_methods_extraInitializers = [];
    var _subtotal_decorators;
    var _subtotal_initializers = [];
    var _subtotal_extraInitializers = [];
    var _tax_total_decorators;
    var _tax_total_initializers = [];
    var _tax_total_extraInitializers = [];
    var _discount_total_decorators;
    var _discount_total_initializers = [];
    var _discount_total_extraInitializers = [];
    var _shipping_total_decorators;
    var _shipping_total_initializers = [];
    var _shipping_total_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var _completed_at_decorators;
    var _completed_at_initializers = [];
    var _completed_at_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var Cart = _classThis = /** @class */ (function () {
        function Cart_1() {
            this.id = __runInitializers(this, _id_initializers, void 0); // e.g. "cart_abc123"
            this.customer = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _customer_initializers, void 0));
            this.email = (__runInitializers(this, _customer_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.region_id = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _region_id_initializers, void 0));
            this.sales_channel_id = (__runInitializers(this, _region_id_extraInitializers), __runInitializers(this, _sales_channel_id_initializers, void 0));
            this.currency_code = (__runInitializers(this, _sales_channel_id_extraInitializers), __runInitializers(this, _currency_code_initializers, void 0));
            this.shipping_address = (__runInitializers(this, _currency_code_extraInitializers), __runInitializers(this, _shipping_address_initializers, void 0));
            this.billing_address = (__runInitializers(this, _shipping_address_extraInitializers), __runInitializers(this, _billing_address_initializers, void 0));
            this.items = (__runInitializers(this, _billing_address_extraInitializers), __runInitializers(this, _items_initializers, void 0));
            this.credit_lines = (__runInitializers(this, _items_extraInitializers), __runInitializers(this, _credit_lines_initializers, void 0));
            this.shipping_methods = (__runInitializers(this, _credit_lines_extraInitializers), __runInitializers(this, _shipping_methods_initializers, void 0));
            this.subtotal = (__runInitializers(this, _shipping_methods_extraInitializers), __runInitializers(this, _subtotal_initializers, void 0));
            this.tax_total = (__runInitializers(this, _subtotal_extraInitializers), __runInitializers(this, _tax_total_initializers, void 0));
            this.discount_total = (__runInitializers(this, _tax_total_extraInitializers), __runInitializers(this, _discount_total_initializers, void 0));
            this.shipping_total = (__runInitializers(this, _discount_total_extraInitializers), __runInitializers(this, _shipping_total_initializers, void 0));
            this.total = (__runInitializers(this, _shipping_total_extraInitializers), __runInitializers(this, _total_initializers, void 0));
            this.completed_at = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _completed_at_initializers, void 0));
            this.metadata = (__runInitializers(this, _completed_at_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return Cart_1;
    }());
    __setFunctionName(_classThis, "Cart");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true })];
        _customer_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Customer' })];
        _email_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _region_id_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _sales_channel_id_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _currency_code_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _shipping_address_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Address' })];
        _billing_address_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Address' })];
        _items_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'LineItem' }] })];
        _credit_lines_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'CreditLine' }] })];
        _shipping_methods_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ShippingMethod' }] })];
        _subtotal_decorators = [(0, mongoose_1.Prop)({ default: 0 })];
        _tax_total_decorators = [(0, mongoose_1.Prop)({ default: 0 })];
        _discount_total_decorators = [(0, mongoose_1.Prop)({ default: 0 })];
        _shipping_total_decorators = [(0, mongoose_1.Prop)({ default: 0 })];
        _total_decorators = [(0, mongoose_1.Prop)({ default: 0 })];
        _completed_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: {} })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _customer_decorators, { kind: "field", name: "customer", static: false, private: false, access: { has: function (obj) { return "customer" in obj; }, get: function (obj) { return obj.customer; }, set: function (obj, value) { obj.customer = value; } }, metadata: _metadata }, _customer_initializers, _customer_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _region_id_decorators, { kind: "field", name: "region_id", static: false, private: false, access: { has: function (obj) { return "region_id" in obj; }, get: function (obj) { return obj.region_id; }, set: function (obj, value) { obj.region_id = value; } }, metadata: _metadata }, _region_id_initializers, _region_id_extraInitializers);
        __esDecorate(null, null, _sales_channel_id_decorators, { kind: "field", name: "sales_channel_id", static: false, private: false, access: { has: function (obj) { return "sales_channel_id" in obj; }, get: function (obj) { return obj.sales_channel_id; }, set: function (obj, value) { obj.sales_channel_id = value; } }, metadata: _metadata }, _sales_channel_id_initializers, _sales_channel_id_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _shipping_address_decorators, { kind: "field", name: "shipping_address", static: false, private: false, access: { has: function (obj) { return "shipping_address" in obj; }, get: function (obj) { return obj.shipping_address; }, set: function (obj, value) { obj.shipping_address = value; } }, metadata: _metadata }, _shipping_address_initializers, _shipping_address_extraInitializers);
        __esDecorate(null, null, _billing_address_decorators, { kind: "field", name: "billing_address", static: false, private: false, access: { has: function (obj) { return "billing_address" in obj; }, get: function (obj) { return obj.billing_address; }, set: function (obj, value) { obj.billing_address = value; } }, metadata: _metadata }, _billing_address_initializers, _billing_address_extraInitializers);
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
        __esDecorate(null, null, _credit_lines_decorators, { kind: "field", name: "credit_lines", static: false, private: false, access: { has: function (obj) { return "credit_lines" in obj; }, get: function (obj) { return obj.credit_lines; }, set: function (obj, value) { obj.credit_lines = value; } }, metadata: _metadata }, _credit_lines_initializers, _credit_lines_extraInitializers);
        __esDecorate(null, null, _shipping_methods_decorators, { kind: "field", name: "shipping_methods", static: false, private: false, access: { has: function (obj) { return "shipping_methods" in obj; }, get: function (obj) { return obj.shipping_methods; }, set: function (obj, value) { obj.shipping_methods = value; } }, metadata: _metadata }, _shipping_methods_initializers, _shipping_methods_extraInitializers);
        __esDecorate(null, null, _subtotal_decorators, { kind: "field", name: "subtotal", static: false, private: false, access: { has: function (obj) { return "subtotal" in obj; }, get: function (obj) { return obj.subtotal; }, set: function (obj, value) { obj.subtotal = value; } }, metadata: _metadata }, _subtotal_initializers, _subtotal_extraInitializers);
        __esDecorate(null, null, _tax_total_decorators, { kind: "field", name: "tax_total", static: false, private: false, access: { has: function (obj) { return "tax_total" in obj; }, get: function (obj) { return obj.tax_total; }, set: function (obj, value) { obj.tax_total = value; } }, metadata: _metadata }, _tax_total_initializers, _tax_total_extraInitializers);
        __esDecorate(null, null, _discount_total_decorators, { kind: "field", name: "discount_total", static: false, private: false, access: { has: function (obj) { return "discount_total" in obj; }, get: function (obj) { return obj.discount_total; }, set: function (obj, value) { obj.discount_total = value; } }, metadata: _metadata }, _discount_total_initializers, _discount_total_extraInitializers);
        __esDecorate(null, null, _shipping_total_decorators, { kind: "field", name: "shipping_total", static: false, private: false, access: { has: function (obj) { return "shipping_total" in obj; }, get: function (obj) { return obj.shipping_total; }, set: function (obj, value) { obj.shipping_total = value; } }, metadata: _metadata }, _shipping_total_initializers, _shipping_total_extraInitializers);
        __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
        __esDecorate(null, null, _completed_at_decorators, { kind: "field", name: "completed_at", static: false, private: false, access: { has: function (obj) { return "completed_at" in obj; }, get: function (obj) { return obj.completed_at; }, set: function (obj, value) { obj.completed_at = value; } }, metadata: _metadata }, _completed_at_initializers, _completed_at_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Cart = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Cart = _classThis;
}();
exports.Cart = Cart;
exports.CartSchema = mongoose_1.SchemaFactory.createForClass(Cart);
