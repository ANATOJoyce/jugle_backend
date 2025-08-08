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
exports.PaymentProviderSchema = exports.PaymentProvider = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var PaymentProvider = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _is_enabled_decorators;
    var _is_enabled_initializers = [];
    var _is_enabled_extraInitializers = [];
    var _payment_collections_decorators;
    var _payment_collections_initializers = [];
    var _payment_collections_extraInitializers = [];
    var PaymentProvider = _classThis = /** @class */ (function () {
        function PaymentProvider_1() {
            this.is_enabled = __runInitializers(this, _is_enabled_initializers, void 0);
            // Many-to-Many relationship with PaymentCollection
            this.payment_collections = (__runInitializers(this, _is_enabled_extraInitializers), __runInitializers(this, _payment_collections_initializers, void 0));
            __runInitializers(this, _payment_collections_extraInitializers);
        }
        return PaymentProvider_1;
    }());
    __setFunctionName(_classThis, "PaymentProvider");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _is_enabled_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: true })];
        _payment_collections_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'PaymentCollection' }],
                default: [],
            })];
        __esDecorate(null, null, _is_enabled_decorators, { kind: "field", name: "is_enabled", static: false, private: false, access: { has: function (obj) { return "is_enabled" in obj; }, get: function (obj) { return obj.is_enabled; }, set: function (obj, value) { obj.is_enabled = value; } }, metadata: _metadata }, _is_enabled_initializers, _is_enabled_extraInitializers);
        __esDecorate(null, null, _payment_collections_decorators, { kind: "field", name: "payment_collections", static: false, private: false, access: { has: function (obj) { return "payment_collections" in obj; }, get: function (obj) { return obj.payment_collections; }, set: function (obj, value) { obj.payment_collections = value; } }, metadata: _metadata }, _payment_collections_initializers, _payment_collections_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaymentProvider = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaymentProvider = _classThis;
}();
exports.PaymentProvider = PaymentProvider;
exports.PaymentProviderSchema = mongoose_1.SchemaFactory.createForClass(PaymentProvider);
