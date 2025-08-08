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
exports.RegionSchema = exports.Region = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Region = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _automatic_taxes_decorators;
    var _automatic_taxes_initializers = [];
    var _automatic_taxes_extraInitializers = [];
    var _countries_decorators;
    var _countries_initializers = [];
    var _countries_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var Region = _classThis = /** @class */ (function () {
        function Region_1() {
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.currency_code = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _currency_code_initializers, void 0));
            this.automatic_taxes = (__runInitializers(this, _currency_code_extraInitializers), __runInitializers(this, _automatic_taxes_initializers, void 0));
            this.countries = (__runInitializers(this, _automatic_taxes_extraInitializers), __runInitializers(this, _countries_initializers, void 0));
            this.metadata = (__runInitializers(this, _countries_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            __runInitializers(this, _metadata_extraInitializers);
        }
        return Region_1;
    }());
    __setFunctionName(_classThis, "Region");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _currency_code_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _automatic_taxes_decorators = [(0, mongoose_1.Prop)({ default: true })];
        _countries_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Country' }],
            })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _automatic_taxes_decorators, { kind: "field", name: "automatic_taxes", static: false, private: false, access: { has: function (obj) { return "automatic_taxes" in obj; }, get: function (obj) { return obj.automatic_taxes; }, set: function (obj, value) { obj.automatic_taxes = value; } }, metadata: _metadata }, _automatic_taxes_initializers, _automatic_taxes_extraInitializers);
        __esDecorate(null, null, _countries_decorators, { kind: "field", name: "countries", static: false, private: false, access: { has: function (obj) { return "countries" in obj; }, get: function (obj) { return obj.countries; }, set: function (obj, value) { obj.countries = value; } }, metadata: _metadata }, _countries_initializers, _countries_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Region = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Region = _classThis;
}();
exports.Region = Region;
exports.RegionSchema = mongoose_1.SchemaFactory.createForClass(Region);
