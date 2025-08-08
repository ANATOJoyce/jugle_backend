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
exports.LineItemTaxLineSchema = exports.LineItemTaxLine = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var LineItemTaxLine = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'cart_line_item_tax_line'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _rate_decorators;
    var _rate_initializers = [];
    var _rate_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _provider_id_decorators;
    var _provider_id_initializers = [];
    var _provider_id_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _tax_rate_id_decorators;
    var _tax_rate_id_initializers = [];
    var _tax_rate_id_extraInitializers = [];
    var _item_decorators;
    var _item_initializers = [];
    var _item_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var _createAt_decorators;
    var _createAt_initializers = [];
    var _createAt_extraInitializers = [];
    var LineItemTaxLine = _classThis = /** @class */ (function () {
        function LineItemTaxLine_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.description = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.code = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _code_initializers, void 0));
            this.rate = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _rate_initializers, void 0));
            this.amount = (__runInitializers(this, _rate_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.provider_id = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _provider_id_initializers, void 0));
            this.metadata = (__runInitializers(this, _provider_id_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.tax_rate_id = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _tax_rate_id_initializers, void 0));
            this.item = (__runInitializers(this, _tax_rate_id_extraInitializers), __runInitializers(this, _item_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _item_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            this.createAt = (__runInitializers(this, _deleted_at_extraInitializers), __runInitializers(this, _createAt_initializers, void 0));
            __runInitializers(this, _createAt_extraInitializers);
        }
        return LineItemTaxLine_1;
    }());
    __setFunctionName(_classThis, "LineItemTaxLine");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true })];
        _description_decorators = [(0, mongoose_1.Prop)()];
        _code_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _rate_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true })];
        _amount_decorators = [(0, mongoose_1.Prop)({ type: Number, required: true })];
        _provider_id_decorators = [(0, mongoose_1.Prop)()];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _tax_rate_id_decorators = [(0, mongoose_1.Prop)()];
        _item_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'LineItem', required: true })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)()];
        _createAt_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
        __esDecorate(null, null, _rate_decorators, { kind: "field", name: "rate", static: false, private: false, access: { has: function (obj) { return "rate" in obj; }, get: function (obj) { return obj.rate; }, set: function (obj, value) { obj.rate = value; } }, metadata: _metadata }, _rate_initializers, _rate_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _provider_id_decorators, { kind: "field", name: "provider_id", static: false, private: false, access: { has: function (obj) { return "provider_id" in obj; }, get: function (obj) { return obj.provider_id; }, set: function (obj, value) { obj.provider_id = value; } }, metadata: _metadata }, _provider_id_initializers, _provider_id_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _tax_rate_id_decorators, { kind: "field", name: "tax_rate_id", static: false, private: false, access: { has: function (obj) { return "tax_rate_id" in obj; }, get: function (obj) { return obj.tax_rate_id; }, set: function (obj, value) { obj.tax_rate_id = value; } }, metadata: _metadata }, _tax_rate_id_initializers, _tax_rate_id_extraInitializers);
        __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _item_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, null, _createAt_decorators, { kind: "field", name: "createAt", static: false, private: false, access: { has: function (obj) { return "createAt" in obj; }, get: function (obj) { return obj.createAt; }, set: function (obj, value) { obj.createAt = value; } }, metadata: _metadata }, _createAt_initializers, _createAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LineItemTaxLine = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LineItemTaxLine = _classThis;
}();
exports.LineItemTaxLine = LineItemTaxLine;
exports.LineItemTaxLineSchema = mongoose_1.SchemaFactory.createForClass(LineItemTaxLine);
