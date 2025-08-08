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
exports.OrderClaimItemImageSchema = exports.OrderClaimItemImage = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var OrderClaimItemImage = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'order_claim_item_images',
            autoIndex: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = "climg_".concat(doc._id.toString());
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                }
            },
            id: false // Désactive le virtual getter 'id' par défaut de Mongoose
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _claim_item_decorators;
    var _claim_item_initializers = [];
    var _claim_item_extraInitializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _url_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var OrderClaimItemImage = _classThis = /** @class */ (function () {
        function OrderClaimItemImage_1() {
            this.claim_item = __runInitializers(this, _claim_item_initializers, void 0);
            this.url = (__runInitializers(this, _claim_item_extraInitializers), __runInitializers(this, _url_initializers, void 0));
            this.metadata = (__runInitializers(this, _url_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            // Déclaration explicite pour TypeScript
            this._id = __runInitializers(this, _deleted_at_extraInitializers);
        }
        return OrderClaimItemImage_1;
    }());
    __setFunctionName(_classThis, "OrderClaimItemImage");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _claim_item_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'OrderClaimItem',
                required: true,
                index: true
            })];
        _url_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, required: false })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, required: false, index: true })];
        __esDecorate(null, null, _claim_item_decorators, { kind: "field", name: "claim_item", static: false, private: false, access: { has: function (obj) { return "claim_item" in obj; }, get: function (obj) { return obj.claim_item; }, set: function (obj, value) { obj.claim_item = value; } }, metadata: _metadata }, _claim_item_initializers, _claim_item_extraInitializers);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderClaimItemImage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderClaimItemImage = _classThis;
}();
exports.OrderClaimItemImage = OrderClaimItemImage;
exports.OrderClaimItemImageSchema = mongoose_1.SchemaFactory.createForClass(OrderClaimItemImage);
