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
exports.CampaignSchema = exports.Campaign = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Campaign = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true },
            collection: 'promotion_campaign',
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _campaign_identifier_decorators;
    var _campaign_identifier_initializers = [];
    var _campaign_identifier_extraInitializers = [];
    var _starts_at_decorators;
    var _starts_at_initializers = [];
    var _starts_at_extraInitializers = [];
    var _ends_at_decorators;
    var _ends_at_initializers = [];
    var _ends_at_extraInitializers = [];
    var _budget_decorators;
    var _budget_initializers = [];
    var _budget_extraInitializers = [];
    var _promotions_decorators;
    var _promotions_initializers = [];
    var _promotions_extraInitializers = [];
    var Campaign = _classThis = /** @class */ (function (_super) {
        __extends(Campaign_1, _super);
        function Campaign_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = __runInitializers(_this, _name_initializers, void 0);
            _this.description = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _description_initializers, void 0));
            _this.campaign_identifier = (__runInitializers(_this, _description_extraInitializers), __runInitializers(_this, _campaign_identifier_initializers, void 0));
            _this.starts_at = (__runInitializers(_this, _campaign_identifier_extraInitializers), __runInitializers(_this, _starts_at_initializers, void 0));
            _this.ends_at = (__runInitializers(_this, _starts_at_extraInitializers), __runInitializers(_this, _ends_at_initializers, void 0));
            _this.budget = (__runInitializers(_this, _ends_at_extraInitializers), __runInitializers(_this, _budget_initializers, void 0));
            _this.promotions = (__runInitializers(_this, _budget_extraInitializers), __runInitializers(_this, _promotions_initializers, void 0));
            __runInitializers(_this, _promotions_extraInitializers);
            return _this;
        }
        return Campaign_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Campaign");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _description_decorators = [(0, mongoose_1.Prop)()];
        _campaign_identifier_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true })];
        _starts_at_decorators = [(0, mongoose_1.Prop)()];
        _ends_at_decorators = [(0, mongoose_1.Prop)()];
        _budget_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Schema.Types.ObjectId,
                ref: 'CampaignBudget',
            })];
        _promotions_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Promotion' }],
            })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _campaign_identifier_decorators, { kind: "field", name: "campaign_identifier", static: false, private: false, access: { has: function (obj) { return "campaign_identifier" in obj; }, get: function (obj) { return obj.campaign_identifier; }, set: function (obj, value) { obj.campaign_identifier = value; } }, metadata: _metadata }, _campaign_identifier_initializers, _campaign_identifier_extraInitializers);
        __esDecorate(null, null, _starts_at_decorators, { kind: "field", name: "starts_at", static: false, private: false, access: { has: function (obj) { return "starts_at" in obj; }, get: function (obj) { return obj.starts_at; }, set: function (obj, value) { obj.starts_at = value; } }, metadata: _metadata }, _starts_at_initializers, _starts_at_extraInitializers);
        __esDecorate(null, null, _ends_at_decorators, { kind: "field", name: "ends_at", static: false, private: false, access: { has: function (obj) { return "ends_at" in obj; }, get: function (obj) { return obj.ends_at; }, set: function (obj, value) { obj.ends_at = value; } }, metadata: _metadata }, _ends_at_initializers, _ends_at_extraInitializers);
        __esDecorate(null, null, _budget_decorators, { kind: "field", name: "budget", static: false, private: false, access: { has: function (obj) { return "budget" in obj; }, get: function (obj) { return obj.budget; }, set: function (obj, value) { obj.budget = value; } }, metadata: _metadata }, _budget_initializers, _budget_extraInitializers);
        __esDecorate(null, null, _promotions_decorators, { kind: "field", name: "promotions", static: false, private: false, access: { has: function (obj) { return "promotions" in obj; }, get: function (obj) { return obj.promotions; }, set: function (obj, value) { obj.promotions = value; } }, metadata: _metadata }, _promotions_initializers, _promotions_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Campaign = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Campaign = _classThis;
}();
exports.Campaign = Campaign;
exports.CampaignSchema = mongoose_1.SchemaFactory.createForClass(Campaign);
