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
exports.PricingService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var price_list_entity_1 = require("./entities/price-list.entity");
var PricingService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PricingService = _classThis = /** @class */ (function () {
        function PricingService_1(priceListModel, priceListRuleModel, pricePreferenceModel, priceRuleModel, priceSetModel, customerModel, priceModel, moneyAmountModel, variantModel, currencyModel) {
            this.priceListModel = priceListModel;
            this.priceListRuleModel = priceListRuleModel;
            this.pricePreferenceModel = pricePreferenceModel;
            this.priceRuleModel = priceRuleModel;
            this.priceSetModel = priceSetModel;
            this.customerModel = customerModel;
            this.priceModel = priceModel;
            this.moneyAmountModel = moneyAmountModel;
            this.variantModel = variantModel;
            this.currencyModel = currencyModel;
        }
        PricingService_1.prototype.findAllPriceLists = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceListModel.find().exec()];
                });
            });
        };
        PricingService_1.prototype.findPriceListById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceListModel.findById(id).exec()];
                });
            });
        };
        PricingService_1.prototype.removePriceList = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceListModel.findByIdAndDelete(id).exec()];
                });
            });
        };
        // Idem pour les autres entités, tu peux créer des méthodes CRUD similaires
        /**
       * CREATION DES METHODE DE PRriceListRule
       * createPriceListRule()	Crée une nouvelle règle
       * getRulesByPriceList()	Liste toutes les règles liées à une PriceLis
       * getActiveRulesByAttribute()	Filtre les règles actives par attribut
       * updatePriceListRule()	Modifie une règle existante
       * softDeletePriceListRule()	Marque une règle comme supprimée
       * restorePriceListRule()	Restaure une règle soft-deleted
       */
        PricingService_1.prototype.createPriceListRule = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    created = new this.priceListRuleModel(__assign(__assign({}, dto), { price_list: new mongoose_1.Types.ObjectId(dto.price_list) }));
                    return [2 /*return*/, created.save()];
                });
            });
        };
        PricingService_1.prototype.getRulesByPriceList = function (priceListId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceListRuleModel.find({
                            price_list: priceListId,
                        }).exec()];
                });
            });
        };
        PricingService_1.prototype.getActiveRulesByAttribute = function (attribute) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceListRuleModel.find({
                            attribute: attribute,
                            deleted_at: null,
                        }).exec()];
                });
            });
        };
        PricingService_1.prototype.updatePriceListRule = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var updatePayload, updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            updatePayload = __assign({}, dto);
                            // Cast manuel si `price_list` est présent
                            if (dto.price_list) {
                                updatePayload.price_list = new mongoose_1.Types.ObjectId(dto.price_list);
                            }
                            return [4 /*yield*/, this.priceListRuleModel
                                    .findByIdAndUpdate(id, updatePayload, { new: true })
                                    .exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated) {
                                throw new common_1.NotFoundException("PriceListRule with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        PricingService_1.prototype.softDeletePriceListRule = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceListRuleModel.findByIdAndUpdate(id, { deleted_at: new Date() }, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated) {
                                throw new common_1.NotFoundException("PriceListRule with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        PricingService_1.prototype.restorePriceListRule = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var restored;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceListRuleModel.findByIdAndUpdate(id, { deleted_at: null }, { new: true }).exec()];
                        case 1:
                            restored = _a.sent();
                            if (!restored) {
                                throw new common_1.NotFoundException("PriceListRule with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, restored];
                    }
                });
            });
        };
        /**Une PriceList représente :
    
      une liste de prix promotionnels ou d’écrasement (type: SALE ou OVERRIDE)
    
      avec des dates de validité (starts_at, ends_at)
    
      un statut (DRAFT ou ACTIVE)
    
      des règles (PriceListRule) pour filtrer quand la liste s’applique
    
      des prix associés (prices)
      Méthode	Objectif
      createPriceList(dto)	Créer une nouvelle PriceList
      getAllPriceLists()	Lister toutes les PriceLists
      getActivePriceLists()	Lister uniquement les PriceLists actives
      getPriceListsByType(type)	Lister par type (SALE, OVERRIDE)
      getPriceListById(id)	Obtenir une PriceList complète
      updatePriceList(id, dto)	Modifier une PriceList
      activatePriceList(id)	Changer le statut en ACTIVE
      deactivatePriceList(id)	Changer le statut en DRAFT
      deletePriceList(id)	Supprimer la PriceList
    
      */
        PricingService_1.prototype.createPriceList = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                var _a, _b;
                return __generator(this, function (_c) {
                    created = new this.priceListModel(__assign(__assign({}, dto), { prices: (_a = dto.prices) === null || _a === void 0 ? void 0 : _a.map(function (id) { return new mongoose_1.Types.ObjectId(id); }), price_list_rules: (_b = dto.price_list_rules) === null || _b === void 0 ? void 0 : _b.map(function (id) { return new mongoose_1.Types.ObjectId(id); }) }));
                    return [2 /*return*/, created.save()];
                });
            });
        };
        PricingService_1.prototype.getAllPriceLists = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceListModel.find().populate(['prices', 'price_list_rules']).exec()];
                });
            });
        };
        PricingService_1.prototype.getActivePriceLists = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceListModel.find({ status: price_list_entity_1.PriceListStatus.ACTIVE }).exec()];
                });
            });
        };
        PricingService_1.prototype.getPriceListsByType = function (type) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceListModel.find({ type: type }).exec()];
                });
            });
        };
        PricingService_1.prototype.getPriceListById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var list;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceListModel.findById(id).populate(['prices', 'price_list_rules']).exec()];
                        case 1:
                            list = _a.sent();
                            if (!list)
                                throw new common_1.NotFoundException("PriceList ".concat(id, " not found"));
                            return [2 /*return*/, list];
                    }
                });
            });
        };
        PricingService_1.prototype.updatePriceList = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = __assign({}, dto);
                            if (dto.prices) {
                                payload.prices = dto.prices.map(function (id) { return new mongoose_1.Types.ObjectId(id); });
                            }
                            if (dto.price_list_rules) {
                                payload.price_list_rules = dto.price_list_rules.map(function (id) { return new mongoose_1.Types.ObjectId(id); });
                            }
                            return [4 /*yield*/, this.priceListModel.findByIdAndUpdate(id, payload, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("PriceList ".concat(id, " not found"));
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        PricingService_1.prototype.activatePriceList = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.updatePriceList(id, { status: price_list_entity_1.PriceListStatus.ACTIVE })];
                });
            });
        };
        PricingService_1.prototype.deactivatePriceList = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.updatePriceList(id, { status: price_list_entity_1.PriceListStatus.DRAFT })];
                });
            });
        };
        PricingService_1.prototype.deletePriceList = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceListModel.findByIdAndDelete(id).exec()];
                        case 1:
                            result = _a.sent();
                            if (!result)
                                throw new common_1.NotFoundException("PriceList ".concat(id, " not found"));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         *
         * @param priceList
         * @returns
         * ChatGPT a dit :
        Parfait, ajoutons maintenant le support des dates starts_at / ends_at dans ton moteur getApplicablePriceListsForCustomerId. Cela permettra de ne renvoyer que les PriceLists actives au moment de la requête.
         */
        PricingService_1.prototype.isPriceListCurrentlyActive = function (priceList) {
            var now = new Date();
            if (priceList.starts_at && now < new Date(priceList.starts_at)) {
                return false; // Trop tôt
            }
            if (priceList.ends_at && now > new Date(priceList.ends_at)) {
                return false; // Expiré
            }
            return true; // OK
        };
        /**Filtre par status
       
         Filtre par période de validité (starts_at, ends_at)
       
         Filtre selon les PriceListRules dynamiques
         */
        PricingService_1.prototype.getApplicablePriceListsForCustomerId = function (customerId) {
            return __awaiter(this, void 0, void 0, function () {
                var customer, priceLists;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerModel
                                .findById(customerId)
                                .populate('group') // nécessaire pour accéder à group.name
                                .lean()];
                        case 1:
                            customer = _a.sent();
                            if (!customer)
                                throw new common_1.NotFoundException("Customer with ID ".concat(customerId, " not found"));
                            return [4 /*yield*/, this.priceListModel
                                    .find({ status: price_list_entity_1.PriceListStatus.ACTIVE })
                                    .populate('price_list_rules')
                                    .lean()];
                        case 2:
                            priceLists = _a.sent();
                            return [2 /*return*/, priceLists.filter(function (priceList) {
                                    var rules = priceList.price_list_rules || [];
                                    // 1. La période de validité doit être bonne
                                    var isActiveNow = _this.isPriceListCurrentlyActive(priceList);
                                    if (!isActiveNow)
                                        return false;
                                    // 2. Toutes les règles doivent matcher
                                    return rules.every(function (rule) { return _this.doesRuleApplyToCustomer(rule, customer); });
                                })];
                    }
                });
            });
        };
        /**
         * Vérifie si une règle s'applique à un client
         */
        PricingService_1.prototype.doesRuleApplyToCustomer = function (rule, customer) {
            var attr = rule.attribute;
            var expectedValue = rule.value;
            var actualValue = this.getCustomerAttributeValue(attr, customer);
            if (expectedValue === null || expectedValue === undefined)
                return true;
            if (Array.isArray(expectedValue)) {
                return expectedValue.includes(actualValue);
            }
            return actualValue === expectedValue;
        };
        /**
         * Récupère dynamiquement la valeur d’un attribut sur le customer
         */
        PricingService_1.prototype.getCustomerAttributeValue = function (attribute, customer) {
            var _a, _b;
            switch (attribute) {
                case 'group':
                case 'customer_group':
                    return (_a = customer.group) === null || _a === void 0 ? void 0 : _a.name;
                case 'role':
                    return customer.role;
                case 'country':
                    return ((_b = customer.address) === null || _b === void 0 ? void 0 : _b.country) || customer.country;
                default:
                    return customer[attribute];
            }
        };
        /**
         * Cela permet de configurer dynamiquement comment afficher les prix (TTC/HT)
         *  selon des critères comme : pays, rôle, canal, etc.
         */
        PricingService_1.prototype.createPricePreference = function (dto, userRole) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    if (userRole !== 'ADMIN') {
                        throw new common_1.ForbiddenException('Only admins can create price preferences');
                    }
                    created = new this.pricePreferenceModel(dto);
                    return [2 /*return*/, created.save()];
                });
            });
        };
        PricingService_1.prototype.getAllPricePreferences = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricePreferenceModel.find({ deleted_at: null }).exec()];
                });
            });
        };
        PricingService_1.prototype.getPricePreferencesByAttribute = function (attribute) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pricePreferenceModel.find({ attribute: attribute, deleted_at: null }).exec()];
                });
            });
        };
        PricingService_1.prototype.updatePricePreference = function (id, dto, userRole) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (userRole !== 'ADMIN') {
                                throw new common_1.ForbiddenException('Only admins can update price preferences');
                            }
                            return [4 /*yield*/, this.pricePreferenceModel.findOneAndUpdate({ _id: id, deleted_at: null }, dto, { new: true })];
                        case 1:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("PricePreference with id ".concat(id, " not found"));
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        PricingService_1.prototype.softDeletePricePreference = function (id, userRole) {
            return __awaiter(this, void 0, void 0, function () {
                var deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (userRole !== 'ADMIN') {
                                throw new common_1.ForbiddenException('Only admins can delete price preferences');
                            }
                            return [4 /*yield*/, this.pricePreferenceModel.findOneAndUpdate({ _id: id, deleted_at: null }, { deleted_at: new Date() }, { new: true })];
                        case 1:
                            deleted = _a.sent();
                            if (!deleted)
                                throw new common_1.NotFoundException("PricePreference with id ".concat(id, " not found"));
                            return [2 /*return*/, deleted];
                    }
                });
            });
        };
        PricingService_1.prototype.restorePricePreference = function (id, userRole) {
            return __awaiter(this, void 0, void 0, function () {
                var restored;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (userRole !== 'ADMIN') {
                                throw new common_1.ForbiddenException('Only admins can restore price preferences');
                            }
                            return [4 /*yield*/, this.pricePreferenceModel.findOneAndUpdate({ _id: id, deleted_at: { $ne: null } }, { deleted_at: null }, { new: true })];
                        case 1:
                            restored = _a.sent();
                            if (!restored)
                                throw new common_1.NotFoundException("PricePreference with id ".concat(id, " not found or not deleted"));
                            return [2 /*return*/, restored];
                    }
                });
            });
        };
        /**
         *
         * PRICE-RULE
         */
        // pricing.service.ts
        PricingService_1.prototype.createPriceRule = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceRuleModel.create(dto)];
                });
            });
        };
        PricingService_1.prototype.updatePriceRule = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceRuleModel.findByIdAndUpdate(id, dto, { new: true })];
                        case 1:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("PriceRule ".concat(id, " not found"));
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        PricingService_1.prototype.deletePriceRule = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var rule;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceRuleModel.findById(id)];
                        case 1:
                            rule = _a.sent();
                            if (!rule)
                                throw new common_1.NotFoundException("PriceRule ".concat(id, " not found"));
                            rule.deleted_at = new Date();
                            return [4 /*yield*/, rule.save()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, { success: true }];
                    }
                });
            });
        };
        PricingService_1.prototype.restorePriceRule = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var rule;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceRuleModel.findById(id)];
                        case 1:
                            rule = _a.sent();
                            if (!rule)
                                throw new common_1.NotFoundException("PriceRule ".concat(id, " not found"));
                            rule.deleted_at = null;
                            return [4 /*yield*/, rule.save()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, rule];
                    }
                });
            });
        };
        PricingService_1.prototype.getPriceRulesByPrice = function (priceId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceRuleModel.find({ price: priceId, deleted_at: null })];
                });
            });
        };
        PricingService_1.prototype.getAllActivePriceRules = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceRuleModel.find({ deleted_at: null })];
                });
            });
        };
        /**
         * Un PriceSet est un regroupement de plusieurs prix (Price). Cela te permet de représenter plusieurs variations tarifaires associées ensemble — par exemple :
      
      un produit a plusieurs variantes (taille, couleur)
      
      ou un même produit a plusieurs prix selon le canal, le pays, etc.
      
      C’est une entité simple mais puissante pour regrouper les objets
         */
        // Créer un PriceSet
        PricingService_1.prototype.createPriceSet = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var prices;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceModel.find({ _id: { $in: dto.prices }, deleted_at: null })];
                        case 1:
                            prices = _a.sent();
                            if (prices.length !== dto.prices.length) {
                                throw new common_1.BadRequestException('Certains prix fournis sont invalides ou supprimés');
                            }
                            return [2 /*return*/, this.priceSetModel.create(dto)];
                    }
                });
            });
        };
        // Lire tous les PriceSet
        PricingService_1.prototype.getAllPriceSets = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceSetModel.find().populate('prices').exec()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        // Lire un seul PriceSet par ID
        PricingService_1.prototype.getPriceSetById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var priceSet;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceSetModel.findById(id).populate('prices').exec()];
                        case 1:
                            priceSet = _a.sent();
                            if (!priceSet)
                                throw new common_1.NotFoundException("PriceSet ".concat(id, " not found"));
                            return [2 /*return*/, priceSet];
                    }
                });
            });
        };
        // Mettre à jour un PriceSet
        PricingService_1.prototype.updatePriceSet = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceSetModel.findByIdAndUpdate(id, dto, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("PriceSet ".concat(id, " not found"));
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        // Supprimer un PriceSet
        PricingService_1.prototype.deletePriceSet = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceSetModel.findByIdAndDelete(id)];
                        case 1:
                            result = _a.sent();
                            if (!result)
                                throw new common_1.NotFoundException("PriceSet ".concat(id, " not found"));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * creation des prix en fonction des vendeur
         */
        /*
          async createPrice(dto: CreatePriceDto): Promise<Price> {
            const price = new this.priceModel({
              ...dto,
              region: dto.region,
              country: dto.country,
              product_variant: dto.product_variant,
            });
            return price.save();
          }*/
        PricingService_1.prototype.updatePrice = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var updateData, updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            updateData = __assign({}, dto);
                            // On s'assure que les relations sont bien prises en compte
                            if (dto.region)
                                updateData.region = dto.region;
                            if (dto.country)
                                updateData.country = dto.country;
                            if (dto.product_variant)
                                updateData.product_variant = dto.product_variant;
                            return [4 /*yield*/, this.priceModel.findByIdAndUpdate(id, updateData, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated) {
                                throw new common_1.NotFoundException("Price with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        PricingService_1.prototype.findAllPrices = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceModel.find().populate(['region', 'country', 'product_variant', 'price_set', 'price_rules', 'price_list']).exec()];
                });
            });
        };
        PricingService_1.prototype.findPriceById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var price;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceModel.findById(id).populate(['region', 'country', 'product_variant', 'price_set', 'price_rules', 'price_list']).exec()];
                        case 1:
                            price = _a.sent();
                            if (!price) {
                                throw new common_1.NotFoundException("Price with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, price];
                    }
                });
            });
        };
        PricingService_1.prototype.removePrice = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.priceModel.findByIdAndDelete(id).exec()];
                        case 1:
                            result = _a.sent();
                            if (!result) {
                                throw new common_1.NotFoundException("Price with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /** rechercher de prix par region country et product variant */
        PricingService_1.prototype.findPricesByRegionCountryProductVariant = function (regionId, countryId, productVariantId) {
            return __awaiter(this, void 0, void 0, function () {
                var filter;
                return __generator(this, function (_a) {
                    filter = {};
                    if (regionId) {
                        filter.region = regionId;
                    }
                    if (countryId) {
                        filter.country = countryId;
                    }
                    if (productVariantId) {
                        filter.product_variant = productVariantId;
                    }
                    return [2 /*return*/, this.priceModel
                            .find(filter)
                            .populate(['region', 'country', 'product_variant', 'price_set', 'price_rules', 'price_list'])
                            .exec()];
                });
            });
        };
        PricingService_1.prototype.findPricesByCurrency = function (currencyId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.priceModel
                            .find({ currency: currencyId })
                            .populate(['region', 'country', 'product_variant', 'price_set', 'price_rules', 'price_list', 'currency'])
                            .exec()];
                });
            });
        };
        /**
         *
         * @param dto
         * @returns un amount
         * La création d’un prix (MoneyAmount) se fait via le service et associe une devise et un variant
        
          Le variant garde une liste de ses prix (MoneyAmount)
        
          On peut récupérer facilement la liste des prix d’un variant via le service
         */
        PricingService_1.prototype.createMoneyAmount = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var currency, moneyAmount, savedMoneyAmount, variant;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.currencyModel.findOne({ code: dto.currency_code })];
                        case 1:
                            currency = _a.sent();
                            if (!currency) {
                                throw new common_1.NotFoundException("Currency with code ".concat(dto.currency_code, " not found"));
                            }
                            moneyAmount = new this.moneyAmountModel({
                                amount: dto.amount,
                                currency_code: dto.currency_code,
                                currency: currency._id,
                            });
                            return [4 /*yield*/, moneyAmount.save()];
                        case 2:
                            savedMoneyAmount = _a.sent();
                            if (!dto.variant_id) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.variantModel.findById(dto.variant_id)];
                        case 3:
                            variant = _a.sent();
                            if (!variant) {
                                throw new common_1.NotFoundException("ProductVariant with id ".concat(dto.variant_id, " not found"));
                            }
                            // Ajouter l'ID dans variant.prices (évite les doublons)
                            return [4 /*yield*/, this.variantModel.findByIdAndUpdate(dto.variant_id, { $addToSet: { prices: savedMoneyAmount._id } }, { new: true })];
                        case 4:
                            // Ajouter l'ID dans variant.prices (évite les doublons)
                            _a.sent();
                            _a.label = 5;
                        case 5: return [2 /*return*/, savedMoneyAmount];
                    }
                });
            });
        };
        PricingService_1.prototype.getPricesForVariant = function (variantId) {
            return __awaiter(this, void 0, void 0, function () {
                var variant;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.variantModel.findById(variantId).populate('prices')];
                        case 1:
                            variant = _a.sent();
                            if (!variant) {
                                throw new common_1.NotFoundException("ProductVariant with id ".concat(variantId, " not found"));
                            }
                            return [2 /*return*/, variant.prices];
                    }
                });
            });
        };
        PricingService_1.prototype.getAllPrices = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.moneyAmountModel.find().exec()];
                });
            });
        };
        return PricingService_1;
    }());
    __setFunctionName(_classThis, "PricingService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PricingService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PricingService = _classThis;
}();
exports.PricingService = PricingService;
