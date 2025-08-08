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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFulfillmentDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateFulfillmentDto = function () {
    var _a;
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var _location_id_decorators;
    var _location_id_initializers = [];
    var _location_id_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _requires_shipping_decorators;
    var _requires_shipping_initializers = [];
    var _requires_shipping_extraInitializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _items_extraInitializers = [];
    var _shipping_option_decorators;
    var _shipping_option_initializers = [];
    var _shipping_option_extraInitializers = [];
    var _provider_decorators;
    var _provider_initializers = [];
    var _provider_extraInitializers = [];
    var _delivery_address_decorators;
    var _delivery_address_initializers = [];
    var _delivery_address_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateFulfillmentDto() {
                this.order = __runInitializers(this, _order_initializers, void 0);
                this.location_id = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _location_id_initializers, void 0));
                this.created_by = (__runInitializers(this, _location_id_extraInitializers), __runInitializers(this, _created_by_initializers, void 0));
                this.requires_shipping = (__runInitializers(this, _created_by_extraInitializers), __runInitializers(this, _requires_shipping_initializers, void 0));
                this.items = (__runInitializers(this, _requires_shipping_extraInitializers), __runInitializers(this, _items_initializers, void 0));
                this.shipping_option = (__runInitializers(this, _items_extraInitializers), __runInitializers(this, _shipping_option_initializers, void 0));
                this.provider = (__runInitializers(this, _shipping_option_extraInitializers), __runInitializers(this, _provider_initializers, void 0));
                this.delivery_address = (__runInitializers(this, _provider_extraInitializers), __runInitializers(this, _delivery_address_initializers, void 0));
                this.metadata = (__runInitializers(this, _delivery_address_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                __runInitializers(this, _metadata_extraInitializers);
            }
            return CreateFulfillmentDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _order_decorators = [(0, swagger_1.ApiProperty)({ description: 'ID de la commande liée' }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsMongoId)()];
            _location_id_decorators = [(0, swagger_1.ApiProperty)({ description: 'ID de l’emplacement (entrepôt)' }), (0, class_validator_1.IsString)()];
            _created_by_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'ID de l’utilisateur qui crée le fulfillment' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _requires_shipping_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Indique si une expédition est requise' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _items_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Liste des IDs des items à expédier' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsMongoId)({ each: true })];
            _shipping_option_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'ID de l’option d’expédition choisie' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _provider_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'ID du fournisseur de fulfillment' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _delivery_address_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'ID de l’adresse de livraison' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _metadata_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Données supplémentaires (métadonnées)' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            __esDecorate(null, null, _location_id_decorators, { kind: "field", name: "location_id", static: false, private: false, access: { has: function (obj) { return "location_id" in obj; }, get: function (obj) { return obj.location_id; }, set: function (obj, value) { obj.location_id = value; } }, metadata: _metadata }, _location_id_initializers, _location_id_extraInitializers);
            __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
            __esDecorate(null, null, _requires_shipping_decorators, { kind: "field", name: "requires_shipping", static: false, private: false, access: { has: function (obj) { return "requires_shipping" in obj; }, get: function (obj) { return obj.requires_shipping; }, set: function (obj, value) { obj.requires_shipping = value; } }, metadata: _metadata }, _requires_shipping_initializers, _requires_shipping_extraInitializers);
            __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
            __esDecorate(null, null, _shipping_option_decorators, { kind: "field", name: "shipping_option", static: false, private: false, access: { has: function (obj) { return "shipping_option" in obj; }, get: function (obj) { return obj.shipping_option; }, set: function (obj, value) { obj.shipping_option = value; } }, metadata: _metadata }, _shipping_option_initializers, _shipping_option_extraInitializers);
            __esDecorate(null, null, _provider_decorators, { kind: "field", name: "provider", static: false, private: false, access: { has: function (obj) { return "provider" in obj; }, get: function (obj) { return obj.provider; }, set: function (obj, value) { obj.provider = value; } }, metadata: _metadata }, _provider_initializers, _provider_extraInitializers);
            __esDecorate(null, null, _delivery_address_decorators, { kind: "field", name: "delivery_address", static: false, private: false, access: { has: function (obj) { return "delivery_address" in obj; }, get: function (obj) { return obj.delivery_address; }, set: function (obj, value) { obj.delivery_address = value; } }, metadata: _metadata }, _delivery_address_initializers, _delivery_address_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateFulfillmentDto = CreateFulfillmentDto;
