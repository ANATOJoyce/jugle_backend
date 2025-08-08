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
exports.PricingController = void 0;
var common_1 = require("@nestjs/common");
var roles_guards_1 = require("../../../../../../../../src/auth/roles.guards");
var roles_decorator_1 = require("../../../../../../../../src/auth/roles.decorator");
var role_enum_1 = require("../../../../../../../../src/auth/role.enum");
var jwt_auth_guard_1 = require("../../../../../../../../src/auth/jwt-auth.guard");
var PricingController = function () {
    var _classDecorators = [(0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guards_1.RolesGuard), (0, common_1.Controller)('pricing')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getAllPrices_decorators;
    var _getPriceById_decorators;
    var _deletePrice_decorators;
    var _updatePrice_decorators;
    var _getAllAmountPrices_decorators;
    var _getPricesForVariant_decorators;
    var _createMoneyAmount_decorators;
    var _createPriceListRule_decorators;
    var _getRulesByPriceList_decorators;
    var _getActiveRulesByAttribute_decorators;
    var _updatePriceListRule_decorators;
    var _softDeletePriceListRule_decorators;
    var _restorePriceListRule_decorators;
    var _createPriceList_decorators;
    var _getAllPriceLists_decorators;
    var _getActivePriceLists_decorators;
    var _getPriceListsByType_decorators;
    var _getPriceList_decorators;
    var _updatePriceList_decorators;
    var _activatePriceList_decorators;
    var _deactivatePriceList_decorators;
    var _deletePriceList_decorators;
    var _getApplicable_decorators;
    var _createPricePreference_decorators;
    var _getAllPricePreferences_decorators;
    var _getPricePreferencesByAttribute_decorators;
    var _updatePricePreference_decorators;
    var _softDeletePricePreference_decorators;
    var _restorePricePreference_decorators;
    var _createPriceRule_decorators;
    var _updatePriceRule_decorators;
    var _deletePriceRule_decorators;
    var _restorePriceRule_decorators;
    var _getRulesByPrice_decorators;
    var _getAllActivePriceRules_decorators;
    var _createPriceSet_decorators;
    var _getAllPriceSets_decorators;
    var _getPriceSet_decorators;
    var _updatePriceSet_decorators;
    var _deletePriceSet_decorators;
    var _searchPrices_decorators;
    var _getPricesByCurrency_decorators;
    var _createPrice_decorators;
    var PricingController = _classThis = /** @class */ (function () {
        function PricingController_1(pricingService) {
            this.pricingService = (__runInitializers(this, _instanceExtraInitializers), pricingService);
        }
        /**CREATION D4UN PRIX */
        PricingController_1.prototype.getAllPrices = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.findAllPrices()];
                });
            });
        };
        PricingController_1.prototype.getPriceById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.findPriceById(id)];
                });
            });
        };
        PricingController_1.prototype.deletePrice = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.removePrice(id)];
                });
            });
        };
        PricingController_1.prototype.updatePrice = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.updatePrice(id, dto)];
                });
            });
        };
        /**
         * GESTION D'AMOUNTPRICE
         */
        // Lister tous les MoneyAmount (prix)
        PricingController_1.prototype.getAllAmountPrices = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.getAllPrices()];
                });
            });
        };
        // Récupérer les prix pour un variant donné
        PricingController_1.prototype.getPricesForVariant = function (variantId) {
            return __awaiter(this, void 0, void 0, function () {
                var prices;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.pricingService.getPricesForVariant(variantId)];
                        case 1:
                            prices = _a.sent();
                            if (!prices || prices.length === 0) {
                                throw new common_1.NotFoundException("No prices found for variant ".concat(variantId));
                            }
                            return [2 /*return*/, prices];
                    }
                });
            });
        };
        // Créer un nouveau MoneyAmount (prix), optionnellement lié à un variant
        PricingController_1.prototype.createMoneyAmount = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.createMoneyAmount(dto)];
                });
            });
        };
        // ────────────────  PRICE LIST RULE ────────────────
        /**  ADMIN ONLY - Créer une règle */
        PricingController_1.prototype.createPriceListRule = function (dto) {
            return this.pricingService.createPriceListRule(dto);
        };
        /** TOUS RÔLES - Règles d’une PriceList */
        PricingController_1.prototype.getRulesByPriceList = function (priceListId) {
            return this.pricingService.getRulesByPriceList(priceListId);
        };
        /**  TOUS RÔLES - Règles actives filtrées par attribut */
        PricingController_1.prototype.getActiveRulesByAttribute = function (attribute) {
            return this.pricingService.getActiveRulesByAttribute(attribute);
        };
        /** ADMIN ONLY - Modifier une règle */
        PricingController_1.prototype.updatePriceListRule = function (id, dto) {
            return this.pricingService.updatePriceListRule(id, dto);
        };
        /** 👤 ADMIN ONLY - Supprimer une règle (soft delete) */
        PricingController_1.prototype.softDeletePriceListRule = function (id) {
            return this.pricingService.softDeletePriceListRule(id);
        };
        /**  ADMIN ONLY - Restaurer une règle supprimée */
        PricingController_1.prototype.restorePriceListRule = function (id) {
            return this.pricingService.restorePriceListRule(id);
        };
        // ──────────────── PRICE LISTS ────────────────
        /**  ADMIN ONLY - Créer une PriceList */
        PricingController_1.prototype.createPriceList = function (dto) {
            return this.pricingService.createPriceList(dto);
        };
        /**  TOUS RÔLES - Obtenir toutes les PriceLists */
        PricingController_1.prototype.getAllPriceLists = function () {
            return this.pricingService.getAllPriceLists();
        };
        /**  TOUS RÔLES - Obtenir les PriceLists actives */
        PricingController_1.prototype.getActivePriceLists = function () {
            return this.pricingService.getActivePriceLists();
        };
        /** TOUS RÔLES - Obtenir par type (SALE / OVERRIDE) */
        PricingController_1.prototype.getPriceListsByType = function (type) {
            return this.pricingService.getPriceListsByType(type);
        };
        /**  TOUS RÔLES - Obtenir une PriceList par ID */
        PricingController_1.prototype.getPriceList = function (id) {
            return this.pricingService.getPriceListById(id);
        };
        /**  ADMIN ONLY - Modifier une PriceList */
        PricingController_1.prototype.updatePriceList = function (id, dto) {
            return this.pricingService.updatePriceList(id, dto);
        };
        /**  ADMIN ONLY - Activer une PriceList */
        PricingController_1.prototype.activatePriceList = function (id) {
            return this.pricingService.activatePriceList(id);
        };
        /**  ADMIN ONLY - Désactiver une PriceList */
        PricingController_1.prototype.deactivatePriceList = function (id) {
            return this.pricingService.deactivatePriceList(id);
        };
        /**  ADMIN ONLY - Supprimer une PriceList */
        PricingController_1.prototype.deletePriceList = function (id) {
            return this.pricingService.deletePriceList(id);
        };
        // ────────────────  APPLICABLE PRICELISTS FOR CUSTOMER ────────────────
        /**  CUSTOMER ONLY - Obtenir les PriceLists applicables à ce client */
        PricingController_1.prototype.getApplicable = function (customerId) {
            return this.pricingService.getApplicablePriceListsForCustomerId(customerId);
        };
        /**
         *
         *
         */
        // Créer une préférence tarifaire — ADMIN uniquement
        PricingController_1.prototype.createPricePreference = function (dto, req) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (req.user.role !== 'ADMIN')
                        throw new common_1.ForbiddenException();
                    return [2 /*return*/, this.pricingService.createPricePreference(dto, req.user.role)];
                });
            });
        };
        // Liste toutes les préférences — Tous rôles
        PricingController_1.prototype.getAllPricePreferences = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.getAllPricePreferences()];
                });
            });
        };
        // Liste préférences par attribut — Tous rôles
        PricingController_1.prototype.getPricePreferencesByAttribute = function (attribute) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.getPricePreferencesByAttribute(attribute)];
                });
            });
        };
        // Modifier une préférence — ADMIN uniquement
        PricingController_1.prototype.updatePricePreference = function (id, dto, req) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (req.user.role !== 'ADMIN')
                        throw new common_1.ForbiddenException();
                    return [2 /*return*/, this.pricingService.updatePricePreference(id, dto, req.user.role)];
                });
            });
        };
        // Soft delete une préférence — ADMIN uniquement
        PricingController_1.prototype.softDeletePricePreference = function (id, req) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (req.user.role !== 'ADMIN')
                        throw new common_1.ForbiddenException();
                    return [2 /*return*/, this.pricingService.softDeletePricePreference(id, req.user.role)];
                });
            });
        };
        // Restaurer une préférence supprimée — ADMIN uniquement
        PricingController_1.prototype.restorePricePreference = function (id, req) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (req.user.role !== 'ADMIN')
                        throw new common_1.ForbiddenException();
                    return [2 /*return*/, this.pricingService.restorePricePreference(id, req.user.role)];
                });
            });
        };
        /**
         *
         *
         */
        PricingController_1.prototype.createPriceRule = function (dto) {
            return this.pricingService.createPriceRule(dto);
        };
        PricingController_1.prototype.updatePriceRule = function (id, dto) {
            return this.pricingService.updatePriceRule(id, dto);
        };
        PricingController_1.prototype.deletePriceRule = function (id) {
            return this.pricingService.deletePriceRule(id);
        };
        PricingController_1.prototype.restorePriceRule = function (id) {
            return this.pricingService.restorePriceRule(id);
        };
        PricingController_1.prototype.getRulesByPrice = function (priceId) {
            return this.pricingService.getPriceRulesByPrice(priceId);
        };
        PricingController_1.prototype.getAllActivePriceRules = function () {
            return this.pricingService.getAllActivePriceRules();
        };
        // POST /price-set
        PricingController_1.prototype.createPriceSet = function (dto) {
            return this.pricingService.createPriceSet(dto);
        };
        // GET /price-set
        PricingController_1.prototype.getAllPriceSets = function () {
            return this.pricingService.getAllPriceSets();
        };
        // GET /price-set/:id
        PricingController_1.prototype.getPriceSet = function (id) {
            return this.pricingService.getPriceSetById(id);
        };
        // PATCH /price-set/:id
        PricingController_1.prototype.updatePriceSet = function (id, dto) {
            return this.pricingService.updatePriceSet(id, dto);
        };
        // DELETE /price-set/:id
        PricingController_1.prototype.deletePriceSet = function (id) {
            return this.pricingService.deletePriceSet(id);
        };
        PricingController_1.prototype.searchPrices = function (regionId, countryId, productVariantId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.findPricesByRegionCountryProductVariant(regionId, countryId, productVariantId)];
                });
            });
        };
        PricingController_1.prototype.getPricesByCurrency = function (currencyId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricingService.findPricesByCurrency(currencyId)];
                });
            });
        };
        PricingController_1.prototype.createPrice = function (dto) {
            return this.pricingService.createPriceSet(dto); // Passer l'objet DTO avec le tableau de prix
        };
        return PricingController_1;
    }());
    __setFunctionName(_classThis, "PricingController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getAllPrices_decorators = [(0, common_1.Get)('price')];
        _getPriceById_decorators = [(0, common_1.Get)('price/:id')];
        _deletePrice_decorators = [(0, common_1.Delete)('price/:id')];
        _updatePrice_decorators = [(0, common_1.Put)('price/:id')];
        _getAllAmountPrices_decorators = [(0, common_1.Get)('prices')];
        _getPricesForVariant_decorators = [(0, common_1.Get)('variant/:id/prices')];
        _createMoneyAmount_decorators = [(0, common_1.Post)('prices')];
        _createPriceListRule_decorators = [(0, common_1.Post)('price-list-rule'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _getRulesByPriceList_decorators = [(0, common_1.Get)('price-list-rule/price-list/:priceListId'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _getActiveRulesByAttribute_decorators = [(0, common_1.Get)('price-list-rule/attribute/:attribute'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _updatePriceListRule_decorators = [(0, common_1.Patch)('price-list-rule/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _softDeletePriceListRule_decorators = [(0, common_1.Delete)('price-list-rule/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _restorePriceListRule_decorators = [(0, common_1.Patch)('price-list-rule/:id/restore'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _createPriceList_decorators = [(0, common_1.Post)('price-list'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _getAllPriceLists_decorators = [(0, common_1.Get)('price-list'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _getActivePriceLists_decorators = [(0, common_1.Get)('price-list/active'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _getPriceListsByType_decorators = [(0, common_1.Get)('price-list/type/:type'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _getPriceList_decorators = [(0, common_1.Get)('price-list/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _updatePriceList_decorators = [(0, common_1.Patch)('price-list/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _activatePriceList_decorators = [(0, common_1.Patch)('price-list/:id/activate'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _deactivatePriceList_decorators = [(0, common_1.Patch)('price-list/:id/deactivate'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _deletePriceList_decorators = [(0, common_1.Delete)('price-list/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _getApplicable_decorators = [(0, common_1.Get)('price-lists/applicable'), (0, roles_decorator_1.Roles)(role_enum_1.Role.CUSTOMER)];
        _createPricePreference_decorators = [(0, common_1.Post)('price-preference')];
        _getAllPricePreferences_decorators = [(0, common_1.Get)('price-preference')];
        _getPricePreferencesByAttribute_decorators = [(0, common_1.Get)('price-preference/attribute/:attribute')];
        _updatePricePreference_decorators = [(0, common_1.Patch)('price-preference/:id')];
        _softDeletePricePreference_decorators = [(0, common_1.Delete)('price-preference/:id')];
        _restorePricePreference_decorators = [(0, common_1.Patch)('price-preference/:id/restore')];
        _createPriceRule_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR), (0, common_1.Post)('price-rule')];
        _updatePriceRule_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR), (0, common_1.Patch)('price-rule/:id')];
        _deletePriceRule_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN), (0, common_1.Delete)('price-rule/:id')];
        _restorePriceRule_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN), (0, common_1.Patch)('price-rule/:id/restore')];
        _getRulesByPrice_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR), (0, common_1.Get)('price-rule/price/:priceId')];
        _getAllActivePriceRules_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN), (0, common_1.Get)('price-rules')];
        _createPriceSet_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN), (0, common_1.Post)('price-set')];
        _getAllPriceSets_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN), (0, common_1.Get)('price-set')];
        _getPriceSet_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR), (0, common_1.Get)('price-set/:id')];
        _updatePriceSet_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN), (0, common_1.Patch)('price-set/:id')];
        _deletePriceSet_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN), (0, common_1.Delete)('price-set/:id')];
        _searchPrices_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR), (0, common_1.Get)('price/search')];
        _getPricesByCurrency_decorators = [(0, common_1.Get)('price/currency/:currencyId'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _createPrice_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.VENDOR), (0, common_1.Post)('createprice')];
        __esDecorate(_classThis, null, _getAllPrices_decorators, { kind: "method", name: "getAllPrices", static: false, private: false, access: { has: function (obj) { return "getAllPrices" in obj; }, get: function (obj) { return obj.getAllPrices; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPriceById_decorators, { kind: "method", name: "getPriceById", static: false, private: false, access: { has: function (obj) { return "getPriceById" in obj; }, get: function (obj) { return obj.getPriceById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deletePrice_decorators, { kind: "method", name: "deletePrice", static: false, private: false, access: { has: function (obj) { return "deletePrice" in obj; }, get: function (obj) { return obj.deletePrice; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePrice_decorators, { kind: "method", name: "updatePrice", static: false, private: false, access: { has: function (obj) { return "updatePrice" in obj; }, get: function (obj) { return obj.updatePrice; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllAmountPrices_decorators, { kind: "method", name: "getAllAmountPrices", static: false, private: false, access: { has: function (obj) { return "getAllAmountPrices" in obj; }, get: function (obj) { return obj.getAllAmountPrices; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPricesForVariant_decorators, { kind: "method", name: "getPricesForVariant", static: false, private: false, access: { has: function (obj) { return "getPricesForVariant" in obj; }, get: function (obj) { return obj.getPricesForVariant; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createMoneyAmount_decorators, { kind: "method", name: "createMoneyAmount", static: false, private: false, access: { has: function (obj) { return "createMoneyAmount" in obj; }, get: function (obj) { return obj.createMoneyAmount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createPriceListRule_decorators, { kind: "method", name: "createPriceListRule", static: false, private: false, access: { has: function (obj) { return "createPriceListRule" in obj; }, get: function (obj) { return obj.createPriceListRule; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getRulesByPriceList_decorators, { kind: "method", name: "getRulesByPriceList", static: false, private: false, access: { has: function (obj) { return "getRulesByPriceList" in obj; }, get: function (obj) { return obj.getRulesByPriceList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getActiveRulesByAttribute_decorators, { kind: "method", name: "getActiveRulesByAttribute", static: false, private: false, access: { has: function (obj) { return "getActiveRulesByAttribute" in obj; }, get: function (obj) { return obj.getActiveRulesByAttribute; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePriceListRule_decorators, { kind: "method", name: "updatePriceListRule", static: false, private: false, access: { has: function (obj) { return "updatePriceListRule" in obj; }, get: function (obj) { return obj.updatePriceListRule; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _softDeletePriceListRule_decorators, { kind: "method", name: "softDeletePriceListRule", static: false, private: false, access: { has: function (obj) { return "softDeletePriceListRule" in obj; }, get: function (obj) { return obj.softDeletePriceListRule; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _restorePriceListRule_decorators, { kind: "method", name: "restorePriceListRule", static: false, private: false, access: { has: function (obj) { return "restorePriceListRule" in obj; }, get: function (obj) { return obj.restorePriceListRule; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createPriceList_decorators, { kind: "method", name: "createPriceList", static: false, private: false, access: { has: function (obj) { return "createPriceList" in obj; }, get: function (obj) { return obj.createPriceList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllPriceLists_decorators, { kind: "method", name: "getAllPriceLists", static: false, private: false, access: { has: function (obj) { return "getAllPriceLists" in obj; }, get: function (obj) { return obj.getAllPriceLists; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getActivePriceLists_decorators, { kind: "method", name: "getActivePriceLists", static: false, private: false, access: { has: function (obj) { return "getActivePriceLists" in obj; }, get: function (obj) { return obj.getActivePriceLists; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPriceListsByType_decorators, { kind: "method", name: "getPriceListsByType", static: false, private: false, access: { has: function (obj) { return "getPriceListsByType" in obj; }, get: function (obj) { return obj.getPriceListsByType; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPriceList_decorators, { kind: "method", name: "getPriceList", static: false, private: false, access: { has: function (obj) { return "getPriceList" in obj; }, get: function (obj) { return obj.getPriceList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePriceList_decorators, { kind: "method", name: "updatePriceList", static: false, private: false, access: { has: function (obj) { return "updatePriceList" in obj; }, get: function (obj) { return obj.updatePriceList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _activatePriceList_decorators, { kind: "method", name: "activatePriceList", static: false, private: false, access: { has: function (obj) { return "activatePriceList" in obj; }, get: function (obj) { return obj.activatePriceList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deactivatePriceList_decorators, { kind: "method", name: "deactivatePriceList", static: false, private: false, access: { has: function (obj) { return "deactivatePriceList" in obj; }, get: function (obj) { return obj.deactivatePriceList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deletePriceList_decorators, { kind: "method", name: "deletePriceList", static: false, private: false, access: { has: function (obj) { return "deletePriceList" in obj; }, get: function (obj) { return obj.deletePriceList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getApplicable_decorators, { kind: "method", name: "getApplicable", static: false, private: false, access: { has: function (obj) { return "getApplicable" in obj; }, get: function (obj) { return obj.getApplicable; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createPricePreference_decorators, { kind: "method", name: "createPricePreference", static: false, private: false, access: { has: function (obj) { return "createPricePreference" in obj; }, get: function (obj) { return obj.createPricePreference; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllPricePreferences_decorators, { kind: "method", name: "getAllPricePreferences", static: false, private: false, access: { has: function (obj) { return "getAllPricePreferences" in obj; }, get: function (obj) { return obj.getAllPricePreferences; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPricePreferencesByAttribute_decorators, { kind: "method", name: "getPricePreferencesByAttribute", static: false, private: false, access: { has: function (obj) { return "getPricePreferencesByAttribute" in obj; }, get: function (obj) { return obj.getPricePreferencesByAttribute; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePricePreference_decorators, { kind: "method", name: "updatePricePreference", static: false, private: false, access: { has: function (obj) { return "updatePricePreference" in obj; }, get: function (obj) { return obj.updatePricePreference; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _softDeletePricePreference_decorators, { kind: "method", name: "softDeletePricePreference", static: false, private: false, access: { has: function (obj) { return "softDeletePricePreference" in obj; }, get: function (obj) { return obj.softDeletePricePreference; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _restorePricePreference_decorators, { kind: "method", name: "restorePricePreference", static: false, private: false, access: { has: function (obj) { return "restorePricePreference" in obj; }, get: function (obj) { return obj.restorePricePreference; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createPriceRule_decorators, { kind: "method", name: "createPriceRule", static: false, private: false, access: { has: function (obj) { return "createPriceRule" in obj; }, get: function (obj) { return obj.createPriceRule; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePriceRule_decorators, { kind: "method", name: "updatePriceRule", static: false, private: false, access: { has: function (obj) { return "updatePriceRule" in obj; }, get: function (obj) { return obj.updatePriceRule; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deletePriceRule_decorators, { kind: "method", name: "deletePriceRule", static: false, private: false, access: { has: function (obj) { return "deletePriceRule" in obj; }, get: function (obj) { return obj.deletePriceRule; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _restorePriceRule_decorators, { kind: "method", name: "restorePriceRule", static: false, private: false, access: { has: function (obj) { return "restorePriceRule" in obj; }, get: function (obj) { return obj.restorePriceRule; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getRulesByPrice_decorators, { kind: "method", name: "getRulesByPrice", static: false, private: false, access: { has: function (obj) { return "getRulesByPrice" in obj; }, get: function (obj) { return obj.getRulesByPrice; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllActivePriceRules_decorators, { kind: "method", name: "getAllActivePriceRules", static: false, private: false, access: { has: function (obj) { return "getAllActivePriceRules" in obj; }, get: function (obj) { return obj.getAllActivePriceRules; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createPriceSet_decorators, { kind: "method", name: "createPriceSet", static: false, private: false, access: { has: function (obj) { return "createPriceSet" in obj; }, get: function (obj) { return obj.createPriceSet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllPriceSets_decorators, { kind: "method", name: "getAllPriceSets", static: false, private: false, access: { has: function (obj) { return "getAllPriceSets" in obj; }, get: function (obj) { return obj.getAllPriceSets; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPriceSet_decorators, { kind: "method", name: "getPriceSet", static: false, private: false, access: { has: function (obj) { return "getPriceSet" in obj; }, get: function (obj) { return obj.getPriceSet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updatePriceSet_decorators, { kind: "method", name: "updatePriceSet", static: false, private: false, access: { has: function (obj) { return "updatePriceSet" in obj; }, get: function (obj) { return obj.updatePriceSet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deletePriceSet_decorators, { kind: "method", name: "deletePriceSet", static: false, private: false, access: { has: function (obj) { return "deletePriceSet" in obj; }, get: function (obj) { return obj.deletePriceSet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _searchPrices_decorators, { kind: "method", name: "searchPrices", static: false, private: false, access: { has: function (obj) { return "searchPrices" in obj; }, get: function (obj) { return obj.searchPrices; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPricesByCurrency_decorators, { kind: "method", name: "getPricesByCurrency", static: false, private: false, access: { has: function (obj) { return "getPricesByCurrency" in obj; }, get: function (obj) { return obj.getPricesByCurrency; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createPrice_decorators, { kind: "method", name: "createPrice", static: false, private: false, access: { has: function (obj) { return "createPrice" in obj; }, get: function (obj) { return obj.createPrice; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PricingController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PricingController = _classThis;
}();
exports.PricingController = PricingController;
