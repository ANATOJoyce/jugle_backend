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
exports.InventoryLevelSchema = exports.InventoryLevel = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var InventoryLevel = function () {
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
    var _location_id_decorators;
    var _location_id_initializers = [];
    var _location_id_extraInitializers = [];
    var _stocked_quantity_decorators;
    var _stocked_quantity_initializers = [];
    var _stocked_quantity_extraInitializers = [];
    var _reserved_quantity_decorators;
    var _reserved_quantity_initializers = [];
    var _reserved_quantity_extraInitializers = [];
    var _incoming_quantity_decorators;
    var _incoming_quantity_initializers = [];
    var _incoming_quantity_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _inventory_item_decorators;
    var _inventory_item_initializers = [];
    var _inventory_item_extraInitializers = [];
    var _available_quantity_decorators;
    var _available_quantity_initializers = [];
    var _available_quantity_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var InventoryLevel = _classThis = /** @class */ (function () {
        function InventoryLevel_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.location_id = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _location_id_initializers, void 0));
            this.stocked_quantity = (__runInitializers(this, _location_id_extraInitializers), __runInitializers(this, _stocked_quantity_initializers, void 0));
            this.reserved_quantity = (__runInitializers(this, _stocked_quantity_extraInitializers), __runInitializers(this, _reserved_quantity_initializers, void 0));
            this.incoming_quantity = (__runInitializers(this, _reserved_quantity_extraInitializers), __runInitializers(this, _incoming_quantity_initializers, void 0));
            this.metadata = (__runInitializers(this, _incoming_quantity_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.inventory_item = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _inventory_item_initializers, void 0));
            this.available_quantity = (__runInitializers(this, _inventory_item_extraInitializers), __runInitializers(this, _available_quantity_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _available_quantity_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return InventoryLevel_1;
    }());
    __setFunctionName(_classThis, "InventoryLevel");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                unique: true,
                default: function () { return "ilev_".concat(new mongoose_2.Types.ObjectId()); }
            })];
        _location_id_decorators = [(0, mongoose_1.Prop)({
                type: String,
                required: true,
                index: true
            })];
        _stocked_quantity_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                default: 0,
                get: function (v) { return Math.round(v); },
                set: function (v) { return Math.round(v); }
            })];
        _reserved_quantity_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                default: 0,
                get: function (v) { return Math.round(v); },
                set: function (v) { return Math.round(v); }
            })];
        _incoming_quantity_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                default: 0,
                get: function (v) { return Math.round(v); },
                set: function (v) { return Math.round(v); }
            })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _inventory_item_decorators = [(0, mongoose_1.Prop)({
                type: mongoose_2.Types.ObjectId,
                ref: 'InventoryItem',
                required: true,
                index: true
            })];
        _available_quantity_decorators = [(0, mongoose_1.Prop)({
                type: Number,
                default: 0,
                virtual: true,
                get: function () {
                    return this.stocked_quantity - this.reserved_quantity;
                }
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null, select: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _location_id_decorators, { kind: "field", name: "location_id", static: false, private: false, access: { has: function (obj) { return "location_id" in obj; }, get: function (obj) { return obj.location_id; }, set: function (obj, value) { obj.location_id = value; } }, metadata: _metadata }, _location_id_initializers, _location_id_extraInitializers);
        __esDecorate(null, null, _stocked_quantity_decorators, { kind: "field", name: "stocked_quantity", static: false, private: false, access: { has: function (obj) { return "stocked_quantity" in obj; }, get: function (obj) { return obj.stocked_quantity; }, set: function (obj, value) { obj.stocked_quantity = value; } }, metadata: _metadata }, _stocked_quantity_initializers, _stocked_quantity_extraInitializers);
        __esDecorate(null, null, _reserved_quantity_decorators, { kind: "field", name: "reserved_quantity", static: false, private: false, access: { has: function (obj) { return "reserved_quantity" in obj; }, get: function (obj) { return obj.reserved_quantity; }, set: function (obj, value) { obj.reserved_quantity = value; } }, metadata: _metadata }, _reserved_quantity_initializers, _reserved_quantity_extraInitializers);
        __esDecorate(null, null, _incoming_quantity_decorators, { kind: "field", name: "incoming_quantity", static: false, private: false, access: { has: function (obj) { return "incoming_quantity" in obj; }, get: function (obj) { return obj.incoming_quantity; }, set: function (obj, value) { obj.incoming_quantity = value; } }, metadata: _metadata }, _incoming_quantity_initializers, _incoming_quantity_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _inventory_item_decorators, { kind: "field", name: "inventory_item", static: false, private: false, access: { has: function (obj) { return "inventory_item" in obj; }, get: function (obj) { return obj.inventory_item; }, set: function (obj, value) { obj.inventory_item = value; } }, metadata: _metadata }, _inventory_item_initializers, _inventory_item_extraInitializers);
        __esDecorate(null, null, _available_quantity_decorators, { kind: "field", name: "available_quantity", static: false, private: false, access: { has: function (obj) { return "available_quantity" in obj; }, get: function (obj) { return obj.available_quantity; }, set: function (obj, value) { obj.available_quantity = value; } }, metadata: _metadata }, _available_quantity_initializers, _available_quantity_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        InventoryLevel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return InventoryLevel = _classThis;
}();
exports.InventoryLevel = InventoryLevel;
exports.InventoryLevelSchema = mongoose_1.SchemaFactory.createForClass(InventoryLevel);
