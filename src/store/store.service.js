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
exports.StoreService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var StoreService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var StoreService = _classThis = /** @class */ (function () {
        function StoreService_1(currencyModel, storeModel, userModel, jwtService) {
            this.currencyModel = currencyModel;
            this.storeModel = storeModel;
            this.userModel = userModel;
            this.jwtService = jwtService;
        }
        StoreService_1.prototype.createStoreForExistingUser = function (dto, ownerId) {
            return __awaiter(this, void 0, void 0, function () {
                var user, store;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(ownerId, 'ownerid');
                            return [4 /*yield*/, this.userModel.findById(ownerId)];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                throw new common_1.NotFoundException("Utilisateur introuvable");
                            }
                            return [4 /*yield*/, this.storeModel.create(__assign(__assign({}, dto), { owner: user._id, status: 'inactive', metadata: {} }))];
                        case 2:
                            store = _a.sent();
                            return [2 /*return*/, {
                                    message: "Boutique créée avec succès",
                                    store: store,
                                }];
                    }
                });
            });
        };
        StoreService_1.prototype.findByUserId = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.storeModel.findOne({ user: userId }).exec()];
                });
            });
        };
        StoreService_1.prototype.findStoreByUserId = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.storeModel.findOne({ owner: userId }).exec()];
                });
            });
        };
        StoreService_1.prototype.updateStore = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.storeModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        StoreService_1.prototype.getMyStores = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.storeModel.find({ owner: userId })];
                });
            });
        };
        // store.service.ts
        StoreService_1.prototype.findAll = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, page, _b, limit, _c, q, query, _d, stores, count;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _a = params.page, page = _a === void 0 ? 1 : _a, _b = params.limit, limit = _b === void 0 ? 10 : _b, _c = params.q, q = _c === void 0 ? "" : _c;
                            query = q
                                ? { name: { $regex: q, $options: "i" } }
                                : {};
                            return [4 /*yield*/, Promise.all([
                                    this.storeModel
                                        .find(query)
                                        .skip((page - 1) * limit)
                                        .limit(limit)
                                        .populate('owner', 'email first_name last_name'), //  important
                                    this.storeModel.countDocuments(query),
                                ])];
                        case 1:
                            _d = _e.sent(), stores = _d[0], count = _d[1];
                            return [2 /*return*/, { stores: stores, count: count }];
                    }
                });
            });
        };
        StoreService_1.prototype.findOne = function (id, user) {
            return __awaiter(this, void 0, void 0, function () {
                var storeId;
                var _a;
                return __generator(this, function (_b) {
                    storeId = id === 'me' ? (_a = user === null || user === void 0 ? void 0 : user.id) !== null && _a !== void 0 ? _a : id : id;
                    if (!mongoose_1.default.Types.ObjectId.isValid(storeId)) {
                        throw new common_1.BadRequestException('Invalid store ID');
                    }
                    return [2 /*return*/, this.storeModel
                            .findById(storeId)
                            .populate('owner', 'email first_name last_name')];
                });
            });
        };
        StoreService_1.prototype.update = function (id, updateStoreDto) {
            return __awaiter(this, void 0, void 0, function () {
                var updatedStore;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.storeModel.findByIdAndUpdate(id, updateStoreDto, { new: true }).exec()];
                        case 1:
                            updatedStore = _a.sent();
                            if (!updatedStore) {
                                throw new common_1.NotFoundException("Store with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, updatedStore];
                    }
                });
            });
        };
        StoreService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var deletedStore;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.storeModel.findByIdAndDelete(id).exec()];
                        case 1:
                            deletedStore = _a.sent();
                            if (!deletedStore) {
                                throw new common_1.NotFoundException("Store with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, deletedStore];
                    }
                });
            });
        };
        //-------------------------------
        // CRUD CURRENCY
        // -------------------------------
        StoreService_1.prototype.createCurrency = function (createCurrencyDto) {
            return __awaiter(this, void 0, void 0, function () {
                var createdCurrency;
                return __generator(this, function (_a) {
                    createdCurrency = new this.currencyModel(createCurrencyDto);
                    return [2 /*return*/, createdCurrency.save()];
                });
            });
        };
        StoreService_1.prototype.findAllCurrencies = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.currencyModel.find().exec()];
                });
            });
        };
        StoreService_1.prototype.findOneCurrency = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var currency;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.currencyModel.findById(id).exec()];
                        case 1:
                            currency = _a.sent();
                            if (!currency) {
                                throw new common_1.NotFoundException("Currency with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, currency];
                    }
                });
            });
        };
        StoreService_1.prototype.updateCurrency = function (id, updateCurrencyDto) {
            return __awaiter(this, void 0, void 0, function () {
                var updatedCurrency;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.currencyModel.findByIdAndUpdate(id, updateCurrencyDto, { new: true }).exec()];
                        case 1:
                            updatedCurrency = _a.sent();
                            if (!updatedCurrency) {
                                throw new common_1.NotFoundException("Currency with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, updatedCurrency];
                    }
                });
            });
        };
        StoreService_1.prototype.removeCurrency = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var deletedCurrency;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.currencyModel.findByIdAndDelete(id).exec()];
                        case 1:
                            deletedCurrency = _a.sent();
                            if (!deletedCurrency) {
                                throw new common_1.NotFoundException("Currency with id ".concat(id, " not found"));
                            }
                            return [2 /*return*/, deletedCurrency];
                    }
                });
            });
        };
        return StoreService_1;
    }());
    __setFunctionName(_classThis, "StoreService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreService = _classThis;
}();
exports.StoreService = StoreService;
