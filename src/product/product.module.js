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
exports.ProductModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var product_entity_1 = require("./entities/product.entity");
var product_category_entity_1 = require("./entities/product-category.entity");
var product_collection_entity_1 = require("./entities/product-collection.entity");
var product_option_value_entity_1 = require("./entities/product-option-value.entity");
var product_variant_entity_1 = require("./entities/product-variant.entity");
var product_tag_entity_1 = require("./entities/product-tag.entity");
var product_type_entity_1 = require("./entities/product-type.entity");
var product_controller_1 = require("./product.controller");
var product_service_1 = require("./product.service");
var product_option_entity_1 = require("./entities/product-option.entity");
var cloudinary_module_1 = require("./cloudinary.module");
var store_entity_1 = require("../../../../../../../../src/store/entities/store.entity");
var store_module_1 = require("../../../../../../../../src/store/store.module");
var store_guard_1 = require("../../../../../../../../src/store/store.guard");
var ProductModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                store_module_1.StoreModule,
                cloudinary_module_1.CloudinaryModule,
                mongoose_1.MongooseModule.forFeature([
                    { name: product_entity_1.Product.name, schema: product_entity_1.ProductSchema },
                    { name: product_category_entity_1.ProductCategory.name, schema: product_category_entity_1.ProductCategorySchema },
                    { name: product_collection_entity_1.ProductCollection.name, schema: product_collection_entity_1.ProductCollectionSchema },
                    { name: product_option_entity_1.ProductOption.name, schema: product_option_entity_1.ProductOptionSchema },
                    { name: product_option_value_entity_1.ProductOptionValue.name, schema: product_option_value_entity_1.ProductOptionValueSchema },
                    { name: product_variant_entity_1.ProductVariant.name, schema: product_variant_entity_1.ProductVariantSchema },
                    { name: product_tag_entity_1.ProductTag.name, schema: product_tag_entity_1.ProductTagSchema },
                    { name: product_type_entity_1.ProductType.name, schema: product_type_entity_1.ProductTypeSchema },
                    { name: store_entity_1.Store.name, schema: store_entity_1.StoreSchema },
                ]),
            ],
            controllers: [product_controller_1.ProductController],
            providers: [product_service_1.ProductService, store_guard_1.StoreGuard],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ProductModule = _classThis = /** @class */ (function () {
        function ProductModule_1() {
        }
        return ProductModule_1;
    }());
    __setFunctionName(_classThis, "ProductModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductModule = _classThis;
}();
exports.ProductModule = ProductModule;
