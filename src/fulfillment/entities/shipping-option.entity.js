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
exports.ShippingOptionSchema = exports.ShippingOption = exports.ShippingOptionPriceType = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ShippingOptionPriceType;
(function (ShippingOptionPriceType) {
    ShippingOptionPriceType["FLAT"] = "flat";
    ShippingOptionPriceType["CALCULATED"] = "calculated";
})(ShippingOptionPriceType || (exports.ShippingOptionPriceType = ShippingOptionPriceType = {}));
var ShippingOption = function () {
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
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _price_type_decorators;
    var _price_type_initializers = [];
    var _price_type_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _service_zone_decorators;
    var _service_zone_initializers = [];
    var _service_zone_extraInitializers = [];
    var _shipping_profile_decorators;
    var _shipping_profile_initializers = [];
    var _shipping_profile_extraInitializers = [];
    var _provider_decorators;
    var _provider_initializers = [];
    var _provider_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _rules_decorators;
    var _rules_initializers = [];
    var _rules_extraInitializers = [];
    var _fulfillments_decorators;
    var _fulfillments_initializers = [];
    var _fulfillments_extraInitializers = [];
    var ShippingOption = _classThis = /** @class */ (function () {
        function ShippingOption_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.price_type = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _price_type_initializers, void 0));
            this.data = (__runInitializers(this, _price_type_extraInitializers), __runInitializers(this, _data_initializers, void 0));
            this.metadata = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.service_zone = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _service_zone_initializers, void 0));
            this.shipping_profile = (__runInitializers(this, _service_zone_extraInitializers), __runInitializers(this, _shipping_profile_initializers, void 0));
            this.provider = (__runInitializers(this, _shipping_profile_extraInitializers), __runInitializers(this, _provider_initializers, void 0));
            this.type = (__runInitializers(this, _provider_extraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.rules = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _rules_initializers, void 0));
            this.fulfillments = (__runInitializers(this, _rules_extraInitializers), __runInitializers(this, _fulfillments_initializers, void 0));
            // Virtuals for populated relationships
            this.service_zone_details = __runInitializers(this, _fulfillments_extraInitializers);
        }
        return ShippingOption_1;
    }());
    __setFunctionName(_classThis, "ShippingOption");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                default: function () { return "so_".concat(new mongoose_2.Types.ObjectId().toString()); },
            })];
        _name_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _price_type_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: ShippingOptionPriceType,
                default: ShippingOptionPriceType.FLAT
            })];
        _data_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _service_zone_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'ServiceZone',
                required: true
            })];
        _shipping_profile_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'ShippingProfile',
                default: null
            })];
        _provider_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'FulfillmentProvider',
                default: null
            })];
        _type_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'ShippingOptionType',
                default: null
            })];
        _rules_decorators = [(0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'ShippingOptionRule', default: [] })];
        _fulfillments_decorators = [(0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'Fulfillment', default: [] })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _price_type_decorators, { kind: "field", name: "price_type", static: false, private: false, access: { has: function (obj) { return "price_type" in obj; }, get: function (obj) { return obj.price_type; }, set: function (obj, value) { obj.price_type = value; } }, metadata: _metadata }, _price_type_initializers, _price_type_extraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _service_zone_decorators, { kind: "field", name: "service_zone", static: false, private: false, access: { has: function (obj) { return "service_zone" in obj; }, get: function (obj) { return obj.service_zone; }, set: function (obj, value) { obj.service_zone = value; } }, metadata: _metadata }, _service_zone_initializers, _service_zone_extraInitializers);
        __esDecorate(null, null, _shipping_profile_decorators, { kind: "field", name: "shipping_profile", static: false, private: false, access: { has: function (obj) { return "shipping_profile" in obj; }, get: function (obj) { return obj.shipping_profile; }, set: function (obj, value) { obj.shipping_profile = value; } }, metadata: _metadata }, _shipping_profile_initializers, _shipping_profile_extraInitializers);
        __esDecorate(null, null, _provider_decorators, { kind: "field", name: "provider", static: false, private: false, access: { has: function (obj) { return "provider" in obj; }, get: function (obj) { return obj.provider; }, set: function (obj, value) { obj.provider = value; } }, metadata: _metadata }, _provider_initializers, _provider_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _rules_decorators, { kind: "field", name: "rules", static: false, private: false, access: { has: function (obj) { return "rules" in obj; }, get: function (obj) { return obj.rules; }, set: function (obj, value) { obj.rules = value; } }, metadata: _metadata }, _rules_initializers, _rules_extraInitializers);
        __esDecorate(null, null, _fulfillments_decorators, { kind: "field", name: "fulfillments", static: false, private: false, access: { has: function (obj) { return "fulfillments" in obj; }, get: function (obj) { return obj.fulfillments; }, set: function (obj, value) { obj.fulfillments = value; } }, metadata: _metadata }, _fulfillments_initializers, _fulfillments_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ShippingOption = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ShippingOption = _classThis;
}();
exports.ShippingOption = ShippingOption;
exports.ShippingOptionSchema = mongoose_1.SchemaFactory.createForClass(ShippingOption);
