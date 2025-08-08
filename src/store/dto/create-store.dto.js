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
exports.CreateStoreDto = void 0;
// store/dto/update-store.dto.ts
var class_validator_1 = require("class-validator");
var update_store_status_dto_1 = require("./update-store-status.dto");
var CreateStoreDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _default_sales_channel_id_decorators;
    var _default_sales_channel_id_initializers = [];
    var _default_sales_channel_id_extraInitializers = [];
    var _default_region_id_decorators;
    var _default_region_id_initializers = [];
    var _default_region_id_extraInitializers = [];
    var _default_location_id_decorators;
    var _default_location_id_initializers = [];
    var _default_location_id_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateStoreDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.default_sales_channel_id = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _default_sales_channel_id_initializers, void 0));
                this.default_region_id = (__runInitializers(this, _default_sales_channel_id_extraInitializers), __runInitializers(this, _default_region_id_initializers, void 0));
                this.default_location_id = (__runInitializers(this, _default_region_id_extraInitializers), __runInitializers(this, _default_location_id_initializers, void 0));
                this.status = (__runInitializers(this, _default_location_id_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                __runInitializers(this, _status_extraInitializers);
            }
            return CreateStoreDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _default_sales_channel_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _default_region_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _default_location_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _status_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(update_store_status_dto_1.StoreStatus)];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _default_sales_channel_id_decorators, { kind: "field", name: "default_sales_channel_id", static: false, private: false, access: { has: function (obj) { return "default_sales_channel_id" in obj; }, get: function (obj) { return obj.default_sales_channel_id; }, set: function (obj, value) { obj.default_sales_channel_id = value; } }, metadata: _metadata }, _default_sales_channel_id_initializers, _default_sales_channel_id_extraInitializers);
            __esDecorate(null, null, _default_region_id_decorators, { kind: "field", name: "default_region_id", static: false, private: false, access: { has: function (obj) { return "default_region_id" in obj; }, get: function (obj) { return obj.default_region_id; }, set: function (obj, value) { obj.default_region_id = value; } }, metadata: _metadata }, _default_region_id_initializers, _default_region_id_extraInitializers);
            __esDecorate(null, null, _default_location_id_decorators, { kind: "field", name: "default_location_id", static: false, private: false, access: { has: function (obj) { return "default_location_id" in obj; }, get: function (obj) { return obj.default_location_id; }, set: function (obj, value) { obj.default_location_id = value; } }, metadata: _metadata }, _default_location_id_initializers, _default_location_id_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateStoreDto = CreateStoreDto;
