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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRateSchema = exports.TaxRate = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var TaxRate = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'tax_rates',
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
    var _rate_decorators;
    var _rate_initializers = [];
    var _rate_extraInitializers = [];
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _is_default_decorators;
    var _is_default_initializers = [];
    var _is_default_extraInitializers = [];
    var _is_combinable_decorators;
    var _is_combinable_initializers = [];
    var _is_combinable_extraInitializers = [];
    var _tax_region_decorators;
    var _tax_region_initializers = [];
    var _tax_region_extraInitializers = [];
    var _rules_decorators;
    var _rules_initializers = [];
    var _rules_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var TaxRate = _classThis = /** @class */ (function (_super) {
        __extends(TaxRate_1, _super);
        function TaxRate_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rate = __runInitializers(_this, _rate_initializers, void 0);
            _this.code = (__runInitializers(_this, _rate_extraInitializers), __runInitializers(_this, _code_initializers, void 0));
            _this.name = (__runInitializers(_this, _code_extraInitializers), __runInitializers(_this, _name_initializers, void 0));
            _this.is_default = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _is_default_initializers, void 0));
            _this.is_combinable = (__runInitializers(_this, _is_default_extraInitializers), __runInitializers(_this, _is_combinable_initializers, void 0));
            _this.tax_region = (__runInitializers(_this, _is_combinable_extraInitializers), __runInitializers(_this, _tax_region_initializers, void 0));
            _this.rules = (__runInitializers(_this, _tax_region_extraInitializers), __runInitializers(_this, _rules_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _rules_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.created_by = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _created_by_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _created_by_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            __runInitializers(_this, _deleted_at_extraInitializers);
            return _this;
        }
        return TaxRate_1;
    }(_classSuper));
    __setFunctionName(_classThis, "TaxRate");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _rate_decorators = [(0, mongoose_1.Prop)({ type: Number, default: null })];
        _code_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _name_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _is_default_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _is_combinable_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _tax_region_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'TaxRegion' })];
        _rules_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'TaxRateRule' }],
                default: [],
            })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _created_by_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _rate_decorators, { kind: "field", name: "rate", static: false, private: false, access: { has: function (obj) { return "rate" in obj; }, get: function (obj) { return obj.rate; }, set: function (obj, value) { obj.rate = value; } }, metadata: _metadata }, _rate_initializers, _rate_extraInitializers);
        __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _is_default_decorators, { kind: "field", name: "is_default", static: false, private: false, access: { has: function (obj) { return "is_default" in obj; }, get: function (obj) { return obj.is_default; }, set: function (obj, value) { obj.is_default = value; } }, metadata: _metadata }, _is_default_initializers, _is_default_extraInitializers);
        __esDecorate(null, null, _is_combinable_decorators, { kind: "field", name: "is_combinable", static: false, private: false, access: { has: function (obj) { return "is_combinable" in obj; }, get: function (obj) { return obj.is_combinable; }, set: function (obj, value) { obj.is_combinable = value; } }, metadata: _metadata }, _is_combinable_initializers, _is_combinable_extraInitializers);
        __esDecorate(null, null, _tax_region_decorators, { kind: "field", name: "tax_region", static: false, private: false, access: { has: function (obj) { return "tax_region" in obj; }, get: function (obj) { return obj.tax_region; }, set: function (obj, value) { obj.tax_region = value; } }, metadata: _metadata }, _tax_region_initializers, _tax_region_extraInitializers);
        __esDecorate(null, null, _rules_decorators, { kind: "field", name: "rules", static: false, private: false, access: { has: function (obj) { return "rules" in obj; }, get: function (obj) { return obj.rules; }, set: function (obj, value) { obj.rules = value; } }, metadata: _metadata }, _rules_initializers, _rules_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TaxRate = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TaxRate = _classThis;
}();
exports.TaxRate = TaxRate;
exports.TaxRateSchema = mongoose_1.SchemaFactory.createForClass(TaxRate);
// ✅ Indexes
exports.TaxRateSchema.index({ tax_region: 1 }, {
    name: 'IDX_tax_rate_tax_region_id',
    partialFilterExpression: { deleted_at: { $eq: null } },
});
exports.TaxRateSchema.index({ tax_region: 1 }, {
    name: 'IDX_single_default_region',
    unique: true,
    partialFilterExpression: {
        is_default: true,
        deleted_at: { $eq: null },
    },
});
// ✅ Cascade delete: remove related TaxRateRules
exports.TaxRateSchema.pre('findOneAndDelete', function (next) {
    return __awaiter(this, void 0, void 0, function () {
        var doc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.model.findOne(this.getQuery())];
                case 1:
                    doc = _a.sent();
                    if (!doc) return [3 /*break*/, 3];
                    return [4 /*yield*/, doc.model('TaxRateRule').deleteMany({ tax_rate: doc._id })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    next();
                    return [2 /*return*/];
            }
        });
    });
});
