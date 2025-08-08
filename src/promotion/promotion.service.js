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
exports.PromotionService = void 0;
var common_1 = require("@nestjs/common");
var enum_pormotion_1 = require("./enum-pormotion");
var schedule_1 = require("@nestjs/schedule");
var PromotionService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _updateAllStatuses_decorators;
    var PromotionService = _classThis = /** @class */ (function () {
        function PromotionService_1(applicationMethodModel, campaignBudgetModel, campaignModel, promotionRuleModel, promotionRuleValueModel, promotionModel, productModel, moneyAmountModel) {
            this.applicationMethodModel = (__runInitializers(this, _instanceExtraInitializers), applicationMethodModel);
            this.campaignBudgetModel = campaignBudgetModel;
            this.campaignModel = campaignModel;
            this.promotionRuleModel = promotionRuleModel;
            this.promotionRuleValueModel = promotionRuleValueModel;
            this.promotionModel = promotionModel;
            this.productModel = productModel;
            this.moneyAmountModel = moneyAmountModel;
        }
        PromotionService_1.prototype.findAllByUser = function (storeId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.promotionModel.find({ store: storeId })]; // ou selon ta logique
                });
            });
        };
        PromotionService_1.prototype.findAllByVendor = function (vendorId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.promotionModel.find({ vendorId: vendorId }).exec()];
                });
            });
        };
        /**IMPORTANT
         * EST CE QUE LA PROMTION EST ELIGIBLE ? , changement automatiser du statu stout les 1h
         */
        PromotionService_1.prototype.isPromotionEligible = function (promo, cart, user) {
            var _a, _b, _c;
            var now = new Date();
            if (promo.status !== 'active')
                return false;
            if (promo.start_date && promo.start_date > now)
                return false;
            if (promo.end_date && promo.end_date < now)
                return false;
            if (promo.min_cart_total && cart.total < promo.min_cart_total)
                return false;
            // Produits ciblés
            if (((_a = promo.products) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                var eligible = cart.items.some(function (item) {
                    var productId = typeof item.product === 'object' && '_id' in item.product
                        ? item.product._id
                        : item.product;
                    return promo.products.map(function (p) { return p.toString(); }).includes(productId.toString());
                });
                if (!eligible)
                    return false;
            }
            // Groupes de clients
            if (((_b = promo.customerGroups) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                if (!user.customerGroup)
                    return false;
                var groupMatch = promo.customerGroups.some(function (groupId) { var _a; return groupId.toString() === ((_a = user.customerGroup) === null || _a === void 0 ? void 0 : _a.toString()); });
                if (!groupMatch)
                    return false;
            }
            // Régions
            if (((_c = promo.regions) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                if (!cart.region_id)
                    return false;
                var regionMatch = promo.regions
                    .map(function (r) { return r.toString(); })
                    .includes(cart.region_id.toString());
                if (!regionMatch)
                    return false;
            }
            return true;
        };
        /**
         *
         * @param promo
         * @param cart
         * @returns
         */
        PromotionService_1.prototype.calculateDiscount = function (promo, cart) {
            var totalDiscount = 0;
            cart.items.forEach(function (item) {
                var productEligible = promo.products.length === 0 ||
                    promo.products.includes(item.product._id);
                if (!productEligible)
                    return;
                var price = item.unit_price * item.quantity;
                if (promo.discount_type === 'percentage') {
                    totalDiscount += (promo.value / 100) * price;
                }
                else if (promo.discount_type === 'fixed') {
                    totalDiscount += promo.value;
                }
            });
            if (promo.applies_to_shipping && cart.total) {
                if (promo.discount_type === 'percentage') {
                    totalDiscount += (promo.value / 100) * cart.total;
                }
                else {
                    totalDiscount += promo.value;
                }
            }
            return Math.min(totalDiscount, cart.total);
        };
        PromotionService_1.prototype.determineStatus = function (promotion) {
            var now = new Date();
            if (promotion.start_date && promotion.start_date > now) {
                return enum_pormotion_1.PromotionStatus.DRAFT;
            }
            if (promotion.end_date && promotion.end_date < now) {
                return enum_pormotion_1.PromotionStatus.EXPIRED;
            }
            if (!promotion.is_active) {
                return enum_pormotion_1.PromotionStatus.DELETED;
            }
            return enum_pormotion_1.PromotionStatus.ACTIVE;
        };
        PromotionService_1.prototype.updateAllStatuses = function () {
            return __awaiter(this, void 0, void 0, function () {
                var promotions, _i, promotions_1, promo, newStatus;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.promotionModel.find()];
                        case 1:
                            promotions = _a.sent();
                            _i = 0, promotions_1 = promotions;
                            _a.label = 2;
                        case 2:
                            if (!(_i < promotions_1.length)) return [3 /*break*/, 5];
                            promo = promotions_1[_i];
                            newStatus = this.determineStatus(promo);
                            if (!(promo.status !== newStatus)) return [3 /*break*/, 4];
                            promo.status = newStatus;
                            return [4 /*yield*/, promo.save()];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        PromotionService_1.prototype.calculatePromotionDiscount = function (promo, cart) {
            return __awaiter(this, void 0, void 0, function () {
                var totalDiscount, _i, _a, item, variantId, moneyAmount, itemTotal, productId, isTargeted;
                var _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            totalDiscount = 0;
                            _i = 0, _a = cart.items;
                            _e.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            item = _a[_i];
                            variantId = typeof item.product_variant === 'object' && '_id' in item.product_variant
                                ? item.product_variant._id
                                : item.product_variant;
                            return [4 /*yield*/, this.moneyAmountModel.findOne({
                                    variant: variantId,
                                    currency_code: cart.currency_code,
                                    deleted_at: null,
                                })];
                        case 2:
                            moneyAmount = _e.sent();
                            if (!moneyAmount)
                                return [3 /*break*/, 3];
                            itemTotal = moneyAmount.amount * item.quantity;
                            productId = null;
                            if (typeof item.product_variant === 'object' && 'product' in item.product_variant) {
                                productId = (_c = (_b = item.product_variant.product) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : null;
                            }
                            isTargeted = !((_d = promo.products) === null || _d === void 0 ? void 0 : _d.length) ||
                                (productId && promo.products.map(function (p) { return p.toString(); }).includes(productId));
                            if (isTargeted) {
                                if (promo.discount_type === 'percentage') {
                                    totalDiscount += (promo.value / 100) * itemTotal;
                                }
                                else if (promo.discount_type === 'fixed') {
                                    totalDiscount += promo.value;
                                }
                            }
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, totalDiscount];
                    }
                });
            });
        };
        PromotionService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.promotionModel.find({ deleted: false }).exec()];
                });
            });
        };
        PromotionService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var promo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.promotionModel.findById(id)];
                        case 1:
                            promo = _a.sent();
                            if (!promo || promo.deleted)
                                throw new common_1.NotFoundException('Promotion introuvable');
                            return [2 /*return*/, promo];
                    }
                });
            });
        };
        PromotionService_1.prototype.create = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.promotionModel.create(dto)];
                });
            });
        };
        PromotionService_1.prototype.update = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var promo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.promotionModel.findByIdAndUpdate(id, dto, { new: true })];
                        case 1:
                            promo = _a.sent();
                            if (!promo)
                                throw new common_1.NotFoundException('Promotion introuvable');
                            return [2 /*return*/, promo];
                    }
                });
            });
        };
        PromotionService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var promo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.promotionModel.findById(id)];
                        case 1:
                            promo = _a.sent();
                            if (!promo)
                                throw new common_1.NotFoundException('Promotion introuvable');
                            promo.deleted = true;
                            return [2 /*return*/, promo.save()];
                    }
                });
            });
        };
        PromotionService_1.prototype.softDelete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var promotion;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.promotionModel.findById(id)];
                        case 1:
                            promotion = _a.sent();
                            if (!promotion) {
                                throw new common_1.NotFoundException('Promotion non trouvée');
                            }
                            promotion.status = enum_pormotion_1.PromotionStatus.DELETED;
                            return [4 /*yield*/, promotion.save()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, { message: 'Promotion supprimée (soft delete)' }];
                    }
                });
            });
        };
        return PromotionService_1;
    }());
    __setFunctionName(_classThis, "PromotionService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _updateAllStatuses_decorators = [(0, schedule_1.Cron)('*/60 * * * *')];
        __esDecorate(_classThis, null, _updateAllStatuses_decorators, { kind: "method", name: "updateAllStatuses", static: false, private: false, access: { has: function (obj) { return "updateAllStatuses" in obj; }, get: function (obj) { return obj.updateAllStatuses; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PromotionService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PromotionService = _classThis;
}();
exports.PromotionService = PromotionService;
