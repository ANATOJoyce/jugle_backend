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
exports.UpdatePriceListRuleDto = void 0;
var class_validator_1 = require("class-validator");
var UpdatePriceListRuleDto = function () {
    var _a;
    var _attribute_decorators;
    var _attribute_initializers = [];
    var _attribute_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _price_list_decorators;
    var _price_list_initializers = [];
    var _price_list_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdatePriceListRuleDto() {
                this.attribute = __runInitializers(this, _attribute_initializers, void 0);
                this.value = (__runInitializers(this, _attribute_extraInitializers), __runInitializers(this, _value_initializers, void 0));
                this.price_list = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _price_list_initializers, void 0));
                __runInitializers(this, _price_list_extraInitializers);
            }
            return UpdatePriceListRuleDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _attribute_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _value_decorators = [(0, class_validator_1.IsOptional)()];
            _price_list_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            __esDecorate(null, null, _attribute_decorators, { kind: "field", name: "attribute", static: false, private: false, access: { has: function (obj) { return "attribute" in obj; }, get: function (obj) { return obj.attribute; }, set: function (obj, value) { obj.attribute = value; } }, metadata: _metadata }, _attribute_initializers, _attribute_extraInitializers);
            __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(null, null, _price_list_decorators, { kind: "field", name: "price_list", static: false, private: false, access: { has: function (obj) { return "price_list" in obj; }, get: function (obj) { return obj.price_list; }, set: function (obj, value) { obj.price_list = value; } }, metadata: _metadata }, _price_list_initializers, _price_list_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdatePriceListRuleDto = UpdatePriceListRuleDto;
