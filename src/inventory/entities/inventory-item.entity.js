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
exports.InventoryItemSchema = exports.InventoryItem = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var InventoryItem = function () {
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
    var _sku_decorators;
    var _sku_initializers = [];
    var _sku_extraInitializers = [];
    var _origin_country_decorators;
    var _origin_country_initializers = [];
    var _origin_country_extraInitializers = [];
    var _hs_code_decorators;
    var _hs_code_initializers = [];
    var _hs_code_extraInitializers = [];
    var _mid_code_decorators;
    var _mid_code_initializers = [];
    var _mid_code_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _weight_decorators;
    var _weight_initializers = [];
    var _weight_extraInitializers = [];
    var _length_decorators;
    var _length_initializers = [];
    var _length_extraInitializers = [];
    var _height_decorators;
    var _height_initializers = [];
    var _height_extraInitializers = [];
    var _width_decorators;
    var _width_initializers = [];
    var _width_extraInitializers = [];
    var _requires_shipping_decorators;
    var _requires_shipping_initializers = [];
    var _requires_shipping_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _thumbnail_decorators;
    var _thumbnail_initializers = [];
    var _thumbnail_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _location_levels_decorators;
    var _location_levels_initializers = [];
    var _location_levels_extraInitializers = [];
    var _reservation_items_decorators;
    var _reservation_items_initializers = [];
    var _reservation_items_extraInitializers = [];
    var _reserved_quantity_decorators;
    var _reserved_quantity_initializers = [];
    var _reserved_quantity_extraInitializers = [];
    var _stocked_quantity_decorators;
    var _stocked_quantity_initializers = [];
    var _stocked_quantity_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var InventoryItem = _classThis = /** @class */ (function () {
        function InventoryItem_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.sku = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _sku_initializers, void 0));
            this.origin_country = (__runInitializers(this, _sku_extraInitializers), __runInitializers(this, _origin_country_initializers, void 0));
            this.hs_code = (__runInitializers(this, _origin_country_extraInitializers), __runInitializers(this, _hs_code_initializers, void 0));
            this.mid_code = (__runInitializers(this, _hs_code_extraInitializers), __runInitializers(this, _mid_code_initializers, void 0));
            this.material = (__runInitializers(this, _mid_code_extraInitializers), __runInitializers(this, _material_initializers, void 0));
            this.weight = (__runInitializers(this, _material_extraInitializers), __runInitializers(this, _weight_initializers, void 0));
            this.length = (__runInitializers(this, _weight_extraInitializers), __runInitializers(this, _length_initializers, void 0));
            this.height = (__runInitializers(this, _length_extraInitializers), __runInitializers(this, _height_initializers, void 0));
            this.width = (__runInitializers(this, _height_extraInitializers), __runInitializers(this, _width_initializers, void 0));
            this.requires_shipping = (__runInitializers(this, _width_extraInitializers), __runInitializers(this, _requires_shipping_initializers, void 0));
            this.description = (__runInitializers(this, _requires_shipping_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.title = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.thumbnail = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _thumbnail_initializers, void 0));
            this.metadata = (__runInitializers(this, _thumbnail_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.location_levels = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _location_levels_initializers, void 0));
            this.reservation_items = (__runInitializers(this, _location_levels_extraInitializers), __runInitializers(this, _reservation_items_initializers, void 0));
            this.reserved_quantity = (__runInitializers(this, _reservation_items_extraInitializers), __runInitializers(this, _reserved_quantity_initializers, void 0));
            this.stocked_quantity = (__runInitializers(this, _reserved_quantity_extraInitializers), __runInitializers(this, _stocked_quantity_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _stocked_quantity_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            // Virtuals
            this.location_levels_details = __runInitializers(this, _deleted_at_extraInitializers);
        }
        return InventoryItem_1;
    }());
    __setFunctionName(_classThis, "InventoryItem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                default: function () { return "iitem_".concat(new mongoose_2.Types.ObjectId().toString()); },
            })];
        _sku_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, default: null })];
        _origin_country_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _hs_code_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, default: null })];
        _mid_code_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, default: null })];
        _material_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _weight_decorators = [(0, mongoose_1.Prop)({ type: Number, default: null })];
        _length_decorators = [(0, mongoose_1.Prop)({ type: Number, default: null })];
        _height_decorators = [(0, mongoose_1.Prop)({ type: Number, default: null })];
        _width_decorators = [(0, mongoose_1.Prop)({ type: Number, default: null })];
        _requires_shipping_decorators = [(0, mongoose_1.Prop)({ type: Boolean, default: true })];
        _description_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, default: null })];
        _title_decorators = [(0, mongoose_1.Prop)({ type: String, index: true, default: null })];
        _thumbnail_decorators = [(0, mongoose_1.Prop)({ type: String, default: null })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _location_levels_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'InventoryLevel' }], default: [] })];
        _reservation_items_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ReservationItem' }], default: [] })];
        _reserved_quantity_decorators = [(0, mongoose_1.Prop)({ type: Number, default: 0 })];
        _stocked_quantity_decorators = [(0, mongoose_1.Prop)({ type: Number, default: 0 })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _sku_decorators, { kind: "field", name: "sku", static: false, private: false, access: { has: function (obj) { return "sku" in obj; }, get: function (obj) { return obj.sku; }, set: function (obj, value) { obj.sku = value; } }, metadata: _metadata }, _sku_initializers, _sku_extraInitializers);
        __esDecorate(null, null, _origin_country_decorators, { kind: "field", name: "origin_country", static: false, private: false, access: { has: function (obj) { return "origin_country" in obj; }, get: function (obj) { return obj.origin_country; }, set: function (obj, value) { obj.origin_country = value; } }, metadata: _metadata }, _origin_country_initializers, _origin_country_extraInitializers);
        __esDecorate(null, null, _hs_code_decorators, { kind: "field", name: "hs_code", static: false, private: false, access: { has: function (obj) { return "hs_code" in obj; }, get: function (obj) { return obj.hs_code; }, set: function (obj, value) { obj.hs_code = value; } }, metadata: _metadata }, _hs_code_initializers, _hs_code_extraInitializers);
        __esDecorate(null, null, _mid_code_decorators, { kind: "field", name: "mid_code", static: false, private: false, access: { has: function (obj) { return "mid_code" in obj; }, get: function (obj) { return obj.mid_code; }, set: function (obj, value) { obj.mid_code = value; } }, metadata: _metadata }, _mid_code_initializers, _mid_code_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _weight_decorators, { kind: "field", name: "weight", static: false, private: false, access: { has: function (obj) { return "weight" in obj; }, get: function (obj) { return obj.weight; }, set: function (obj, value) { obj.weight = value; } }, metadata: _metadata }, _weight_initializers, _weight_extraInitializers);
        __esDecorate(null, null, _length_decorators, { kind: "field", name: "length", static: false, private: false, access: { has: function (obj) { return "length" in obj; }, get: function (obj) { return obj.length; }, set: function (obj, value) { obj.length = value; } }, metadata: _metadata }, _length_initializers, _length_extraInitializers);
        __esDecorate(null, null, _height_decorators, { kind: "field", name: "height", static: false, private: false, access: { has: function (obj) { return "height" in obj; }, get: function (obj) { return obj.height; }, set: function (obj, value) { obj.height = value; } }, metadata: _metadata }, _height_initializers, _height_extraInitializers);
        __esDecorate(null, null, _width_decorators, { kind: "field", name: "width", static: false, private: false, access: { has: function (obj) { return "width" in obj; }, get: function (obj) { return obj.width; }, set: function (obj, value) { obj.width = value; } }, metadata: _metadata }, _width_initializers, _width_extraInitializers);
        __esDecorate(null, null, _requires_shipping_decorators, { kind: "field", name: "requires_shipping", static: false, private: false, access: { has: function (obj) { return "requires_shipping" in obj; }, get: function (obj) { return obj.requires_shipping; }, set: function (obj, value) { obj.requires_shipping = value; } }, metadata: _metadata }, _requires_shipping_initializers, _requires_shipping_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _thumbnail_decorators, { kind: "field", name: "thumbnail", static: false, private: false, access: { has: function (obj) { return "thumbnail" in obj; }, get: function (obj) { return obj.thumbnail; }, set: function (obj, value) { obj.thumbnail = value; } }, metadata: _metadata }, _thumbnail_initializers, _thumbnail_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _location_levels_decorators, { kind: "field", name: "location_levels", static: false, private: false, access: { has: function (obj) { return "location_levels" in obj; }, get: function (obj) { return obj.location_levels; }, set: function (obj, value) { obj.location_levels = value; } }, metadata: _metadata }, _location_levels_initializers, _location_levels_extraInitializers);
        __esDecorate(null, null, _reservation_items_decorators, { kind: "field", name: "reservation_items", static: false, private: false, access: { has: function (obj) { return "reservation_items" in obj; }, get: function (obj) { return obj.reservation_items; }, set: function (obj, value) { obj.reservation_items = value; } }, metadata: _metadata }, _reservation_items_initializers, _reservation_items_extraInitializers);
        __esDecorate(null, null, _reserved_quantity_decorators, { kind: "field", name: "reserved_quantity", static: false, private: false, access: { has: function (obj) { return "reserved_quantity" in obj; }, get: function (obj) { return obj.reserved_quantity; }, set: function (obj, value) { obj.reserved_quantity = value; } }, metadata: _metadata }, _reserved_quantity_initializers, _reserved_quantity_extraInitializers);
        __esDecorate(null, null, _stocked_quantity_decorators, { kind: "field", name: "stocked_quantity", static: false, private: false, access: { has: function (obj) { return "stocked_quantity" in obj; }, get: function (obj) { return obj.stocked_quantity; }, set: function (obj, value) { obj.stocked_quantity = value; } }, metadata: _metadata }, _stocked_quantity_initializers, _stocked_quantity_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        InventoryItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return InventoryItem = _classThis;
}();
exports.InventoryItem = InventoryItem;
exports.InventoryItemSchema = mongoose_1.SchemaFactory.createForClass(InventoryItem);
