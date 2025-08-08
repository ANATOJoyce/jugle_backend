"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.ProductService = void 0;
var common_1 = require("@nestjs/common");
var product_entity_1 = require("./entities/product.entity");
var ProductService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ProductService = _classThis = /** @class */ (function () {
        function ProductService_1(productModel, categoryModel, collectionModel, optionModel, optionValueModel, variantModel, tagModel, typeModel, storeModel) {
            this.productModel = productModel;
            this.categoryModel = categoryModel;
            this.collectionModel = collectionModel;
            this.optionModel = optionModel;
            this.optionValueModel = optionValueModel;
            this.variantModel = variantModel;
            this.tagModel = tagModel;
            this.typeModel = typeModel;
            this.storeModel = storeModel;
        }
        ProductService_1.prototype.findAllByUser = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.find({ where: { ownerId: userId } })];
                });
            });
        };
        // product.service.ts (bloc Product)
        ProductService_1.prototype.findAllByStoreId = function (storeId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.find({
                            store: storeId,
                        }).populate('store')]; // Assurez-vous que "store" est une référence à un autre modèle (par exemple, le modèle Store).
                });
            });
        };
        /**LES FONCTION POUR CHANGERLE STATUS DES PRODUITS ? DRAF, PROPO */
        //Le vendeur va prposer un produit 
        //l'admini publie le produit 
        ProductService_1.prototype.publishProduct = function (productId) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findById(productId)];
                        case 1:
                            product = _a.sent();
                            if (!product) {
                                throw new common_1.ForbiddenException();
                            }
                            product.status = product_entity_1.ProductStatus.PUBLISHED;
                            return [2 /*return*/, product.save()];
                    }
                });
            });
        };
        ProductService_1.prototype.create = function (dto, storeId) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    product = new this.productModel(__assign(__assign({}, dto), { store: storeId }));
                    return [2 /*return*/, product.save()];
                });
            });
        };
        //l'adimin le regete LE PRODUIT
        ProductService_1.prototype.rejectProduct = function (productId) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findById(productId)];
                        case 1:
                            product = _a.sent();
                            if (!product) {
                                throw new common_1.ForbiddenException();
                            }
                            product.status = product_entity_1.ProductStatus.REJECTED;
                            return [2 /*return*/, product.save()];
                    }
                });
            });
        };
        //un produit 
        ProductService_1.prototype.revertToDraft = function (productId, vendorId) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findById(productId)];
                        case 1:
                            product = _a.sent();
                            if (!product || product.store.toString() !== vendorId) {
                                throw new common_1.ForbiddenException();
                            }
                            // Seulement si produit est proposé ou rejeté
                            if (![product_entity_1.ProductStatus.PROPOSED, product_entity_1.ProductStatus.REJECTED].includes(product.status)) {
                                throw new common_1.BadRequestException('Le produit ne peut pas être remis en draft');
                            }
                            product.status = product_entity_1.ProductStatus.DRAFT;
                            return [2 /*return*/, product.save()];
                    }
                });
            });
        };
        //**SEULELEMENT LES PRODUITS QUI ON UN STATUT PUBLISHED QUI SERONT VUS DE TOUS */
        ProductService_1.prototype.getPublishedProducts = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.find({ status: 'published' }).exec()];
                });
            });
        };
        //**IMPORTANT  FILTRE ET PAGINATION DES PRODUIT PUNLIER*/
        ProductService_1.prototype.find = function (filter) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.find(filter).exec()];
                });
            });
        };
        ProductService_1.prototype.findByIdAndDelete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.findByIdAndDelete(id).exec()];
                });
            });
        };
        // (si tu ne l'as pas déjà)
        // product.service.ts//important
        ProductService_1.prototype.recommendProductsByBudget = function (budget) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.find({
                            'variants.prices.amount': { $lte: budget * 100 }, // si en centimes
                        })
                            .limit(20)
                            .sort({ 'variants.prices.amount': 1 }) // du moins cher au plus cher
                            .populate('variants')
                            .exec()];
                });
            });
        };
        ProductService_1.prototype.proposeProduct = function (productId, storeId) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findById(productId)];
                        case 1:
                            product = _a.sent();
                            if (!product || product.store.toString() !== storeId) {
                                throw new common_1.ForbiddenException();
                            }
                            product.status = product_entity_1.ProductStatus.PROPOSED;
                            return [2 /*return*/, product.save()];
                    }
                });
            });
        };
        ProductService_1.prototype.findAllAdmin = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.find().populate('user').exec()];
                });
            });
        };
        ProductService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.find().populate('category', 'title').exec()];
                });
            });
        };
        ProductService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findById(id).populate('vendor').exec()];
                        case 1:
                            product = _a.sent();
                            if (!product) {
                                throw new common_1.NotFoundException("Produit avec l'id ".concat(id, " introuvable"));
                            }
                            return [2 /*return*/, product];
                    }
                });
            });
        };
        ProductService_1.prototype.changeProductStatus = function (productId, status) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findById(productId)];
                        case 1:
                            product = _a.sent();
                            if (!product) {
                                throw new common_1.NotFoundException("Produit avec l'id ".concat(productId, " introuvable"));
                            }
                            // Vérification des transitions de statuts
                            if ((status === product_entity_1.ProductStatus.PUBLISHED && product.status !== product_entity_1.ProductStatus.PROPOSED) ||
                                (status === product_entity_1.ProductStatus.REJECTED && product.status !== product_entity_1.ProductStatus.PROPOSED) ||
                                (status === product_entity_1.ProductStatus.DRAFT && ![product_entity_1.ProductStatus.PUBLISHED, product_entity_1.ProductStatus.REJECTED].includes(product.status))) {
                                throw new common_1.BadRequestException("Transition de statut non permise");
                            }
                            product.status = status;
                            return [2 /*return*/, product.save()];
                    }
                });
            });
        };
        ProductService_1.prototype.createProduct = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    product = new this.productModel(dto);
                    return [2 /*return*/, product.save()];
                });
            });
        };
        ProductService_1.prototype.softDeleteProduct = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findById(id)];
                        case 1:
                            product = _a.sent();
                            if (!product) {
                                throw new common_1.NotFoundException("Produit avec l'id ".concat(id, " introuvable"));
                            }
                            return [2 /*return*/, product];
                    }
                });
            });
        };
        ProductService_1.prototype.restoreEntity = function (model, id) {
            return __awaiter(this, void 0, void 0, function () {
                var entity;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, model.findByIdAndUpdate(id, { deleted_at: null }, { new: true })];
                        case 1:
                            entity = _a.sent();
                            if (!entity) {
                                throw new common_1.NotFoundException("Entit\u00E9 avec l'id ".concat(id, " introuvable"));
                            }
                            return [2 /*return*/, entity]; // Pas besoin de casting, car TypeScript comprend le type maintenant
                    }
                });
            });
        };
        ProductService_1.prototype.getProductsWithFilters = function () {
            return __awaiter(this, arguments, void 0, function (page, limit, filters, sort) {
                var skip, query, products, total;
                if (page === void 0) { page = 1; }
                if (limit === void 0) { limit = 10; }
                if (filters === void 0) { filters = {}; }
                if (sort === void 0) { sort = '-createdAt'; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            skip = (page - 1) * limit;
                            query = { status: 'published' };
                            // Recherche par mot-clé
                            if (filters.search) {
                                query.$or = [
                                    { title: { $regex: filters.search, $options: 'i' } },
                                    { description: { $regex: filters.search, $options: 'i' } }
                                ];
                            }
                            // Filtre par catégorie
                            if (filters.category)
                                query.category = filters.category;
                            // Filtre par prix
                            if (filters.minPrice !== undefined) {
                                query.price = __assign(__assign({}, query.price), { $gte: filters.minPrice });
                            }
                            if (filters.maxPrice !== undefined) {
                                query.price = __assign(__assign({}, query.price), { $lte: filters.maxPrice });
                            }
                            return [4 /*yield*/, this.productModel
                                    .find(query)
                                    .sort(sort)
                                    .skip(skip)
                                    .limit(limit)
                                    .exec()];
                        case 1:
                            products = _a.sent();
                            return [4 /*yield*/, this.productModel.countDocuments(query)];
                        case 2:
                            total = _a.sent();
                            return [2 /*return*/, {
                                    data: products,
                                    meta: {
                                        total: total,
                                        page: page,
                                        pageSize: limit,
                                        totalPages: Math.ceil(total / limit)
                                    }
                                }];
                    }
                });
            });
        };
        ProductService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findByIdAndDelete(id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ProductService_1.prototype.updateProduct = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        ProductService_1.prototype.upsertProduct = function (title, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.findOneAndUpdate({ title: title }, dto, { upsert: true, new: true })];
                });
            });
        };
        ProductService_1.prototype.deleteProduct = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.findByIdAndDelete(id)];
                });
            });
        };
        ProductService_1.prototype.restoreProduct = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.findByIdAndUpdate(id, { deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listProducts = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.find({ deleted_at: null })];
                });
            });
        };
        /**IMPORATNT
         *
         */
        ProductService_1.prototype.listAndCountProducts = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.find({ deleted_at: null })];
                        case 1:
                            docs = _a.sent();
                            return [4 /*yield*/, this.productModel.countDocuments({ deleted_at: null })];
                        case 2:
                            count = _a.sent();
                            return [2 /*return*/, { docs: docs, count: count }];
                    }
                });
            });
        };
        ProductService_1.prototype.retrieveProduct = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productModel.findById(id)];
                });
            });
        };
        //product category
        ProductService_1.prototype.createProductCategory = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.categoryModel.create(dto)];
                });
            });
        };
        ProductService_1.prototype.updateProductCategory = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.categoryModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        ProductService_1.prototype.upsertProductCategory = function (handle, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.categoryModel.findOneAndUpdate({ handle: handle }, dto, { upsert: true, new: true })];
                });
            });
        };
        ProductService_1.prototype.softDeleteProductCategory = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.categoryModel.findByIdAndUpdate(id, { deleted_at: new Date() })];
                });
            });
        };
        ProductService_1.prototype.deleteProductCategory = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.categoryModel.findByIdAndDelete(id)];
                });
            });
        };
        ProductService_1.prototype.restoreProductCategory = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.categoryModel.findByIdAndUpdate(id, { deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listProductCategories = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.categoryModel.find({ deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listAndCountProductCategories = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.categoryModel.find({ deleted_at: null })];
                        case 1:
                            docs = _a.sent();
                            return [4 /*yield*/, this.categoryModel.countDocuments({ deleted_at: null })];
                        case 2:
                            count = _a.sent();
                            return [2 /*return*/, { docs: docs, count: count }];
                    }
                });
            });
        };
        ProductService_1.prototype.retrieveProductCategory = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.categoryModel.findById(id)];
                });
            });
        };
        //collection
        // product.service.ts (bloc complet)
        ProductService_1.prototype.createProductCollection = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.collectionModel.create(dto)];
                });
            });
        };
        ProductService_1.prototype.updateProductCollection = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.collectionModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        ProductService_1.prototype.upsertProductCollection = function (handle, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.collectionModel.findOneAndUpdate({ handle: handle }, dto, { upsert: true, new: true })];
                });
            });
        };
        ProductService_1.prototype.softDeleteProductCollection = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.collectionModel.findByIdAndUpdate(id, { deleted_at: new Date() })];
                });
            });
        };
        ProductService_1.prototype.deleteProductCollection = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.collectionModel.findByIdAndDelete(id)];
                });
            });
        };
        ProductService_1.prototype.restoreProductCollection = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.collectionModel.findByIdAndUpdate(id, { deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listProductCollections = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.collectionModel.find({ deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listAndCountProductCollections = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.collectionModel.find({ deleted_at: null })];
                        case 1:
                            docs = _a.sent();
                            return [4 /*yield*/, this.collectionModel.countDocuments({ deleted_at: null })];
                        case 2:
                            count = _a.sent();
                            return [2 /*return*/, { docs: docs, count: count }];
                    }
                });
            });
        };
        ProductService_1.prototype.retrieveProductCollection = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.collectionModel.findById(id)];
                });
            });
        };
        //  ProductOption
        ProductService_1.prototype.createProductOption = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionModel.create(dto)];
                });
            });
        };
        ProductService_1.prototype.updateProductOption = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        ProductService_1.prototype.upsertProductOption = function (title, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionModel.findOneAndUpdate({ title: title }, dto, { upsert: true, new: true })];
                });
            });
        };
        ProductService_1.prototype.softDeleteProductOption = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionModel.findByIdAndUpdate(id, { deleted_at: new Date() })];
                });
            });
        };
        ProductService_1.prototype.deleteProductOption = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionModel.findByIdAndDelete(id)];
                });
            });
        };
        ProductService_1.prototype.restoreProductOption = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionModel.findByIdAndUpdate(id, { deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listProductOptions = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionModel.find({ deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listAndCountProductOptions = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.optionModel.find({ deleted_at: null })];
                        case 1:
                            docs = _a.sent();
                            return [4 /*yield*/, this.optionModel.countDocuments({ deleted_at: null })];
                        case 2:
                            count = _a.sent();
                            return [2 /*return*/, { docs: docs, count: count }];
                    }
                });
            });
        };
        ProductService_1.prototype.retrieveProductOption = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionModel.findById(id)];
                });
            });
        };
        //option-value // product.service.ts (bloc complet ProductOptionValue)
        ProductService_1.prototype.createProductOptionValue = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionValueModel.create(dto)];
                });
            });
        };
        ProductService_1.prototype.updateProductOptionValue = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionValueModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        ProductService_1.prototype.upsertProductOptionValue = function (value, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionValueModel.findOneAndUpdate({ value: value }, dto, { upsert: true, new: true })];
                });
            });
        };
        ProductService_1.prototype.softDeleteProductOptionValue = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionValueModel.findByIdAndUpdate(id, { deleted_at: new Date() })];
                });
            });
        };
        ProductService_1.prototype.deleteProductOptionValue = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionValueModel.findByIdAndDelete(id)];
                });
            });
        };
        ProductService_1.prototype.restoreProductOptionValue = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionValueModel.findByIdAndUpdate(id, { deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listProductOptionValues = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionValueModel.find({ deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listAndCountProductOptionValues = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.optionValueModel.find({ deleted_at: null })];
                        case 1:
                            docs = _a.sent();
                            return [4 /*yield*/, this.optionValueModel.countDocuments({ deleted_at: null })];
                        case 2:
                            count = _a.sent();
                            return [2 /*return*/, { docs: docs, count: count }];
                    }
                });
            });
        };
        ProductService_1.prototype.retrieveProductOptionValue = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.optionValueModel.findById(id)];
                });
            });
        };
        //ProductVriant
        // product.service.ts (bloc complet ProductVariant)
        ProductService_1.prototype.findAllWithRelations = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.find()
                            .populate('product')
                            .populate('prices')
                            .exec()];
                });
            });
        };
        ProductService_1.prototype.createVariant = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var variant;
                return __generator(this, function (_a) {
                    variant = new this.variantModel(__assign(__assign({}, dto), { prices: dto.prices.map(function (p) { return ({
                            amount: Math.round(p.amount * 100), // Convertir en centimes
                            currency: p.currency,
                            region: p.region || null
                        }); }) }));
                    return [2 /*return*/, variant.save()];
                });
            });
        };
        ProductService_1.prototype.createProductVariant = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.create(dto)];
                });
            });
        };
        ProductService_1.prototype.updateProductVariant = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        ProductService_1.prototype.upsertProductVariant = function (sku, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.findOneAndUpdate({ sku: sku }, dto, { upsert: true, new: true })];
                });
            });
        };
        ProductService_1.prototype.softDeleteProductVariant = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.findByIdAndUpdate(id, { deleted_at: new Date() })];
                });
            });
        };
        ProductService_1.prototype.deleteProductVariant = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.findByIdAndDelete(id)];
                });
            });
        };
        ProductService_1.prototype.restoreProductVariant = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.findByIdAndUpdate(id, { deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listProductVariants = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.find({ deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listAndCountProductVariants = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.variantModel.find({ deleted_at: null })];
                        case 1:
                            docs = _a.sent();
                            return [4 /*yield*/, this.variantModel.countDocuments({ deleted_at: null })];
                        case 2:
                            count = _a.sent();
                            return [2 /*return*/, { docs: docs, count: count }];
                    }
                });
            });
        };
        ProductService_1.prototype.retrieveProductVariant = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.variantModel.findById(id)];
                });
            });
        };
        ProductService_1.prototype.findByIdAndUpdate = function (id_1, dto_1) {
            return __awaiter(this, arguments, void 0, function (id, dto, options) {
                var updatedProduct;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productModel.findByIdAndUpdate(id, dto, options).exec()];
                        case 1:
                            updatedProduct = _a.sent();
                            if (!updatedProduct) {
                                throw new common_1.NotFoundException("Product with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, updatedProduct];
                    }
                });
            });
        };
        //product tags
        // product.service.ts (bloc ProductTag)
        ProductService_1.prototype.createProductTag = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tagModel.create(dto)];
                });
            });
        };
        ProductService_1.prototype.updateProductTag = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tagModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        ProductService_1.prototype.upsertProductTag = function (name, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tagModel.findOneAndUpdate({ name: name }, dto, { upsert: true, new: true })];
                });
            });
        };
        ProductService_1.prototype.softDeleteProductTag = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tagModel.findByIdAndUpdate(id, { deleted_at: new Date() })];
                });
            });
        };
        ProductService_1.prototype.deleteProductTag = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tagModel.findByIdAndDelete(id)];
                });
            });
        };
        ProductService_1.prototype.restoreProductTag = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tagModel.findByIdAndUpdate(id, { deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listProductTags = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tagModel.find({ deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listAndCountProductTags = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.tagModel.find({ deleted_at: null })];
                        case 1:
                            docs = _a.sent();
                            return [4 /*yield*/, this.tagModel.countDocuments({ deleted_at: null })];
                        case 2:
                            count = _a.sent();
                            return [2 /*return*/, { docs: docs, count: count }];
                    }
                });
            });
        };
        ProductService_1.prototype.retrieveProductTag = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tagModel.findById(id)];
                });
            });
        };
        //tag
        // product.service.ts (bloc ProductType)
        ProductService_1.prototype.createProductType = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.create(dto)];
                });
            });
        };
        ProductService_1.prototype.updateProductType = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        ProductService_1.prototype.upsertProductType = function (name, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.findOneAndUpdate({ name: name }, dto, { upsert: true, new: true })];
                });
            });
        };
        ProductService_1.prototype.softDeleteProductType = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.findByIdAndUpdate(id, { deleted_at: new Date() })];
                });
            });
        };
        ProductService_1.prototype.deleteProductType = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.findByIdAndDelete(id)];
                });
            });
        };
        ProductService_1.prototype.restoreProductType = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.findByIdAndUpdate(id, { deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listProductTypes = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.find({ deleted_at: null })];
                });
            });
        };
        ProductService_1.prototype.listAndCountProductTypes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.typeModel.find({ deleted_at: null })];
                        case 1:
                            docs = _a.sent();
                            return [4 /*yield*/, this.typeModel.countDocuments({ deleted_at: null })];
                        case 2:
                            count = _a.sent();
                            return [2 /*return*/, { docs: docs, count: count }];
                    }
                });
            });
        };
        ProductService_1.prototype.retrieveProductType = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.findById(id)];
                });
            });
        };
        //tag
        // product.service.ts (bloc ProductType)
        ProductService_1.prototype.createProductImage = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.typeModel.create(dto)];
                });
            });
        };
        return ProductService_1;
    }());
    __setFunctionName(_classThis, "ProductService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductService = _classThis;
}();
exports.ProductService = ProductService;
