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
exports.ServiceZoneSchema = exports.ServiceZone = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ServiceZone = function () {
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
    var _fulfillment_set_decorators;
    var _fulfillment_set_initializers = [];
    var _fulfillment_set_extraInitializers = [];
    var _geo_zones_decorators;
    var _geo_zones_initializers = [];
    var _geo_zones_extraInitializers = [];
    var _shipping_options_decorators;
    var _shipping_options_initializers = [];
    var _shipping_options_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var ServiceZone = _classThis = /** @class */ (function () {
        function ServiceZone_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.fulfillment_set = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _fulfillment_set_initializers, void 0));
            this.geo_zones = (__runInitializers(this, _fulfillment_set_extraInitializers), __runInitializers(this, _geo_zones_initializers, void 0));
            this.shipping_options = (__runInitializers(this, _geo_zones_extraInitializers), __runInitializers(this, _shipping_options_initializers, void 0));
            this.metadata = (__runInitializers(this, _shipping_options_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            // Virtuals for populated relationships
            this.fulfillment_set_details = __runInitializers(this, _deleted_at_extraInitializers);
        }
        return ServiceZone_1;
    }());
    __setFunctionName(_classThis, "ServiceZone");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                default: function () { return "serzo_".concat(new mongoose_2.Types.ObjectId().toString()); },
            })];
        _name_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _fulfillment_set_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'FulfillmentSet',
                required: true
            })];
        _geo_zones_decorators = [(0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'GeoZone', default: [] })];
        _shipping_options_decorators = [(0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'ShippingOption', default: [] })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _fulfillment_set_decorators, { kind: "field", name: "fulfillment_set", static: false, private: false, access: { has: function (obj) { return "fulfillment_set" in obj; }, get: function (obj) { return obj.fulfillment_set; }, set: function (obj, value) { obj.fulfillment_set = value; } }, metadata: _metadata }, _fulfillment_set_initializers, _fulfillment_set_extraInitializers);
        __esDecorate(null, null, _geo_zones_decorators, { kind: "field", name: "geo_zones", static: false, private: false, access: { has: function (obj) { return "geo_zones" in obj; }, get: function (obj) { return obj.geo_zones; }, set: function (obj, value) { obj.geo_zones = value; } }, metadata: _metadata }, _geo_zones_initializers, _geo_zones_extraInitializers);
        __esDecorate(null, null, _shipping_options_decorators, { kind: "field", name: "shipping_options", static: false, private: false, access: { has: function (obj) { return "shipping_options" in obj; }, get: function (obj) { return obj.shipping_options; }, set: function (obj, value) { obj.shipping_options = value; } }, metadata: _metadata }, _shipping_options_initializers, _shipping_options_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ServiceZone = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ServiceZone = _classThis;
}();
exports.ServiceZone = ServiceZone;
exports.ServiceZoneSchema = mongoose_1.SchemaFactory.createForClass(ServiceZone);
