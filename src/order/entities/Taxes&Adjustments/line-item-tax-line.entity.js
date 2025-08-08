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
exports.OrderLineItemTaxLineSchema = exports.OrderLineItemTaxLine = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderLineItemTaxLine = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_line_item_tax_lines',
            autoIndex: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "ordlitxl_".concat(doc._id.toString()); // Transformation pour l'API
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            }
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _tax_rate_id_decorators;
    var _tax_rate_id_initializers = [];
    var _tax_rate_id_extraInitializers = [];
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _rate_decorators;
    var _rate_initializers = [];
    var _rate_extraInitializers = [];
    var _provider_id_decorators;
    var _provider_id_initializers = [];
    var _provider_id_extraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _item_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderLineItemTaxLine = _classThis = /** @class */ (function (_super) {
        __extends(OrderLineItemTaxLine_1, _super);
        function OrderLineItemTaxLine_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.description = __runInitializers(_this, _description_initializers, void 0);
            _this.tax_rate_id = (__runInitializers(_this, _description_extraInitializers), __runInitializers(_this, _tax_rate_id_initializers, void 0));
            _this.code = (__runInitializers(_this, _tax_rate_id_extraInitializers), __runInitializers(_this, _code_initializers, void 0));
            _this.rate = (__runInitializers(_this, _code_extraInitializers), __runInitializers(_this, _rate_initializers, void 0));
            _this.provider_id = (__runInitializers(_this, _rate_extraInitializers), __runInitializers(_this, _provider_id_initializers, void 0));
            _this.item = (__runInitializers(_this, _provider_id_extraInitializers), __runInitializers(_this, _item_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _item_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            __runInitializers(_this, _deleted_at_extraInitializers);
            return _this;
        }
        return OrderLineItemTaxLine_1;
    }(_classSuper));
    __setFunctionName(_classThis, "OrderLineItemTaxLine");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _description_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _tax_rate_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _code_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _rate_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _provider_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _item_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderLineItem',
                required: true,
                index: true
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _tax_rate_id_decorators, { kind: "field", name: "tax_rate_id", static: false, private: false, access: { has: function (obj) { return "tax_rate_id" in obj; }, get: function (obj) { return obj.tax_rate_id; }, set: function (obj, value) { obj.tax_rate_id = value; } }, metadata: _metadata }, _tax_rate_id_initializers, _tax_rate_id_extraInitializers);
        __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
        __esDecorate(null, null, _rate_decorators, { kind: "field", name: "rate", static: false, private: false, access: { has: function (obj) { return "rate" in obj; }, get: function (obj) { return obj.rate; }, set: function (obj, value) { obj.rate = value; } }, metadata: _metadata }, _rate_initializers, _rate_extraInitializers);
        __esDecorate(null, null, _provider_id_decorators, { kind: "field", name: "provider_id", static: false, private: false, access: { has: function (obj) { return "provider_id" in obj; }, get: function (obj) { return obj.provider_id; }, set: function (obj, value) { obj.provider_id = value; } }, metadata: _metadata }, _provider_id_initializers, _provider_id_extraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _item_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderLineItemTaxLine = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderLineItemTaxLine = _classThis;
}();
exports.OrderLineItemTaxLine = OrderLineItemTaxLine;
exports.OrderLineItemTaxLineSchema = mongoose_1.SchemaFactory.createForClass(OrderLineItemTaxLine);
