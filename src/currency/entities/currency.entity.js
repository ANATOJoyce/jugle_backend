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
exports.CurrencySchema = exports.Currency = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Currency = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: false,
            autoIndex: true,
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _symbol_decorators;
    var _symbol_initializers = [];
    var _symbol_extraInitializers = [];
    var _symbol_native_decorators;
    var _symbol_native_initializers = [];
    var _symbol_native_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _decimal_digits_decorators;
    var _decimal_digits_initializers = [];
    var _decimal_digits_extraInitializers = [];
    var _rounding_decorators;
    var _rounding_initializers = [];
    var _rounding_extraInitializers = [];
    var Currency = _classThis = /** @class */ (function () {
        function Currency_1() {
            this.code = __runInitializers(this, _code_initializers, void 0); // ex: "USD"
            this.symbol = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _symbol_initializers, void 0)); // ex: "$"
            this.symbol_native = (__runInitializers(this, _symbol_extraInitializers), __runInitializers(this, _symbol_native_initializers, void 0)); // Local symbol, ex: "$"
            this.name = (__runInitializers(this, _symbol_native_extraInitializers), __runInitializers(this, _name_initializers, void 0)); // ex: "US Dollar"
            this.decimal_digits = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _decimal_digits_initializers, void 0));
            this.rounding = (__runInitializers(this, _decimal_digits_extraInitializers), __runInitializers(this, _rounding_initializers, void 0));
            __runInitializers(this, _rounding_extraInitializers);
        }
        return Currency_1;
    }());
    __setFunctionName(_classThis, "Currency");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _code_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                index: true,
            })];
        _symbol_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _symbol_native_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _name_decorators = [(0, mongoose_1.Prop)({ type: String, required: true, index: true })];
        _decimal_digits_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true, default: 0 })];
        _rounding_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                required: true,
                default: 0,
                validate: {
                    validator: function (v) { return Number.isFinite(v); },
                    message: 'Rounding must be a finite number',
                },
            })];
        __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
        __esDecorate(null, null, _symbol_decorators, { kind: "field", name: "symbol", static: false, private: false, access: { has: function (obj) { return "symbol" in obj; }, get: function (obj) { return obj.symbol; }, set: function (obj, value) { obj.symbol = value; } }, metadata: _metadata }, _symbol_initializers, _symbol_extraInitializers);
        __esDecorate(null, null, _symbol_native_decorators, { kind: "field", name: "symbol_native", static: false, private: false, access: { has: function (obj) { return "symbol_native" in obj; }, get: function (obj) { return obj.symbol_native; }, set: function (obj, value) { obj.symbol_native = value; } }, metadata: _metadata }, _symbol_native_initializers, _symbol_native_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _decimal_digits_decorators, { kind: "field", name: "decimal_digits", static: false, private: false, access: { has: function (obj) { return "decimal_digits" in obj; }, get: function (obj) { return obj.decimal_digits; }, set: function (obj, value) { obj.decimal_digits = value; } }, metadata: _metadata }, _decimal_digits_initializers, _decimal_digits_extraInitializers);
        __esDecorate(null, null, _rounding_decorators, { kind: "field", name: "rounding", static: false, private: false, access: { has: function (obj) { return "rounding" in obj; }, get: function (obj) { return obj.rounding; }, set: function (obj, value) { obj.rounding = value; } }, metadata: _metadata }, _rounding_initializers, _rounding_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Currency = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Currency = _classThis;
}();
exports.Currency = Currency;
exports.CurrencySchema = mongoose_1.SchemaFactory.createForClass(Currency);
