"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.TaxRateRuleSchema = exports.TaxRateRule = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var TaxRateRule = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'tax_rate_rules',
            toJSON: {
                virtuals: true,
                transform: function (_, ret) {
                    ret.id = ret._id;
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _tax_rate_decorators;
    var _tax_rate_initializers = [];
    var _tax_rate_extraInitializers = [];
    var _reference_decorators;
    var _reference_initializers = [];
    var _reference_extraInitializers = [];
    var _reference_id_decorators;
    var _reference_id_initializers = [];
    var _reference_id_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var TaxRateRule = _classThis = /** @class */ (function (_super) {
        __extends(TaxRateRule_1, _super);
        function TaxRateRule_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.metadata = __runInitializers(_this, _metadata_initializers, void 0);
            _this.created_by = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _created_by_initializers, void 0));
            _this.tax_rate = (__runInitializers(_this, _created_by_extraInitializers), __runInitializers(_this, _tax_rate_initializers, void 0));
            _this.reference = (__runInitializers(_this, _tax_rate_extraInitializers), __runInitializers(_this, _reference_initializers, void 0));
            _this.reference_id = (__runInitializers(_this, _reference_extraInitializers), __runInitializers(_this, _reference_id_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _reference_id_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            __runInitializers(_this, _deleted_at_extraInitializers);
            return _this;
        }
        return TaxRateRule_1;
    }(_classSuper));
    __setFunctionName(_classThis, "TaxRateRule");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _created_by_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _tax_rate_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Schema.Types.ObjectId,
                ref: 'TaxRate',
                required: true,
            })];
        _reference_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _reference_id_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _tax_rate_decorators, { kind: "field", name: "tax_rate", static: false, private: false, access: { has: function (obj) { return "tax_rate" in obj; }, get: function (obj) { return obj.tax_rate; }, set: function (obj, value) { obj.tax_rate = value; } }, metadata: _metadata }, _tax_rate_initializers, _tax_rate_extraInitializers);
        __esDecorate(null, null, _reference_decorators, { kind: "field", name: "reference", static: false, private: false, access: { has: function (obj) { return "reference" in obj; }, get: function (obj) { return obj.reference; }, set: function (obj, value) { obj.reference = value; } }, metadata: _metadata }, _reference_initializers, _reference_extraInitializers);
        __esDecorate(null, null, _reference_id_decorators, { kind: "field", name: "reference_id", static: false, private: false, access: { has: function (obj) { return "reference_id" in obj; }, get: function (obj) { return obj.reference_id; }, set: function (obj, value) { obj.reference_id = value; } }, metadata: _metadata }, _reference_id_initializers, _reference_id_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TaxRateRule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TaxRateRule = _classThis;
}();
exports.TaxRateRule = TaxRateRule;
exports.TaxRateRuleSchema = mongoose_1.SchemaFactory.createForClass(TaxRateRule);
exports.TaxRateRuleSchema.index({ tax_rate: 1, reference_id: 1 }, {
    name: 'IDX_tax_rate_rule_unique_rate_reference',
    unique: true,
    partialFilterExpression: { deleted_at: { $eq: null } },
});
exports.TaxRateRuleSchema.index({ reference_id: 1 }, {
    name: 'IDX_tax_rate_rule_reference_id',
    partialFilterExpression: { deleted_at: { $eq: null } },
});
