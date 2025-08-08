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
exports.ProductCategorySchema = exports.ProductCategory = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ProductCategory = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
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
    var _handle_decorators;
    var _handle_initializers = [];
    var _handle_extraInitializers = [];
    var _mpath_decorators;
    var _mpath_initializers = [];
    var _mpath_extraInitializers = [];
    var _is_active_decorators;
    var _is_active_initializers = [];
    var _is_active_extraInitializers = [];
    var _is_internal_decorators;
    var _is_internal_initializers = [];
    var _is_internal_extraInitializers = [];
    var _rank_decorators;
    var _rank_initializers = [];
    var _rank_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _parent_category_decorators;
    var _parent_category_initializers = [];
    var _parent_category_extraInitializers = [];
    var _category_children_decorators;
    var _category_children_initializers = [];
    var _category_children_extraInitializers = [];
    var _products_decorators;
    var _products_initializers = [];
    var _products_extraInitializers = [];
    var ProductCategory = _classThis = /** @class */ (function (_super) {
        __extends(ProductCategory_1, _super);
        function ProductCategory_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = __runInitializers(_this, _name_initializers, void 0);
            _this.description = (__runInitializers(_this, _name_extraInitializers), __runInitializers(_this, _description_initializers, void 0));
            _this.handle = (__runInitializers(_this, _description_extraInitializers), __runInitializers(_this, _handle_initializers, void 0));
            _this.mpath = (__runInitializers(_this, _handle_extraInitializers), __runInitializers(_this, _mpath_initializers, void 0));
            _this.is_active = (__runInitializers(_this, _mpath_extraInitializers), __runInitializers(_this, _is_active_initializers, void 0));
            _this.is_internal = (__runInitializers(_this, _is_active_extraInitializers), __runInitializers(_this, _is_internal_initializers, void 0));
            _this.rank = (__runInitializers(_this, _is_internal_extraInitializers), __runInitializers(_this, _rank_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _rank_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.parent_category = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _parent_category_initializers, void 0));
            _this.category_children = (__runInitializers(_this, _parent_category_extraInitializers), __runInitializers(_this, _category_children_initializers, void 0));
            _this.products = (__runInitializers(_this, _category_children_extraInitializers), __runInitializers(_this, _products_initializers, void 0));
            __runInitializers(_this, _products_extraInitializers);
            return _this;
        }
        return ProductCategory_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ProductCategory");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, mongoose_1.Prop)()];
        _description_decorators = [(0, mongoose_1.Prop)({ index: true })];
        _handle_decorators = [(0, mongoose_1.Prop)({ index: true, unique: true })];
        _mpath_decorators = [(0, mongoose_1.Prop)()];
        _is_active_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _is_internal_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _rank_decorators = [(0, mongoose_1.Prop)({ default: 0 })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _parent_category_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'ProductCategory' })];
        _category_children_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProductCategory' }] })];
        _products_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Product' }] })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _handle_decorators, { kind: "field", name: "handle", static: false, private: false, access: { has: function (obj) { return "handle" in obj; }, get: function (obj) { return obj.handle; }, set: function (obj, value) { obj.handle = value; } }, metadata: _metadata }, _handle_initializers, _handle_extraInitializers);
        __esDecorate(null, null, _mpath_decorators, { kind: "field", name: "mpath", static: false, private: false, access: { has: function (obj) { return "mpath" in obj; }, get: function (obj) { return obj.mpath; }, set: function (obj, value) { obj.mpath = value; } }, metadata: _metadata }, _mpath_initializers, _mpath_extraInitializers);
        __esDecorate(null, null, _is_active_decorators, { kind: "field", name: "is_active", static: false, private: false, access: { has: function (obj) { return "is_active" in obj; }, get: function (obj) { return obj.is_active; }, set: function (obj, value) { obj.is_active = value; } }, metadata: _metadata }, _is_active_initializers, _is_active_extraInitializers);
        __esDecorate(null, null, _is_internal_decorators, { kind: "field", name: "is_internal", static: false, private: false, access: { has: function (obj) { return "is_internal" in obj; }, get: function (obj) { return obj.is_internal; }, set: function (obj, value) { obj.is_internal = value; } }, metadata: _metadata }, _is_internal_initializers, _is_internal_extraInitializers);
        __esDecorate(null, null, _rank_decorators, { kind: "field", name: "rank", static: false, private: false, access: { has: function (obj) { return "rank" in obj; }, get: function (obj) { return obj.rank; }, set: function (obj, value) { obj.rank = value; } }, metadata: _metadata }, _rank_initializers, _rank_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _parent_category_decorators, { kind: "field", name: "parent_category", static: false, private: false, access: { has: function (obj) { return "parent_category" in obj; }, get: function (obj) { return obj.parent_category; }, set: function (obj, value) { obj.parent_category = value; } }, metadata: _metadata }, _parent_category_initializers, _parent_category_extraInitializers);
        __esDecorate(null, null, _category_children_decorators, { kind: "field", name: "category_children", static: false, private: false, access: { has: function (obj) { return "category_children" in obj; }, get: function (obj) { return obj.category_children; }, set: function (obj, value) { obj.category_children = value; } }, metadata: _metadata }, _category_children_initializers, _category_children_extraInitializers);
        __esDecorate(null, null, _products_decorators, { kind: "field", name: "products", static: false, private: false, access: { has: function (obj) { return "products" in obj; }, get: function (obj) { return obj.products; }, set: function (obj, value) { obj.products = value; } }, metadata: _metadata }, _products_initializers, _products_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductCategory = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductCategory = _classThis;
}();
exports.ProductCategory = ProductCategory;
exports.ProductCategorySchema = mongoose_1.SchemaFactory.createForClass(ProductCategory);
