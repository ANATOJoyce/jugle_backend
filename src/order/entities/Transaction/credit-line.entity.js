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
exports.OrderCreditLineSchema = exports.OrderCreditLine = void 0;
// order-credit-line.entity.ts
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderCreditLine = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_credit_lines',
            autoIndex: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "ordcl_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
            id: false, // Désactive le virtual getter 'id' par défaut
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var _reference_decorators;
    var _reference_initializers = [];
    var _reference_extraInitializers = [];
    var _reference_id_decorators;
    var _reference_id_initializers = [];
    var _reference_id_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _raw_amount_decorators;
    var _raw_amount_initializers = [];
    var _raw_amount_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderCreditLine = _classThis = /** @class */ (function () {
        function OrderCreditLine_1() {
            this.order = __runInitializers(this, _order_initializers, void 0);
            this.reference = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _reference_initializers, void 0));
            this.reference_id = (__runInitializers(this, _reference_extraInitializers), __runInitializers(this, _reference_id_initializers, void 0));
            this.amount = (__runInitializers(this, _reference_id_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.raw_amount = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _raw_amount_initializers, void 0));
            this.metadata = (__runInitializers(this, _raw_amount_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            // Déclaration explicite pour TypeScript
            this._id = __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderCreditLine_1;
    }());
    __setFunctionName(_classThis, "OrderCreditLine");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _order_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'Order',
                required: true,
                index: true,
            })];
        _reference_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: false,
            })];
        _reference_id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: false,
            })];
        _amount_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                required: true,
            })];
        _raw_amount_decorators = [(0, mongoose_1.Prop)({
                type: Object,
                required: true,
            })];
        _metadata_decorators = [(0, mongoose_1.Prop)({
                type: Object,
                required: false,
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({
                type: Date,
                required: false,
                index: true,
            })];
        __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
        __esDecorate(null, null, _reference_decorators, { kind: "field", name: "reference", static: false, private: false, access: { has: function (obj) { return "reference" in obj; }, get: function (obj) { return obj.reference; }, set: function (obj, value) { obj.reference = value; } }, metadata: _metadata }, _reference_initializers, _reference_extraInitializers);
        __esDecorate(null, null, _reference_id_decorators, { kind: "field", name: "reference_id", static: false, private: false, access: { has: function (obj) { return "reference_id" in obj; }, get: function (obj) { return obj.reference_id; }, set: function (obj, value) { obj.reference_id = value; } }, metadata: _metadata }, _reference_id_initializers, _reference_id_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _raw_amount_decorators, { kind: "field", name: "raw_amount", static: false, private: false, access: { has: function (obj) { return "raw_amount" in obj; }, get: function (obj) { return obj.raw_amount; }, set: function (obj, value) { obj.raw_amount = value; } }, metadata: _metadata }, _raw_amount_initializers, _raw_amount_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderCreditLine = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderCreditLine = _classThis;
}();
exports.OrderCreditLine = OrderCreditLine;
exports.OrderCreditLineSchema = mongoose_1.SchemaFactory.createForClass(OrderCreditLine);
