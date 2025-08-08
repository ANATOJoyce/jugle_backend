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
exports.CreateGeoZoneDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var geo_zone_entity_1 = require("../entities/geo-zone.entity");
var CreateGeoZoneDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _country_code_decorators;
    var _country_code_initializers = [];
    var _country_code_extraInitializers = [];
    var _province_code_decorators;
    var _province_code_initializers = [];
    var _province_code_extraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _city_extraInitializers = [];
    var _postal_expression_decorators;
    var _postal_expression_initializers = [];
    var _postal_expression_extraInitializers = [];
    var _service_zone_decorators;
    var _service_zone_initializers = [];
    var _service_zone_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateGeoZoneDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.type = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _type_initializers, void 0));
                this.country_code = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _country_code_initializers, void 0));
                this.province_code = (__runInitializers(this, _country_code_extraInitializers), __runInitializers(this, _province_code_initializers, void 0));
                this.city = (__runInitializers(this, _province_code_extraInitializers), __runInitializers(this, _city_initializers, void 0));
                this.postal_expression = (__runInitializers(this, _city_extraInitializers), __runInitializers(this, _postal_expression_initializers, void 0));
                this.service_zone = (__runInitializers(this, _postal_expression_extraInitializers), __runInitializers(this, _service_zone_initializers, void 0));
                this.metadata = (__runInitializers(this, _service_zone_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                this.deleted_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
                __runInitializers(this, _deleted_at_extraInitializers);
            }
            return CreateGeoZoneDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({ example: 'fgz_60c72b2f9b1e8c001cf9f999', description: 'Unique GeoZone ID' }), (0, class_validator_1.IsString)()];
            _type_decorators = [(0, swagger_1.ApiProperty)({ enum: geo_zone_entity_1.GeoZoneType, default: geo_zone_entity_1.GeoZoneType.COUNTRY }), (0, class_validator_1.IsEnum)(geo_zone_entity_1.GeoZoneType)];
            _country_code_decorators = [(0, swagger_1.ApiProperty)({ example: 'US', description: 'Country code' }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _province_code_decorators = [(0, swagger_1.ApiProperty)({ example: 'CA', description: 'Province code', required: false, nullable: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _city_decorators = [(0, swagger_1.ApiProperty)({ example: 'Los Angeles', required: false, nullable: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _postal_expression_decorators = [(0, swagger_1.ApiProperty)({ example: { pattern: '900\\d{2}' }, required: false, type: Object, nullable: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            _service_zone_decorators = [(0, swagger_1.ApiProperty)({ description: 'Reference to ServiceZone by ID' }), (0, class_validator_1.IsMongoId)()];
            _metadata_decorators = [(0, swagger_1.ApiProperty)({ example: {}, required: false, type: Object, nullable: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            _deleted_at_decorators = [(0, swagger_1.ApiProperty)({ example: '2025-01-01T00:00:00Z', required: false, nullable: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _country_code_decorators, { kind: "field", name: "country_code", static: false, private: false, access: { has: function (obj) { return "country_code" in obj; }, get: function (obj) { return obj.country_code; }, set: function (obj, value) { obj.country_code = value; } }, metadata: _metadata }, _country_code_initializers, _country_code_extraInitializers);
            __esDecorate(null, null, _province_code_decorators, { kind: "field", name: "province_code", static: false, private: false, access: { has: function (obj) { return "province_code" in obj; }, get: function (obj) { return obj.province_code; }, set: function (obj, value) { obj.province_code = value; } }, metadata: _metadata }, _province_code_initializers, _province_code_extraInitializers);
            __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
            __esDecorate(null, null, _postal_expression_decorators, { kind: "field", name: "postal_expression", static: false, private: false, access: { has: function (obj) { return "postal_expression" in obj; }, get: function (obj) { return obj.postal_expression; }, set: function (obj, value) { obj.postal_expression = value; } }, metadata: _metadata }, _postal_expression_initializers, _postal_expression_extraInitializers);
            __esDecorate(null, null, _service_zone_decorators, { kind: "field", name: "service_zone", static: false, private: false, access: { has: function (obj) { return "service_zone" in obj; }, get: function (obj) { return obj.service_zone; }, set: function (obj, value) { obj.service_zone = value; } }, metadata: _metadata }, _service_zone_initializers, _service_zone_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateGeoZoneDto = CreateGeoZoneDto;
