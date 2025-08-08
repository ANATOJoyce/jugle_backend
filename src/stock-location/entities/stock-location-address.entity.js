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
exports.StockLocationAddressSchema = exports.StockLocationAddress = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var country_entity_1 = require("../../region/entities/country.entity");
var region_entity_1 = require("../../region/entities/region.entity");
var StockLocationAddress = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = ret._id;
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                }
            },
            collection: 'stock_location_addresses',
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _address_1_decorators;
    var _address_1_initializers = [];
    var _address_1_extraInitializers = [];
    var _address_2_decorators;
    var _address_2_initializers = [];
    var _address_2_extraInitializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _company_extraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _city_extraInitializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _country_extraInitializers = [];
    var _region_decorators;
    var _region_initializers = [];
    var _region_extraInitializers = [];
    var _postal_code_decorators;
    var _postal_code_initializers = [];
    var _postal_code_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var StockLocationAddress = _classThis = /** @class */ (function () {
        function StockLocationAddress_1() {
            this.address_1 = __runInitializers(this, _address_1_initializers, void 0);
            this.address_2 = (__runInitializers(this, _address_1_extraInitializers), __runInitializers(this, _address_2_initializers, void 0));
            this.company = (__runInitializers(this, _address_2_extraInitializers), __runInitializers(this, _company_initializers, void 0));
            this.city = (__runInitializers(this, _company_extraInitializers), __runInitializers(this, _city_initializers, void 0));
            this.country = (__runInitializers(this, _city_extraInitializers), __runInitializers(this, _country_initializers, void 0));
            this.region = (__runInitializers(this, _country_extraInitializers), __runInitializers(this, _region_initializers, void 0));
            this.postal_code = (__runInitializers(this, _region_extraInitializers), __runInitializers(this, _postal_code_initializers, void 0));
            this.phone = (__runInitializers(this, _postal_code_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
            this.metadata = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            __runInitializers(this, _metadata_extraInitializers);
        }
        return StockLocationAddress_1;
    }());
    __setFunctionName(_classThis, "StockLocationAddress");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _address_1_decorators = [(0, mongoose_1.Prop)({ required: true, trim: true })];
        _address_2_decorators = [(0, mongoose_1.Prop)({ trim: true })];
        _company_decorators = [(0, mongoose_1.Prop)({ trim: true })];
        _city_decorators = [(0, mongoose_1.Prop)({ trim: true })];
        _country_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: country_entity_1.Country.name, required: true })];
        _region_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: region_entity_1.Region.name })];
        _postal_code_decorators = [(0, mongoose_1.Prop)({ trim: true })];
        _phone_decorators = [(0, mongoose_1.Prop)({ trim: true })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: {} })];
        __esDecorate(null, null, _address_1_decorators, { kind: "field", name: "address_1", static: false, private: false, access: { has: function (obj) { return "address_1" in obj; }, get: function (obj) { return obj.address_1; }, set: function (obj, value) { obj.address_1 = value; } }, metadata: _metadata }, _address_1_initializers, _address_1_extraInitializers);
        __esDecorate(null, null, _address_2_decorators, { kind: "field", name: "address_2", static: false, private: false, access: { has: function (obj) { return "address_2" in obj; }, get: function (obj) { return obj.address_2; }, set: function (obj, value) { obj.address_2 = value; } }, metadata: _metadata }, _address_2_initializers, _address_2_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
        __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _country_extraInitializers);
        __esDecorate(null, null, _region_decorators, { kind: "field", name: "region", static: false, private: false, access: { has: function (obj) { return "region" in obj; }, get: function (obj) { return obj.region; }, set: function (obj, value) { obj.region = value; } }, metadata: _metadata }, _region_initializers, _region_extraInitializers);
        __esDecorate(null, null, _postal_code_decorators, { kind: "field", name: "postal_code", static: false, private: false, access: { has: function (obj) { return "postal_code" in obj; }, get: function (obj) { return obj.postal_code; }, set: function (obj, value) { obj.postal_code = value; } }, metadata: _metadata }, _postal_code_initializers, _postal_code_extraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StockLocationAddress = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StockLocationAddress = _classThis;
}();
exports.StockLocationAddress = StockLocationAddress;
exports.StockLocationAddressSchema = mongoose_1.SchemaFactory.createForClass(StockLocationAddress);
