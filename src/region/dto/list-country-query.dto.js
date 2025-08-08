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
exports.ListCountryQueryDto = void 0;
var class_validator_1 = require("class-validator");
var ListCountryQueryDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _iso_2_decorators;
    var _iso_2_initializers = [];
    var _iso_2_extraInitializers = [];
    var _region_id_decorators;
    var _region_id_initializers = [];
    var _region_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ListCountryQueryDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.iso_2 = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _iso_2_initializers, void 0));
                this.region_id = (__runInitializers(this, _iso_2_extraInitializers), __runInitializers(this, _region_id_initializers, void 0));
                __runInitializers(this, _region_id_extraInitializers);
            }
            return ListCountryQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _iso_2_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _region_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _iso_2_decorators, { kind: "field", name: "iso_2", static: false, private: false, access: { has: function (obj) { return "iso_2" in obj; }, get: function (obj) { return obj.iso_2; }, set: function (obj, value) { obj.iso_2 = value; } }, metadata: _metadata }, _iso_2_initializers, _iso_2_extraInitializers);
            __esDecorate(null, null, _region_id_decorators, { kind: "field", name: "region_id", static: false, private: false, access: { has: function (obj) { return "region_id" in obj; }, get: function (obj) { return obj.region_id; }, set: function (obj, value) { obj.region_id = value; } }, metadata: _metadata }, _region_id_initializers, _region_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ListCountryQueryDto = ListCountryQueryDto;
