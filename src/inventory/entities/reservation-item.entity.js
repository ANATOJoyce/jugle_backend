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
exports.ReservationItemSchema = exports.ReservationItem = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ReservationItem = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: {
                virtuals: true,
                transform: function (doc, ret) {
                    ret.id = ret._id;
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                }
            }
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _line_item_id_decorators;
    var _line_item_id_initializers = [];
    var _line_item_id_extraInitializers = [];
    var _allow_backorder_decorators;
    var _allow_backorder_initializers = [];
    var _allow_backorder_extraInitializers = [];
    var _location_id_decorators;
    var _location_id_initializers = [];
    var _location_id_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _raw_quantity_decorators;
    var _raw_quantity_initializers = [];
    var _raw_quantity_extraInitializers = [];
    var _external_id_decorators;
    var _external_id_initializers = [];
    var _external_id_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _inventory_item_decorators;
    var _inventory_item_initializers = [];
    var _inventory_item_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var ReservationItem = _classThis = /** @class */ (function () {
        function ReservationItem_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.line_item_id = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _line_item_id_initializers, void 0));
            this.allow_backorder = (__runInitializers(this, _line_item_id_extraInitializers), __runInitializers(this, _allow_backorder_initializers, void 0));
            this.location_id = (__runInitializers(this, _allow_backorder_extraInitializers), __runInitializers(this, _location_id_initializers, void 0));
            this.quantity = (__runInitializers(this, _location_id_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
            this.raw_quantity = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _raw_quantity_initializers, void 0));
            this.external_id = (__runInitializers(this, _raw_quantity_extraInitializers), __runInitializers(this, _external_id_initializers, void 0));
            this.description = (__runInitializers(this, _external_id_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.created_by = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _created_by_initializers, void 0));
            this.metadata = (__runInitializers(this, _created_by_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.inventory_item = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _inventory_item_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _inventory_item_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            // Virtual for populated inventory item
            this.inventory_item_details = __runInitializers(this, _deleted_at_extraInitializers);
        }
        return ReservationItem_1;
    }());
    __setFunctionName(_classThis, "ReservationItem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                default: function () { return "resitem_".concat(new mongoose_2.Types.ObjectId().toString()); },
            })];
        _line_item_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null, index: true })];
        _allow_backorder_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: false })];
        _location_id_decorators = [(0, mongoose_1.Prop)({ type: String, required: true, index: true })];
        _quantity_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                required: true,
                get: function (v) { return Math.round(v); },
                set: function (v) { return Math.round(v); }
            })];
        _raw_quantity_decorators = [(0, mongoose_1.Prop)({ type: Object, required: true })];
        _external_id_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _description_decorators = [(0, mongoose_1.Prop)({ type: String, default: null, index: true })];
        _created_by_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _inventory_item_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'InventoryItem',
                required: true,
                index: true
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _line_item_id_decorators, { kind: "field", name: "line_item_id", static: false, private: false, access: { has: function (obj) { return "line_item_id" in obj; }, get: function (obj) { return obj.line_item_id; }, set: function (obj, value) { obj.line_item_id = value; } }, metadata: _metadata }, _line_item_id_initializers, _line_item_id_extraInitializers);
        __esDecorate(null, null, _allow_backorder_decorators, { kind: "field", name: "allow_backorder", static: false, private: false, access: { has: function (obj) { return "allow_backorder" in obj; }, get: function (obj) { return obj.allow_backorder; }, set: function (obj, value) { obj.allow_backorder = value; } }, metadata: _metadata }, _allow_backorder_initializers, _allow_backorder_extraInitializers);
        __esDecorate(null, null, _location_id_decorators, { kind: "field", name: "location_id", static: false, private: false, access: { has: function (obj) { return "location_id" in obj; }, get: function (obj) { return obj.location_id; }, set: function (obj, value) { obj.location_id = value; } }, metadata: _metadata }, _location_id_initializers, _location_id_extraInitializers);
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _raw_quantity_decorators, { kind: "field", name: "raw_quantity", static: false, private: false, access: { has: function (obj) { return "raw_quantity" in obj; }, get: function (obj) { return obj.raw_quantity; }, set: function (obj, value) { obj.raw_quantity = value; } }, metadata: _metadata }, _raw_quantity_initializers, _raw_quantity_extraInitializers);
        __esDecorate(null, null, _external_id_decorators, { kind: "field", name: "external_id", static: false, private: false, access: { has: function (obj) { return "external_id" in obj; }, get: function (obj) { return obj.external_id; }, set: function (obj, value) { obj.external_id = value; } }, metadata: _metadata }, _external_id_initializers, _external_id_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _inventory_item_decorators, { kind: "field", name: "inventory_item", static: false, private: false, access: { has: function (obj) { return "inventory_item" in obj; }, get: function (obj) { return obj.inventory_item; }, set: function (obj, value) { obj.inventory_item = value; } }, metadata: _metadata }, _inventory_item_initializers, _inventory_item_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReservationItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReservationItem = _classThis;
}();
exports.ReservationItem = ReservationItem;
exports.ReservationItemSchema = mongoose_1.SchemaFactory.createForClass(ReservationItem);
