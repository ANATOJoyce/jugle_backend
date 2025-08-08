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
exports.RegionService = void 0;
var common_1 = require("@nestjs/common");
var RegionService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RegionService = _classThis = /** @class */ (function () {
        function RegionService_1(regionModel, countryModel, connection) {
            this.regionModel = regionModel;
            this.countryModel = countryModel;
            this.connection = connection;
        }
        RegionService_1.prototype.createRegion = function (createDto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new this.regionModel(createDto).save()];
                });
            });
        };
        RegionService_1.prototype.deleteRegion = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.regionModel.findByIdAndDelete(id)];
                        case 1:
                            res = _a.sent();
                            if (!res)
                                throw new common_1.NotFoundException("Region with id ".concat(id, " not found"));
                            return [2 /*return*/];
                    }
                });
            });
        };
        RegionService_1.prototype.softDeleteRegion = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var region;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.regionModel.findById(id)];
                        case 1:
                            region = _a.sent();
                            if (!region)
                                throw new common_1.NotFoundException("Region with id ".concat(id, " not found"));
                            region.metadata = __assign(__assign({}, region.metadata), { deleted: true });
                            return [4 /*yield*/, region.save()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        RegionService_1.prototype.restoreRegion = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var region;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.regionModel.findById(id)];
                        case 1:
                            region = _a.sent();
                            if (!region)
                                throw new common_1.NotFoundException("Region with id ".concat(id, " not found"));
                            region.metadata = __assign(__assign({}, region.metadata), { deleted: false });
                            return [4 /*yield*/, region.save()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        RegionService_1.prototype.updateRegion = function (id, updateDto) {
            return __awaiter(this, void 0, void 0, function () {
                var region;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.regionModel.findByIdAndUpdate(id, updateDto, { new: true })];
                        case 1:
                            region = _a.sent();
                            if (!region)
                                throw new common_1.NotFoundException("Region with id ".concat(id, " not found"));
                            return [2 /*return*/, region];
                    }
                });
            });
        };
        /**
          * Upsert: Met à jour ou crée une région.
          */
        RegionService_1.prototype.upsertRegion = function (regionDto) {
            return __awaiter(this, void 0, void 0, function () {
                var session, region, found, err_1;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.connection.startSession()];
                        case 1:
                            session = _c.sent();
                            session.startTransaction();
                            _c.label = 2;
                        case 2:
                            _c.trys.push([2, 9, 11, 12]);
                            region = void 0;
                            if (!regionDto.id) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.regionModel.findById(regionDto.id).session(session)];
                        case 3:
                            found = _c.sent();
                            if (!found) {
                                throw new common_1.NotFoundException("Region with id ".concat(regionDto.id, " not found"));
                            }
                            region = found;
                            // Met à jour les champs autorisés
                            region.name = regionDto.name;
                            region.currency_code = regionDto.currency_code;
                            region.automatic_taxes = (_a = regionDto.automatic_taxes) !== null && _a !== void 0 ? _a : region.automatic_taxes;
                            region.metadata = (_b = regionDto.metadata) !== null && _b !== void 0 ? _b : region.metadata;
                            return [4 /*yield*/, region.save({ session: session })];
                        case 4:
                            _c.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            region = new this.regionModel(regionDto);
                            return [4 /*yield*/, region.save({ session: session })];
                        case 6:
                            _c.sent();
                            _c.label = 7;
                        case 7: return [4 /*yield*/, session.commitTransaction()];
                        case 8:
                            _c.sent();
                            return [2 /*return*/, region];
                        case 9:
                            err_1 = _c.sent();
                            return [4 /*yield*/, session.abortTransaction()];
                        case 10:
                            _c.sent();
                            throw err_1;
                        case 11:
                            session.endSession();
                            return [7 /*endfinally*/];
                        case 12: return [2 /*return*/];
                    }
                });
            });
        };
        RegionService_1.prototype.listRegions = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var filter;
                return __generator(this, function (_a) {
                    filter = {};
                    if (query === null || query === void 0 ? void 0 : query.name)
                        filter.name = { $regex: query.name, $options: 'i' };
                    if (query === null || query === void 0 ? void 0 : query.currency_code)
                        filter.currency_code = query.currency_code.toUpperCase();
                    return [2 /*return*/, this.regionModel.find(filter).exec()];
                });
            });
        };
        RegionService_1.prototype.listAndCountRegions = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var filter, _a, regions, count;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            filter = {};
                            if (query === null || query === void 0 ? void 0 : query.name)
                                filter.name = { $regex: query.name, $options: 'i' };
                            if (query === null || query === void 0 ? void 0 : query.currency_code)
                                filter.currency_code = query.currency_code.toUpperCase();
                            return [4 /*yield*/, Promise.all([
                                    this.regionModel.find(filter).exec(),
                                    this.regionModel.countDocuments(filter),
                                ])];
                        case 1:
                            _a = _b.sent(), regions = _a[0], count = _a[1];
                            return [2 /*return*/, { regions: regions, count: count }];
                    }
                });
            });
        };
        RegionService_1.prototype.retrieveRegion = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var region;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.regionModel.findById(id)];
                        case 1:
                            region = _a.sent();
                            if (!region)
                                throw new common_1.NotFoundException("Region with id ".concat(id, " not found"));
                            return [2 /*return*/, region];
                    }
                });
            });
        };
        RegionService_1.prototype.listCountries = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var filter;
                return __generator(this, function (_a) {
                    filter = {};
                    if (query === null || query === void 0 ? void 0 : query.name)
                        filter.name = { $regex: query.name, $options: 'i' };
                    if (query === null || query === void 0 ? void 0 : query.iso_2)
                        filter.iso_2 = query.iso_2.toUpperCase();
                    if (query === null || query === void 0 ? void 0 : query.region_id)
                        filter.region = query.region_id;
                    return [2 /*return*/, this.countryModel.find(filter).exec()];
                });
            });
        };
        RegionService_1.prototype.listAndCountCountries = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var filter, _a, countries, count;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            filter = {};
                            if (query === null || query === void 0 ? void 0 : query.name)
                                filter.name = { $regex: query.name, $options: 'i' };
                            if (query === null || query === void 0 ? void 0 : query.iso_2)
                                filter.iso_2 = query.iso_2.toUpperCase();
                            if (query === null || query === void 0 ? void 0 : query.region_id)
                                filter.region = query.region_id;
                            return [4 /*yield*/, Promise.all([
                                    this.countryModel.find(filter).exec(),
                                    this.countryModel.countDocuments(filter),
                                ])];
                        case 1:
                            _a = _b.sent(), countries = _a[0], count = _a[1];
                            return [2 /*return*/, { countries: countries, count: count }];
                    }
                });
            });
        };
        RegionService_1.prototype.retrieveCountry = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var country;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.countryModel.findById(id)];
                        case 1:
                            country = _a.sent();
                            if (!country)
                                throw new common_1.NotFoundException("Country with id ".concat(id, " not found"));
                            return [2 /*return*/, country];
                    }
                });
            });
        };
        RegionService_1.prototype.createCountry = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.countryModel.create(dto)];
                });
            });
        };
        RegionService_1.prototype.updateCountry = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.countryModel.findByIdAndUpdate(id, dto, { new: true })];
                });
            });
        };
        RegionService_1.prototype.deleteCountry = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.countryModel.findByIdAndDelete(id)];
                });
            });
        };
        // region.service.ts
        RegionService_1.prototype.create = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var countries, region;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.countryModel.find({
                                _id: { $in: dto.countryIds },
                            })];
                        case 1:
                            countries = _b.sent();
                            region = new this.regionModel({
                                name: dto.name,
                                currency_code: dto.currency_code,
                                automatic_taxes: (_a = dto.automatic_taxes) !== null && _a !== void 0 ? _a : true,
                                countries: countries.map(function (c) { return c._id; }),
                                metadata: dto.metadata || {},
                            });
                            return [2 /*return*/, region.save()];
                    }
                });
            });
        };
        return RegionService_1;
    }());
    __setFunctionName(_classThis, "RegionService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RegionService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RegionService = _classThis;
}();
exports.RegionService = RegionService;
