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
exports.FulfillmentService = void 0;
var common_1 = require("@nestjs/common");
var FulfillmentService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var FulfillmentService = _classThis = /** @class */ (function () {
        function FulfillmentService_1(fulfillmentAddressModel, fulfillmentItemModel, fulfillmentLabelModel, fulfillmentProviderModel, fulfillmentSetModel, geoZoneModel, serviceZoneModel, shippingOptionModel, fulfillmentModel, orderModel) {
            this.fulfillmentAddressModel = fulfillmentAddressModel;
            this.fulfillmentItemModel = fulfillmentItemModel;
            this.fulfillmentLabelModel = fulfillmentLabelModel;
            this.fulfillmentProviderModel = fulfillmentProviderModel;
            this.fulfillmentSetModel = fulfillmentSetModel;
            this.geoZoneModel = geoZoneModel;
            this.serviceZoneModel = serviceZoneModel;
            this.shippingOptionModel = shippingOptionModel;
            this.fulfillmentModel = fulfillmentModel;
            this.orderModel = orderModel;
        }
        FulfillmentService_1.prototype.isShippingOptionRule = function (rule) {
            return typeof rule === 'object' && 'attribute' in rule;
        };
        FulfillmentService_1.prototype.create = function (createFulfillmentDto) {
            return __awaiter(this, void 0, void 0, function () {
                var orderExists, created;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.orderModel.exists({ _id: createFulfillmentDto.order })];
                        case 1:
                            orderExists = _a.sent();
                            if (!orderExists) {
                                throw new common_1.NotFoundException('commande non trouver');
                            }
                            created = new this.fulfillmentModel(createFulfillmentDto);
                            return [2 /*return*/, created.save()];
                    }
                });
            });
        };
        FulfillmentService_1.prototype.findAll = function () {
            return __awaiter(this, arguments, void 0, function (page, limit) {
                var skip, _a, data, total;
                if (page === void 0) { page = 1; }
                if (limit === void 0) { limit = 20; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            skip = (page - 1) * limit;
                            return [4 /*yield*/, Promise.all([
                                    this.fulfillmentModel.find({ deleted_at: null }).skip(skip).limit(limit).populate('order').exec(),
                                    this.fulfillmentModel.countDocuments({ deleted_at: null }),
                                ])];
                        case 1:
                            _a = _b.sent(), data = _a[0], total = _a[1];
                            return [2 /*return*/, { data: data, total: total, page: page }];
                    }
                });
            });
        };
        FulfillmentService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var fulfillment;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentModel.findOne({ _id: id, deleted_at: null }).populate('order').exec()];
                        case 1:
                            fulfillment = _a.sent();
                            if (!fulfillment) {
                                throw new common_1.NotFoundException("Fulfillment with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, fulfillment];
                    }
                });
            });
        };
        FulfillmentService_1.prototype.update = function (id, updateFulfillmentDto) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentModel.findOneAndUpdate({ _id: id, deleted_at: null }, updateFulfillmentDto, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated) {
                                throw new common_1.NotFoundException("Fulfillment with id ".concat(id, " not found or deleted"));
                            }
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        FulfillmentService_1.prototype.softDelete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentModel.findOneAndUpdate({ _id: id, deleted_at: null }, { deleted_at: new Date() }).exec()];
                        case 1:
                            deleted = _a.sent();
                            if (!deleted) {
                                throw new common_1.NotFoundException("Fulfillment with id ".concat(id, " not found or already deleted"));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        FulfillmentService_1.prototype.hardDelete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentModel.findByIdAndDelete(id).exec()];
                        case 1:
                            result = _a.sent();
                            if (!result) {
                                throw new common_1.NotFoundException("Fulfillment with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        // Exemple : créer une adresse liée à un fulfillment
        FulfillmentService_1.prototype.createFulfillmentAddress = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var fulfillment, address;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentModel.findById(dto.fulfillment)];
                        case 1:
                            fulfillment = _a.sent();
                            if (!fulfillment) {
                                throw new Error('Fulfillment not found');
                            }
                            address = new this.fulfillmentAddressModel(dto);
                            return [2 /*return*/, address.save()];
                    }
                });
            });
        };
        // Récupérer une adresse par son id
        FulfillmentService_1.prototype.getFulfillmentAddressById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fulfillmentAddressModel.findById(id).exec()];
                });
            });
        };
        // Ajouter un item à un fulfillment
        FulfillmentService_1.prototype.addFulfillmentItem = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var fulfillment, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentModel.findById(dto.fulfillment)];
                        case 1:
                            fulfillment = _a.sent();
                            if (!fulfillment) {
                                throw new Error('Fulfillment not found');
                            }
                            item = new this.fulfillmentItemModel(dto);
                            return [2 /*return*/, item.save()];
                    }
                });
            });
        };
        // Obtenir tous les items d’un fulfillment
        FulfillmentService_1.prototype.getFulfillmentItemsByFulfillment = function (fulfillmentId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fulfillmentItemModel.find({ fulfillment: fulfillmentId }).exec()];
                });
            });
        };
        // Créer un label
        FulfillmentService_1.prototype.createFulfillmentLabel = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var fulfillment, label;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentModel.findById(dto.fulfillment)];
                        case 1:
                            fulfillment = _a.sent();
                            if (!fulfillment) {
                                throw new Error('Fulfillment not found');
                            }
                            label = new this.fulfillmentLabelModel(dto);
                            return [2 /*return*/, label.save()];
                    }
                });
            });
        };
        // Récupérer les labels d’un fulfillment
        FulfillmentService_1.prototype.getLabelsByFulfillment = function (fulfillmentId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fulfillmentLabelModel.find({ fulfillment: fulfillmentId }).exec()];
                });
            });
        };
        // Liste des providers activés
        FulfillmentService_1.prototype.getAllFulfillmentProviders = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fulfillmentProviderModel.find({ is_enabled: true }).exec()];
                });
            });
        };
        // Activer un provider
        FulfillmentService_1.prototype.enableProvider = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fulfillmentProviderModel.findByIdAndUpdate(id, { is_enabled: true }, { new: true }).exec()];
                });
            });
        };
        // Désactiver un provider
        FulfillmentService_1.prototype.disableProvider = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fulfillmentProviderModel.findByIdAndUpdate(id, { is_enabled: false }, { new: true }).exec()];
                });
            });
        };
        // Liste des sets
        FulfillmentService_1.prototype.getAllFulfillmentSets = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fulfillmentSetModel.find().exec()];
                });
            });
        };
        // Récupérer zones géographiques d’une zone de service
        FulfillmentService_1.prototype.getGeoZonesByServiceZone = function (serviceZoneId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.geoZoneModel.find({ service_zone: serviceZoneId, deleted_at: null }).exec()];
                });
            });
        };
        // Obtenir une zone de service complète
        FulfillmentService_1.prototype.getServiceZoneDetails = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.serviceZoneModel.findById(id).exec()];
                });
            });
        };
        // Obtenir options d’expédition d’une zone de service
        FulfillmentService_1.prototype.getShippingOptionsByServiceZone = function (serviceZoneId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.shippingOptionModel.find({ service_zone: serviceZoneId }).exec()];
                });
            });
        };
        // Ajouter une option d’expédition
        FulfillmentService_1.prototype.addShippingOption = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var serviceZone, shippingOption;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.serviceZoneModel.findById(dto.service_zone)];
                        case 1:
                            serviceZone = _a.sent();
                            if (!serviceZone) {
                                throw new Error('Service zone not found');
                            }
                            shippingOption = new this.shippingOptionModel(dto);
                            return [2 /*return*/, shippingOption.save()];
                    }
                });
            });
        };
        /**
       * Trouve les ShippingOptions valides pour un panier donné
       * en appliquant les règles configurées (poids, pays, prix...)
       */
        FulfillmentService_1.prototype.getValidShippingOptions = function (orderData) {
            return __awaiter(this, void 0, void 0, function () {
                var allOptions, validOptions;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.shippingOptionModel
                                .find()
                                .populate('rules') // indispensable pour avoir des ShippingOptionRule complets
                                .populate('service_zone')
                                .exec()];
                        case 1:
                            allOptions = _a.sent();
                            validOptions = allOptions.filter(function (option) {
                                return option.rules.every(function (rule) {
                                    if (!_this.isShippingOptionRule(rule)) {
                                        throw new Error("Rule is not populated. Did you forget .populate('rules') ?");
                                    }
                                    var operator = rule.operator, attribute = rule.attribute, value = rule.value;
                                    switch (attribute) {
                                        case 'weight':
                                            return _this.checkRule(orderData.totalWeight, operator, value);
                                        case 'country_code':
                                            return _this.checkRule(orderData.countryCode, operator, value);
                                        case 'subtotal':
                                            return _this.checkRule(orderData.subtotal, operator, value);
                                        default:
                                            return true; // Règle inconnue => on ignore
                                    }
                                });
                            });
                            return [2 /*return*/, validOptions];
                    }
                });
            });
        };
        /**
         * Vérifie une règle simple (poids, prix, pays)
         */
        FulfillmentService_1.prototype.checkRule = function (input, operator, value) {
            switch (operator) {
                case 'eq':
                    return input === value;
                case 'ne':
                    return input !== value;
                case 'gt':
                    return input > value;
                case 'gte':
                    return input >= value;
                case 'lt':
                    return input < value;
                case 'lte':
                    return input <= value;
                case 'in':
                    return Array.isArray(value) && value.includes(input);
                case 'nin':
                    return Array.isArray(value) && !value.includes(input);
                default:
                    return true;
            }
        };
        /**
         * Calcule le prix d'une ShippingOption en fonction de son type
         */
        FulfillmentService_1.prototype.calculateShippingPrice = function (optionId, context) {
            return __awaiter(this, void 0, void 0, function () {
                var option, base, perKg, price;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.shippingOptionModel
                                .findById(optionId)
                                .populate('type')
                                .exec()];
                        case 1:
                            option = _d.sent();
                            if (!option) {
                                throw new Error('Shipping option not found');
                            }
                            if (option.price_type === 'flat') {
                                // Exemple : prix fixe dans option.data.amount
                                return [2 /*return*/, ((_a = option.data) === null || _a === void 0 ? void 0 : _a.amount) || 0];
                            }
                            if (option.price_type === 'calculated') {
                                base = ((_b = option.data) === null || _b === void 0 ? void 0 : _b.base) || 0;
                                perKg = ((_c = option.data) === null || _c === void 0 ? void 0 : _c.per_kg) || 0;
                                price = base + (context.totalWeight * perKg);
                                return [2 /*return*/, price];
                            }
                            throw new Error('Unknown price type');
                    }
                });
            });
        };
        /**
         * Liste toutes les options d'un profil,
         * filtrées selon les règles et calcul des prix.
         */
        // ➜ GET Fulfillment Address (par Fulfillment ID)
        FulfillmentService_1.prototype.getFulfillmentAddress = function (fulfillmentId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.fulfillmentAddressModel.findOne({ fulfillment: fulfillmentId }).exec()];
                });
            });
        };
        // ➜ UPDATE Fulfillment Address
        FulfillmentService_1.prototype.updateFulfillmentAddress = function (fulfillmentId, addressId, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var address;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentAddressModel.findOneAndUpdate({ _id: addressId, fulfillment: fulfillmentId }, dto, { new: true }).exec()];
                        case 1:
                            address = _a.sent();
                            if (!address) {
                                throw new common_1.NotFoundException("Address not found for this fulfillment");
                            }
                            return [2 /*return*/, address];
                    }
                });
            });
        };
        // ➜ DELETE Fulfillment Address
        FulfillmentService_1.prototype.deleteFulfillmentAddress = function (fulfillmentId, addressId) {
            return __awaiter(this, void 0, void 0, function () {
                var deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fulfillmentAddressModel.findOneAndDelete({
                                _id: addressId,
                                fulfillment: fulfillmentId,
                            }).exec()];
                        case 1:
                            deleted = _a.sent();
                            if (!deleted) {
                                throw new common_1.NotFoundException("Address not found for this fulfillment");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return FulfillmentService_1;
    }());
    __setFunctionName(_classThis, "FulfillmentService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FulfillmentService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FulfillmentService = _classThis;
}();
exports.FulfillmentService = FulfillmentService;
