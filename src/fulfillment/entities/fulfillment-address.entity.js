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
exports.FulfillmentAddressSchema = exports.FulfillmentAddress = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var FulfillmentAddress = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: false, // Désactive les timestamps automatiques
            _id: false, // Utilise 'id' comme clé primaire
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _company_extraInitializers = [];
    var _first_name_decorators;
    var _first_name_initializers = [];
    var _first_name_extraInitializers = [];
    var _last_name_decorators;
    var _last_name_initializers = [];
    var _last_name_extraInitializers = [];
    var _address_1_decorators;
    var _address_1_initializers = [];
    var _address_1_extraInitializers = [];
    var _address_2_decorators;
    var _address_2_initializers = [];
    var _address_2_extraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _city_extraInitializers = [];
    var _country_code_decorators;
    var _country_code_initializers = [];
    var _country_code_extraInitializers = [];
    var _province_decorators;
    var _province_initializers = [];
    var _province_extraInitializers = [];
    var _postal_code_decorators;
    var _postal_code_initializers = [];
    var _postal_code_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _fulfillment_decorators;
    var _fulfillment_initializers = [];
    var _fulfillment_extraInitializers = [];
    var FulfillmentAddress = _classThis = /** @class */ (function () {
        function FulfillmentAddress_1() {
            this.id = __runInitializers(this, _id_initializers, void 0); // Clé primaire avec préfixe "fuladdr"
            this.company = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _company_initializers, void 0));
            this.first_name = (__runInitializers(this, _company_extraInitializers), __runInitializers(this, _first_name_initializers, void 0));
            this.last_name = (__runInitializers(this, _first_name_extraInitializers), __runInitializers(this, _last_name_initializers, void 0));
            this.address_1 = (__runInitializers(this, _last_name_extraInitializers), __runInitializers(this, _address_1_initializers, void 0));
            this.address_2 = (__runInitializers(this, _address_1_extraInitializers), __runInitializers(this, _address_2_initializers, void 0));
            this.city = (__runInitializers(this, _address_2_extraInitializers), __runInitializers(this, _city_initializers, void 0));
            this.country_code = (__runInitializers(this, _city_extraInitializers), __runInitializers(this, _country_code_initializers, void 0));
            this.province = (__runInitializers(this, _country_code_extraInitializers), __runInitializers(this, _province_initializers, void 0));
            this.postal_code = (__runInitializers(this, _province_extraInitializers), __runInitializers(this, _postal_code_initializers, void 0));
            this.phone = (__runInitializers(this, _postal_code_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
            this.metadata = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.fulfillment = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _fulfillment_initializers, void 0));
            __runInitializers(this, _fulfillment_extraInitializers);
        }
        return FulfillmentAddress_1;
    }());
    __setFunctionName(_classThis, "FulfillmentAddress");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                default: function () { return "fuladdr_".concat(Math.random().toString(36).substring(2, 11)); }
            })];
        _company_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _first_name_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _last_name_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _address_1_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _address_2_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _city_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _country_code_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _province_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _postal_code_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _phone_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _fulfillment_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Fulfillment',
                required: true
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } }, metadata: _metadata }, _company_initializers, _company_extraInitializers);
        __esDecorate(null, null, _first_name_decorators, { kind: "field", name: "first_name", static: false, private: false, access: { has: function (obj) { return "first_name" in obj; }, get: function (obj) { return obj.first_name; }, set: function (obj, value) { obj.first_name = value; } }, metadata: _metadata }, _first_name_initializers, _first_name_extraInitializers);
        __esDecorate(null, null, _last_name_decorators, { kind: "field", name: "last_name", static: false, private: false, access: { has: function (obj) { return "last_name" in obj; }, get: function (obj) { return obj.last_name; }, set: function (obj, value) { obj.last_name = value; } }, metadata: _metadata }, _last_name_initializers, _last_name_extraInitializers);
        __esDecorate(null, null, _address_1_decorators, { kind: "field", name: "address_1", static: false, private: false, access: { has: function (obj) { return "address_1" in obj; }, get: function (obj) { return obj.address_1; }, set: function (obj, value) { obj.address_1 = value; } }, metadata: _metadata }, _address_1_initializers, _address_1_extraInitializers);
        __esDecorate(null, null, _address_2_decorators, { kind: "field", name: "address_2", static: false, private: false, access: { has: function (obj) { return "address_2" in obj; }, get: function (obj) { return obj.address_2; }, set: function (obj, value) { obj.address_2 = value; } }, metadata: _metadata }, _address_2_initializers, _address_2_extraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
        __esDecorate(null, null, _country_code_decorators, { kind: "field", name: "country_code", static: false, private: false, access: { has: function (obj) { return "country_code" in obj; }, get: function (obj) { return obj.country_code; }, set: function (obj, value) { obj.country_code = value; } }, metadata: _metadata }, _country_code_initializers, _country_code_extraInitializers);
        __esDecorate(null, null, _province_decorators, { kind: "field", name: "province", static: false, private: false, access: { has: function (obj) { return "province" in obj; }, get: function (obj) { return obj.province; }, set: function (obj, value) { obj.province = value; } }, metadata: _metadata }, _province_initializers, _province_extraInitializers);
        __esDecorate(null, null, _postal_code_decorators, { kind: "field", name: "postal_code", static: false, private: false, access: { has: function (obj) { return "postal_code" in obj; }, get: function (obj) { return obj.postal_code; }, set: function (obj, value) { obj.postal_code = value; } }, metadata: _metadata }, _postal_code_initializers, _postal_code_extraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _fulfillment_decorators, { kind: "field", name: "fulfillment", static: false, private: false, access: { has: function (obj) { return "fulfillment" in obj; }, get: function (obj) { return obj.fulfillment; }, set: function (obj, value) { obj.fulfillment = value; } }, metadata: _metadata }, _fulfillment_initializers, _fulfillment_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FulfillmentAddress = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FulfillmentAddress = _classThis;
}();
exports.FulfillmentAddress = FulfillmentAddress;
exports.FulfillmentAddressSchema = mongoose_1.SchemaFactory.createForClass(FulfillmentAddress);
