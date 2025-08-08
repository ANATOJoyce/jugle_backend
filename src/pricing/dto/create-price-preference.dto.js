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
exports.CreatePricePreferenceDto = void 0;
var class_validator_1 = require("class-validator");
var CreatePricePreferenceDto = function () {
    var _a;
    var _attribute_decorators;
    var _attribute_initializers = [];
    var _attribute_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _is_tax_inclusive_decorators;
    var _is_tax_inclusive_initializers = [];
    var _is_tax_inclusive_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePricePreferenceDto() {
                this.attribute = __runInitializers(this, _attribute_initializers, void 0);
                this.value = (__runInitializers(this, _attribute_extraInitializers), __runInitializers(this, _value_initializers, void 0));
                this.is_tax_inclusive = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _is_tax_inclusive_initializers, void 0));
                __runInitializers(this, _is_tax_inclusive_extraInitializers);
            }
            return CreatePricePreferenceDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _attribute_decorators = [(0, class_validator_1.IsString)()];
            _value_decorators = [(0, class_validator_1.IsString)()];
            _is_tax_inclusive_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _attribute_decorators, { kind: "field", name: "attribute", static: false, private: false, access: { has: function (obj) { return "attribute" in obj; }, get: function (obj) { return obj.attribute; }, set: function (obj, value) { obj.attribute = value; } }, metadata: _metadata }, _attribute_initializers, _attribute_extraInitializers);
            __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(null, null, _is_tax_inclusive_decorators, { kind: "field", name: "is_tax_inclusive", static: false, private: false, access: { has: function (obj) { return "is_tax_inclusive" in obj; }, get: function (obj) { return obj.is_tax_inclusive; }, set: function (obj, value) { obj.is_tax_inclusive = value; } }, metadata: _metadata }, _is_tax_inclusive_initializers, _is_tax_inclusive_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePricePreferenceDto = CreatePricePreferenceDto;
