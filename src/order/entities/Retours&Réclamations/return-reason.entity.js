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
exports.ReturnReasonSchema = exports.ReturnReason = void 0;
// return-reason.entity.ts
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ReturnReason = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'return_reasons',
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "rr_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _label_decorators;
    var _label_initializers = [];
    var _label_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _parent_return_reason_decorators;
    var _parent_return_reason_initializers = [];
    var _parent_return_reason_extraInitializers = [];
    var _return_reason_children_decorators;
    var _return_reason_children_initializers = [];
    var _return_reason_children_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var ReturnReason = _classThis = /** @class */ (function () {
        function ReturnReason_1() {
            this.value = __runInitializers(this, _value_initializers, void 0);
            this.label = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _label_initializers, void 0));
            this.description = (__runInitializers(this, _label_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.metadata = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.parent_return_reason = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _parent_return_reason_initializers, void 0));
            this.return_reason_children = (__runInitializers(this, _parent_return_reason_extraInitializers), __runInitializers(this, _return_reason_children_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _return_reason_children_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return ReturnReason_1;
    }());
    __setFunctionName(_classThis, "ReturnReason");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _value_decorators = [(0, mongoose_1.Prop)({ type: String, required: true, index: true, text: true })];
        _label_decorators = [(0, mongoose_1.Prop)({ type: String, required: true, index: true, text: true })];
        _description_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _parent_return_reason_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'ReturnReason',
            })];
        _return_reason_children_decorators = [(0, mongoose_1.Prop)({
                type: [{ type: mongoose_2.Types.ObjectId, ref: 'ReturnReason' }],
                default: [],
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
        __esDecorate(null, null, _label_decorators, { kind: "field", name: "label", static: false, private: false, access: { has: function (obj) { return "label" in obj; }, get: function (obj) { return obj.label; }, set: function (obj, value) { obj.label = value; } }, metadata: _metadata }, _label_initializers, _label_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _parent_return_reason_decorators, { kind: "field", name: "parent_return_reason", static: false, private: false, access: { has: function (obj) { return "parent_return_reason" in obj; }, get: function (obj) { return obj.parent_return_reason; }, set: function (obj, value) { obj.parent_return_reason = value; } }, metadata: _metadata }, _parent_return_reason_initializers, _parent_return_reason_extraInitializers);
        __esDecorate(null, null, _return_reason_children_decorators, { kind: "field", name: "return_reason_children", static: false, private: false, access: { has: function (obj) { return "return_reason_children" in obj; }, get: function (obj) { return obj.return_reason_children; }, set: function (obj, value) { obj.return_reason_children = value; } }, metadata: _metadata }, _return_reason_children_initializers, _return_reason_children_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReturnReason = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReturnReason = _classThis;
}();
exports.ReturnReason = ReturnReason;
exports.ReturnReasonSchema = mongoose_1.SchemaFactory.createForClass(ReturnReason);
