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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFulfillmentItemDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateFulfillmentItemDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _sku_decorators;
    var _sku_initializers = [];
    var _sku_extraInitializers = [];
    var _barcode_decorators;
    var _barcode_initializers = [];
    var _barcode_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _line_item_id_decorators;
    var _line_item_id_initializers = [];
    var _line_item_id_extraInitializers = [];
    var _inventory_item_id_decorators;
    var _inventory_item_id_initializers = [];
    var _inventory_item_id_extraInitializers = [];
    var _fulfillment_decorators;
    var _fulfillment_initializers = [];
    var _fulfillment_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateFulfillmentItemDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.sku = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _sku_initializers, void 0));
                this.barcode = (__runInitializers(this, _sku_extraInitializers), __runInitializers(this, _barcode_initializers, void 0));
                this.quantity = (__runInitializers(this, _barcode_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
                this.line_item_id = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _line_item_id_initializers, void 0));
                this.inventory_item_id = (__runInitializers(this, _line_item_id_extraInitializers), __runInitializers(this, _inventory_item_id_initializers, void 0));
                this.fulfillment = (__runInitializers(this, _inventory_item_id_extraInitializers), __runInitializers(this, _fulfillment_initializers, void 0));
                this.deleted_at = (__runInitializers(this, _fulfillment_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
                __runInitializers(this, _deleted_at_extraInitializers);
            }
            return CreateFulfillmentItemDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({ description: 'Unique ID with prefix "fulit"', example: 'fulit_x1y2z3a4b' }), (0, class_validator_1.IsString)()];
            _title_decorators = [(0, swagger_1.ApiProperty)({ description: 'Title of the item' }), (0, class_validator_1.IsString)()];
            _sku_decorators = [(0, swagger_1.ApiProperty)({ description: 'SKU of the item' }), (0, class_validator_1.IsString)()];
            _barcode_decorators = [(0, swagger_1.ApiProperty)({ description: 'Barcode of the item' }), (0, class_validator_1.IsString)()];
            _quantity_decorators = [(0, swagger_1.ApiProperty)({ description: 'Quantity, must be positive' }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)()];
            _line_item_id_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Line item ID' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _inventory_item_id_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Inventory item ID' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _fulfillment_decorators = [(0, swagger_1.ApiProperty)({ description: 'Fulfillment reference ID (ObjectId)' }), (0, class_validator_1.IsString)()];
            _deleted_at_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Deletion date' }), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _sku_decorators, { kind: "field", name: "sku", static: false, private: false, access: { has: function (obj) { return "sku" in obj; }, get: function (obj) { return obj.sku; }, set: function (obj, value) { obj.sku = value; } }, metadata: _metadata }, _sku_initializers, _sku_extraInitializers);
            __esDecorate(null, null, _barcode_decorators, { kind: "field", name: "barcode", static: false, private: false, access: { has: function (obj) { return "barcode" in obj; }, get: function (obj) { return obj.barcode; }, set: function (obj, value) { obj.barcode = value; } }, metadata: _metadata }, _barcode_initializers, _barcode_extraInitializers);
            __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
            __esDecorate(null, null, _line_item_id_decorators, { kind: "field", name: "line_item_id", static: false, private: false, access: { has: function (obj) { return "line_item_id" in obj; }, get: function (obj) { return obj.line_item_id; }, set: function (obj, value) { obj.line_item_id = value; } }, metadata: _metadata }, _line_item_id_initializers, _line_item_id_extraInitializers);
            __esDecorate(null, null, _inventory_item_id_decorators, { kind: "field", name: "inventory_item_id", static: false, private: false, access: { has: function (obj) { return "inventory_item_id" in obj; }, get: function (obj) { return obj.inventory_item_id; }, set: function (obj, value) { obj.inventory_item_id = value; } }, metadata: _metadata }, _inventory_item_id_initializers, _inventory_item_id_extraInitializers);
            __esDecorate(null, null, _fulfillment_decorators, { kind: "field", name: "fulfillment", static: false, private: false, access: { has: function (obj) { return "fulfillment" in obj; }, get: function (obj) { return obj.fulfillment; }, set: function (obj, value) { obj.fulfillment = value; } }, metadata: _metadata }, _fulfillment_initializers, _fulfillment_extraInitializers);
            __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateFulfillmentItemDto = CreateFulfillmentItemDto;
