"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.OrderAddressSchema = exports.OrderAddress = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var uuid_1 = require("uuid");
var OrderAddress = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_addresses',
            autoIndex: true,
            id: true,
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _customer_id_decorators;
    var _customer_id_initializers = [];
    var _customer_id_extraInitializers = [];
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
    var OrderAddress = _classThis = /** @class */ (function (_super) {
        __extends(OrderAddress_1, _super);
        function OrderAddress_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.customer_id = __runInitializers(_this, _customer_id_initializers, void 0);
            _this.company = (__runInitializers(_this, _customer_id_extraInitializers), __runInitializers(_this, _company_initializers, void 0));
            _this.first_name = (__runInitializers(_this, _company_extraInitializers), __runInitializers(_this, _first_name_initializers, void 0));
            _this.last_name = (__runInitializers(_this, _first_name_extraInitializers), __runInitializers(_this, _last_name_initializers, void 0));
            _this.address_1 = (__runInitializers(_this, _last_name_extraInitializers), __runInitializers(_this, _address_1_initializers, void 0));
            _this.address_2 = (__runInitializers(_this, _address_1_extraInitializers), __runInitializers(_this, _address_2_initializers, void 0));
            _this.city = (__runInitializers(_this, _address_2_extraInitializers), __runInitializers(_this, _city_initializers, void 0));
            _this.country_code = (__runInitializers(_this, _city_extraInitializers), __runInitializers(_this, _country_code_initializers, void 0));
            _this.province = (__runInitializers(_this, _country_code_extraInitializers), __runInitializers(_this, _province_initializers, void 0));
            _this.postal_code = (__runInitializers(_this, _province_extraInitializers), __runInitializers(_this, _postal_code_initializers, void 0));
            _this.phone = (__runInitializers(_this, _postal_code_extraInitializers), __runInitializers(_this, _phone_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _phone_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            __runInitializers(_this, _metadata_extraInitializers);
            return _this;
        }
        return OrderAddress_1;
    }(_classSuper));
    __setFunctionName(_classThis, "OrderAddress");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _customer_id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                default: function () { return "ordaddr_".concat((0, uuid_1.v4)()); }, // Génère un ID avec le préfixe
                required: true,
                unique: true,
            }), (0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _company_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _first_name_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _last_name_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _address_1_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _address_2_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _city_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _country_code_decorators = [(0, mongoose_1.Prop)({ type: String, required: false })];
        _province_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _postal_code_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _phone_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, required: false })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, required: false })];
        __esDecorate(null, null, _customer_id_decorators, { kind: "field", name: "customer_id", static: false, private: false, access: { has: function (obj) { return "customer_id" in obj; }, get: function (obj) { return obj.customer_id; }, set: function (obj, value) { obj.customer_id = value; } }, metadata: _metadata }, _customer_id_initializers, _customer_id_extraInitializers);
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
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderAddress = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderAddress = _classThis;
}();
exports.OrderAddress = OrderAddress;
exports.OrderAddressSchema = mongoose_1.SchemaFactory.createForClass(OrderAddress);
