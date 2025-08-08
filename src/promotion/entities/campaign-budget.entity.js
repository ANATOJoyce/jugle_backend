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
exports.CampaignBudgetSchema = exports.CampaignBudget = exports.CampaignBudgetType = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var CampaignBudgetType;
(function (CampaignBudgetType) {
    CampaignBudgetType["SPEND"] = "spend";
    CampaignBudgetType["USAGE"] = "usage";
})(CampaignBudgetType || (exports.CampaignBudgetType = CampaignBudgetType = {}));
var CampaignBudget = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            collection: 'promotion_campaign_budget',
            timestamps: true,
            toJSON: {
                virtuals: true,
                getters: true
            },
            toObject: {
                virtuals: true,
                getters: true
            }
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _currency_code_decorators;
    var _currency_code_initializers = [];
    var _currency_code_extraInitializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    var _limit_extraInitializers = [];
    var _used_decorators;
    var _used_initializers = [];
    var _used_extraInitializers = [];
    var _campaign_decorators;
    var _campaign_initializers = [];
    var _campaign_extraInitializers = [];
    var CampaignBudget = _classThis = /** @class */ (function (_super) {
        __extends(CampaignBudget_1, _super);
        function CampaignBudget_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = __runInitializers(_this, _type_initializers, void 0);
            _this.currency_code = (__runInitializers(_this, _type_extraInitializers), __runInitializers(_this, _currency_code_initializers, void 0));
            _this.limit = (__runInitializers(_this, _currency_code_extraInitializers), __runInitializers(_this, _limit_initializers, void 0));
            _this.used = (__runInitializers(_this, _limit_extraInitializers), __runInitializers(_this, _used_initializers, void 0));
            _this.campaign = (__runInitializers(_this, _used_extraInitializers), __runInitializers(_this, _campaign_initializers, void 0));
            __runInitializers(_this, _campaign_extraInitializers);
            return _this;
        }
        return CampaignBudget_1;
    }(_classSuper));
    __setFunctionName(_classThis, "CampaignBudget");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _type_decorators = [(0, mongoose_1.Prop)({
                type: String,
                enum: Object.values(CampaignBudgetType),
                required: true,
                index: true
            })];
        _currency_code_decorators = [(0, mongoose_1.Prop)()];
        _limit_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                get: function (v) { return (v ? Number(v.toString()) : v); },
                set: function (v) { return (v ? Number(v.toString()) : v); }
            })];
        _used_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                default: 0,
                get: function (v) { return (v ? Number(v.toString()) : v); },
                set: function (v) { return (v ? Number(v.toString()) : v); }
            })];
        _campaign_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Campaign',
                required: true
            })];
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _currency_code_decorators, { kind: "field", name: "currency_code", static: false, private: false, access: { has: function (obj) { return "currency_code" in obj; }, get: function (obj) { return obj.currency_code; }, set: function (obj, value) { obj.currency_code = value; } }, metadata: _metadata }, _currency_code_initializers, _currency_code_extraInitializers);
        __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _limit_extraInitializers);
        __esDecorate(null, null, _used_decorators, { kind: "field", name: "used", static: false, private: false, access: { has: function (obj) { return "used" in obj; }, get: function (obj) { return obj.used; }, set: function (obj, value) { obj.used = value; } }, metadata: _metadata }, _used_initializers, _used_extraInitializers);
        __esDecorate(null, null, _campaign_decorators, { kind: "field", name: "campaign", static: false, private: false, access: { has: function (obj) { return "campaign" in obj; }, get: function (obj) { return obj.campaign; }, set: function (obj, value) { obj.campaign = value; } }, metadata: _metadata }, _campaign_initializers, _campaign_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CampaignBudget = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CampaignBudget = _classThis;
}();
exports.CampaignBudget = CampaignBudget;
exports.CampaignBudgetSchema = mongoose_1.SchemaFactory.createForClass(CampaignBudget);
