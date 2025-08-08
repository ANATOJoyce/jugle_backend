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
exports.CreateCountryDto = void 0;
var class_validator_1 = require("class-validator");
var CreateCountryDto = function () {
    var _a;
    var _iso_2_decorators;
    var _iso_2_initializers = [];
    var _iso_2_extraInitializers = [];
    var _iso_3_decorators;
    var _iso_3_initializers = [];
    var _iso_3_extraInitializers = [];
    var _num_code_decorators;
    var _num_code_initializers = [];
    var _num_code_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _display_name_decorators;
    var _display_name_initializers = [];
    var _display_name_extraInitializers = [];
    var _regionId_decorators;
    var _regionId_initializers = [];
    var _regionId_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateCountryDto() {
                this.iso_2 = __runInitializers(this, _iso_2_initializers, void 0);
                this.iso_3 = (__runInitializers(this, _iso_2_extraInitializers), __runInitializers(this, _iso_3_initializers, void 0));
                this.num_code = (__runInitializers(this, _iso_3_extraInitializers), __runInitializers(this, _num_code_initializers, void 0));
                this.name = (__runInitializers(this, _num_code_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.display_name = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _display_name_initializers, void 0));
                this.regionId = (__runInitializers(this, _display_name_extraInitializers), __runInitializers(this, _regionId_initializers, void 0)); // id de la région
                this.metadata = (__runInitializers(this, _regionId_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                __runInitializers(this, _metadata_extraInitializers);
            }
            return CreateCountryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _iso_2_decorators = [(0, class_validator_1.IsString)()];
            _iso_3_decorators = [(0, class_validator_1.IsString)()];
            _num_code_decorators = [(0, class_validator_1.IsString)()];
            _name_decorators = [(0, class_validator_1.IsString)()];
            _display_name_decorators = [(0, class_validator_1.IsString)()];
            _regionId_decorators = [(0, class_validator_1.IsOptional)()];
            _metadata_decorators = [(0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _iso_2_decorators, { kind: "field", name: "iso_2", static: false, private: false, access: { has: function (obj) { return "iso_2" in obj; }, get: function (obj) { return obj.iso_2; }, set: function (obj, value) { obj.iso_2 = value; } }, metadata: _metadata }, _iso_2_initializers, _iso_2_extraInitializers);
            __esDecorate(null, null, _iso_3_decorators, { kind: "field", name: "iso_3", static: false, private: false, access: { has: function (obj) { return "iso_3" in obj; }, get: function (obj) { return obj.iso_3; }, set: function (obj, value) { obj.iso_3 = value; } }, metadata: _metadata }, _iso_3_initializers, _iso_3_extraInitializers);
            __esDecorate(null, null, _num_code_decorators, { kind: "field", name: "num_code", static: false, private: false, access: { has: function (obj) { return "num_code" in obj; }, get: function (obj) { return obj.num_code; }, set: function (obj, value) { obj.num_code = value; } }, metadata: _metadata }, _num_code_initializers, _num_code_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _display_name_decorators, { kind: "field", name: "display_name", static: false, private: false, access: { has: function (obj) { return "display_name" in obj; }, get: function (obj) { return obj.display_name; }, set: function (obj, value) { obj.display_name = value; } }, metadata: _metadata }, _display_name_initializers, _display_name_extraInitializers);
            __esDecorate(null, null, _regionId_decorators, { kind: "field", name: "regionId", static: false, private: false, access: { has: function (obj) { return "regionId" in obj; }, get: function (obj) { return obj.regionId; }, set: function (obj, value) { obj.regionId = value; } }, metadata: _metadata }, _regionId_initializers, _regionId_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateCountryDto = CreateCountryDto;
