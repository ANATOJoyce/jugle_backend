"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var roles_decorator_1 = require("../../../../../../../../src/auth/roles.decorator");
var role_enum_1 = require("../../../../../../../../src/auth/role.enum");
var product_entity_1 = require("./entities/product.entity");
var passport_1 = require("@nestjs/passport");
var store_guard_1 = require("../../../../../../../../src/store/store.guard");
// DTO Imports
var ProductController = function () {
    var _classDecorators = [(0, common_1.Controller)('product')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _findOne_decorators;
    var _update_decorators;
    var _remove_decorators;
    var _getVendorProducts_decorators;
    var _revertDraft_decorators;
    var _proposeProduct_decorators;
    var _publishProduct_decorators;
    var _rejectProduct_decorators;
    var _uploadImage_decorators;
    var _createVariant_decorators;
    var _listVariants_decorators;
    var _getVariant_decorators;
    var _createCategory_decorators;
    var _listCategories_decorators;
    var _createCollection_decorators;
    var _listCollections_decorators;
    var _createTag_decorators;
    var _listTags_decorators;
    var _createOption_decorators;
    var _createOptionValue_decorators;
    var _getPublishedProducts_decorators;
    var _getRecommendations_decorators;
    var _softDelete_decorators;
    var _restore_decorators;
    var ProductController = _classThis = /** @class */ (function () {
        function ProductController_1(productService, cloudinaryService) {
            this.productService = (__runInitializers(this, _instanceExtraInitializers), productService);
            this.cloudinaryService = cloudinaryService;
        }
        // ==============================================
        // SECTION 1: CORE PRODUCT OPERATIONS
        // ==============================================
        ProductController_1.prototype.create = function (req, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var storeId;
                var _a, _b;
                return __generator(this, function (_c) {
                    storeId = (_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.store) === null || _b === void 0 ? void 0 : _b._id;
                    if (!storeId) {
                        throw new common_1.BadRequestException('Aucune boutique associée à cet utilisateur');
                    }
                    return [2 /*return*/, this.productService.create(dto, storeId)];
                });
            });
        };
        ProductController_1.prototype.findOne = function (id) {
            return this.productService.retrieveProduct(id);
        };
        ProductController_1.prototype.update = function (id, dto) {
            return this.productService.updateProduct(id, dto);
        };
        ProductController_1.prototype.remove = function (id) {
            return this.productService.deleteProduct(id);
        };
        ProductController_1.prototype.getVendorProducts = function (store) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productService.findAllByStoreId(store.id)];
                });
            });
        };
        // ==============================================
        // SECTION 2: PRODUCT STATUS MANAGEMENT
        // ==============================================
        ProductController_1.prototype.revertDraft = function (id) {
            return this.productService.changeProductStatus(id, product_entity_1.ProductStatus.DRAFT);
        };
        ProductController_1.prototype.proposeProduct = function (id) {
            return this.productService.changeProductStatus(id, product_entity_1.ProductStatus.PROPOSED);
        };
        ProductController_1.prototype.publishProduct = function (id) {
            return this.productService.changeProductStatus(id, product_entity_1.ProductStatus.PUBLISHED);
        };
        ProductController_1.prototype.rejectProduct = function (id) {
            return this.productService.changeProductStatus(id, product_entity_1.ProductStatus.REJECTED);
        };
        // ==============================================
        // SECTION 3: PRODUCT IMAGE MANAGEMENT
        // ==============================================
        ProductController_1.prototype.uploadImage = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                var imageUrl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cloudinaryService.uploadImage(file)];
                        case 1:
                            imageUrl = _a.sent();
                            return [2 /*return*/, { url: imageUrl }];
                    }
                });
            });
        };
        // ==============================================
        // SECTION 4: PRODUCT VARIANTS
        // ==============================================
        ProductController_1.prototype.createVariant = function (dto) {
            return this.productService.createVariant(dto);
        };
        ProductController_1.prototype.listVariants = function () {
            return this.productService.listProductVariants();
        };
        ProductController_1.prototype.getVariant = function (id) {
            return this.productService.retrieveProductVariant(id);
        };
        // ==============================================
        // SECTION 5: PRODUCT CATEGORIES
        // ==============================================
        ProductController_1.prototype.createCategory = function (dto) {
            return this.productService.createProductCategory(dto);
        };
        ProductController_1.prototype.listCategories = function () {
            return this.productService.listProductCategories();
        };
        // ==============================================
        // SECTION 6: PRODUCT COLLECTIONS
        // ==============================================
        ProductController_1.prototype.createCollection = function (dto) {
            return this.productService.createProductCollection(dto);
        };
        ProductController_1.prototype.listCollections = function () {
            return this.productService.listProductCollections();
        };
        // ==============================================
        // SECTION 7: PRODUCT TAGS
        // ==============================================
        ProductController_1.prototype.createTag = function (dto) {
            return this.productService.createProductTag(dto);
        };
        ProductController_1.prototype.listTags = function () {
            return this.productService.listProductTags();
        };
        ProductController_1.prototype.createOption = function (dto) {
            return this.productService.createProductOption(dto);
        };
        ProductController_1.prototype.createOptionValue = function (dto) {
            return this.productService.createProductOptionValue(dto);
        };
        // ==============================================
        // SECTION 9: PUBLIC ENDPOINTS
        // ==============================================
        ProductController_1.prototype.getPublishedProducts = function () {
            return __awaiter(this, arguments, void 0, function (page, limit, search, sort, category, minPrice, maxPrice) {
                var filters;
                if (page === void 0) { page = 1; }
                if (limit === void 0) { limit = 10; }
                if (search === void 0) { search = ''; }
                if (sort === void 0) { sort = '-createdAt'; }
                return __generator(this, function (_a) {
                    filters = {
                        search: search,
                        category: category,
                        minPrice: minPrice ? parseFloat(minPrice) : undefined, // Utilisation de parseFloat pour plus de sécurité
                        maxPrice: maxPrice ? parseFloat(maxPrice) : undefined, // Utilisation de parseFloat pour plus de sécurité
                    };
                    // Appel du service pour obtenir les produits avec les filtres
                    return [2 /*return*/, this.productService.getProductsWithFilters(Number(page), // Page convertie en nombre
                        Number(limit), // Limit converti en nombre
                        filters, // Filtrage dynamique basé sur les paramètres
                        sort // Tri des produits
                        )];
                });
            });
        };
        ProductController_1.prototype.getRecommendations = function (budget) {
            return __awaiter(this, void 0, void 0, function () {
                var parsedBudget;
                return __generator(this, function (_a) {
                    parsedBudget = parseFloat(budget);
                    if (isNaN(parsedBudget)) {
                        throw new common_1.BadRequestException('Budget must be a valid number');
                    }
                    return [2 /*return*/, this.productService.recommendProductsByBudget(parsedBudget)];
                });
            });
        };
        ProductController_1.prototype.softDelete = function (id) {
            return this.productService.softDeleteProduct(id);
        };
        ProductController_1.prototype.restore = function (id) {
            return this.productService.restoreProduct(id);
        };
        return ProductController_1;
    }());
    __setFunctionName(_classThis, "ProductController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _create_decorators = [(0, common_1.Post)()];
        _findOne_decorators = [(0, common_1.Get)(':id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _update_decorators = [(0, common_1.Put)(':id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _remove_decorators = [(0, common_1.Delete)(':id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _getVendorProducts_decorators = [(0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), store_guard_1.StoreGuard), (0, common_1.Get)('store/me')];
        _revertDraft_decorators = [(0, common_1.Put)(':id/revert-draft'), (0, roles_decorator_1.Roles)(role_enum_1.Role.VENDOR)];
        _proposeProduct_decorators = [(0, common_1.Put)(':id/propose'), (0, roles_decorator_1.Roles)(role_enum_1.Role.VENDOR)];
        _publishProduct_decorators = [(0, common_1.Put)(':id/publish'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _rejectProduct_decorators = [(0, common_1.Put)(':id/reject'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _uploadImage_decorators = [(0, common_1.Post)('upload-image'), (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _createVariant_decorators = [(0, common_1.Post)('variants'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _listVariants_decorators = [(0, common_1.Get)('variants'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _getVariant_decorators = [(0, common_1.Get)('variants/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _createCategory_decorators = [(0, common_1.Post)('categories'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _listCategories_decorators = [(0, common_1.Get)('categories')];
        _createCollection_decorators = [(0, common_1.Post)('collections'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _listCollections_decorators = [(0, common_1.Get)('collections')];
        _createTag_decorators = [(0, common_1.Post)('tags'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _listTags_decorators = [(0, common_1.Get)('tags'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _createOption_decorators = [(0, common_1.Post)('options'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _createOptionValue_decorators = [(0, common_1.Post)('option-values'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _getPublishedProducts_decorators = [(0, common_1.Get)('public/pagination')];
        _getRecommendations_decorators = [(0, common_1.Get)('recommendations')];
        _softDelete_decorators = [(0, common_1.Patch)(':id/soft-delete'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _restore_decorators = [(0, common_1.Post)(':id/restore'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: function (obj) { return "remove" in obj; }, get: function (obj) { return obj.remove; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getVendorProducts_decorators, { kind: "method", name: "getVendorProducts", static: false, private: false, access: { has: function (obj) { return "getVendorProducts" in obj; }, get: function (obj) { return obj.getVendorProducts; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _revertDraft_decorators, { kind: "method", name: "revertDraft", static: false, private: false, access: { has: function (obj) { return "revertDraft" in obj; }, get: function (obj) { return obj.revertDraft; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _proposeProduct_decorators, { kind: "method", name: "proposeProduct", static: false, private: false, access: { has: function (obj) { return "proposeProduct" in obj; }, get: function (obj) { return obj.proposeProduct; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _publishProduct_decorators, { kind: "method", name: "publishProduct", static: false, private: false, access: { has: function (obj) { return "publishProduct" in obj; }, get: function (obj) { return obj.publishProduct; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _rejectProduct_decorators, { kind: "method", name: "rejectProduct", static: false, private: false, access: { has: function (obj) { return "rejectProduct" in obj; }, get: function (obj) { return obj.rejectProduct; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _uploadImage_decorators, { kind: "method", name: "uploadImage", static: false, private: false, access: { has: function (obj) { return "uploadImage" in obj; }, get: function (obj) { return obj.uploadImage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createVariant_decorators, { kind: "method", name: "createVariant", static: false, private: false, access: { has: function (obj) { return "createVariant" in obj; }, get: function (obj) { return obj.createVariant; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listVariants_decorators, { kind: "method", name: "listVariants", static: false, private: false, access: { has: function (obj) { return "listVariants" in obj; }, get: function (obj) { return obj.listVariants; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getVariant_decorators, { kind: "method", name: "getVariant", static: false, private: false, access: { has: function (obj) { return "getVariant" in obj; }, get: function (obj) { return obj.getVariant; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createCategory_decorators, { kind: "method", name: "createCategory", static: false, private: false, access: { has: function (obj) { return "createCategory" in obj; }, get: function (obj) { return obj.createCategory; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listCategories_decorators, { kind: "method", name: "listCategories", static: false, private: false, access: { has: function (obj) { return "listCategories" in obj; }, get: function (obj) { return obj.listCategories; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createCollection_decorators, { kind: "method", name: "createCollection", static: false, private: false, access: { has: function (obj) { return "createCollection" in obj; }, get: function (obj) { return obj.createCollection; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listCollections_decorators, { kind: "method", name: "listCollections", static: false, private: false, access: { has: function (obj) { return "listCollections" in obj; }, get: function (obj) { return obj.listCollections; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createTag_decorators, { kind: "method", name: "createTag", static: false, private: false, access: { has: function (obj) { return "createTag" in obj; }, get: function (obj) { return obj.createTag; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listTags_decorators, { kind: "method", name: "listTags", static: false, private: false, access: { has: function (obj) { return "listTags" in obj; }, get: function (obj) { return obj.listTags; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createOption_decorators, { kind: "method", name: "createOption", static: false, private: false, access: { has: function (obj) { return "createOption" in obj; }, get: function (obj) { return obj.createOption; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createOptionValue_decorators, { kind: "method", name: "createOptionValue", static: false, private: false, access: { has: function (obj) { return "createOptionValue" in obj; }, get: function (obj) { return obj.createOptionValue; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPublishedProducts_decorators, { kind: "method", name: "getPublishedProducts", static: false, private: false, access: { has: function (obj) { return "getPublishedProducts" in obj; }, get: function (obj) { return obj.getPublishedProducts; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getRecommendations_decorators, { kind: "method", name: "getRecommendations", static: false, private: false, access: { has: function (obj) { return "getRecommendations" in obj; }, get: function (obj) { return obj.getRecommendations; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _softDelete_decorators, { kind: "method", name: "softDelete", static: false, private: false, access: { has: function (obj) { return "softDelete" in obj; }, get: function (obj) { return obj.softDelete; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _restore_decorators, { kind: "method", name: "restore", static: false, private: false, access: { has: function (obj) { return "restore" in obj; }, get: function (obj) { return obj.restore; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductController = _classThis;
}();
exports.ProductController = ProductController;
