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
exports.RegionController = void 0;
var common_1 = require("@nestjs/common");
var roles_decorator_1 = require("../../../../../../../../src/auth/roles.decorator");
var role_enum_1 = require("../../../../../../../../src/auth/role.enum");
var roles_guards_1 = require("../../../../../../../../src/auth/roles.guards");
var passport_1 = require("@nestjs/passport");
var RegionController = function () {
    var _classDecorators = [(0, common_1.Controller)('regions')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createRegion_decorators;
    var _deleteRegion_decorators;
    var _softDeleteRegion_decorators;
    var _restoreRegion_decorators;
    var _updateRegion_decorators;
    var _upsertRegion_decorators;
    var _listRegions_decorators;
    var _listAndCountRegions_decorators;
    var _retrieveRegion_decorators;
    var _listCountries_decorators;
    var _listAndCountCountries_decorators;
    var _retrieveCountry_decorators;
    var _softDelete_decorators;
    var _restore_decorators;
    var _createCountry_decorators;
    var _updateCountry_decorators;
    var _deleteCountry_decorators;
    var _create_decorators;
    var RegionController = _classThis = /** @class */ (function () {
        function RegionController_1(regionService) {
            this.regionService = (__runInitializers(this, _instanceExtraInitializers), regionService);
        }
        RegionController_1.prototype.createRegion = function (dto) {
            return this.regionService.createRegion(dto);
        };
        RegionController_1.prototype.deleteRegion = function (id) {
            return this.regionService.deleteRegion(id);
        };
        RegionController_1.prototype.softDeleteRegion = function (id) {
            return this.regionService.softDeleteRegion(id);
        };
        RegionController_1.prototype.restoreRegion = function (id) {
            return this.regionService.restoreRegion(id);
        };
        RegionController_1.prototype.updateRegion = function (id, dto) {
            return this.regionService.updateRegion(id, dto);
        };
        RegionController_1.prototype.upsertRegion = function (dto) {
            return this.regionService.upsertRegion(dto);
        };
        RegionController_1.prototype.listRegions = function (query) {
            return this.regionService.listRegions(query);
        };
        RegionController_1.prototype.listAndCountRegions = function (query) {
            return this.regionService.listAndCountRegions(query);
        };
        RegionController_1.prototype.retrieveRegion = function (id) {
            return this.regionService.retrieveRegion(id);
        };
        // Countries endpoints
        RegionController_1.prototype.listCountries = function (query) {
            return this.regionService.listCountries(query);
        };
        RegionController_1.prototype.listAndCountCountries = function (query) {
            return this.regionService.listAndCountCountries(query);
        };
        RegionController_1.prototype.retrieveCountry = function (id) {
            return this.regionService.retrieveCountry(id);
        };
        RegionController_1.prototype.softDelete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.regionService.softDeleteRegion(id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { message: 'Soft deleted' }];
                    }
                });
            });
        };
        RegionController_1.prototype.restore = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.regionService.restoreRegion(id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { message: 'Restored' }];
                    }
                });
            });
        };
        // country.controller.ts
        RegionController_1.prototype.createCountry = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.regionService.createCountry(dto)];
                });
            });
        };
        RegionController_1.prototype.updateCountry = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.regionService.updateCountry(id, dto)];
                });
            });
        };
        RegionController_1.prototype.deleteCountry = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.regionService.deleteCountry(id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { message: 'Deleted' }];
                    }
                });
            });
        };
        RegionController_1.prototype.create = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.regionService.create(dto)];
                });
            });
        };
        return RegionController_1;
    }());
    __setFunctionName(_classThis, "RegionController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createRegion_decorators = [(0, common_1.Post)()];
        _deleteRegion_decorators = [(0, common_1.Delete)(':id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _softDeleteRegion_decorators = [(0, common_1.Patch)(':id/soft-delete')];
        _restoreRegion_decorators = [(0, common_1.Patch)(':id/restore')];
        _updateRegion_decorators = [(0, common_1.Patch)(':id')];
        _upsertRegion_decorators = [(0, common_1.Post)('upsert'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _listRegions_decorators = [(0, common_1.Get)(), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _listAndCountRegions_decorators = [(0, common_1.Get)('count'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _retrieveRegion_decorators = [(0, common_1.Get)(':id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _listCountries_decorators = [(0, common_1.Get)('/countries'), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guards_1.RolesGuard), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _listAndCountCountries_decorators = [(0, common_1.Get)('countries/count')];
        _retrieveCountry_decorators = [(0, common_1.Get)('countries/:id')];
        _softDelete_decorators = [(0, common_1.Patch)(':id/soft-delete')];
        _restore_decorators = [(0, common_1.Patch)(':id/restore')];
        _createCountry_decorators = [(0, common_1.Post)("create-country")];
        _updateCountry_decorators = [(0, common_1.Put)(':id')];
        _deleteCountry_decorators = [(0, common_1.Delete)(':id')];
        _create_decorators = [(0, common_1.Post)()];
        __esDecorate(_classThis, null, _createRegion_decorators, { kind: "method", name: "createRegion", static: false, private: false, access: { has: function (obj) { return "createRegion" in obj; }, get: function (obj) { return obj.createRegion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteRegion_decorators, { kind: "method", name: "deleteRegion", static: false, private: false, access: { has: function (obj) { return "deleteRegion" in obj; }, get: function (obj) { return obj.deleteRegion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _softDeleteRegion_decorators, { kind: "method", name: "softDeleteRegion", static: false, private: false, access: { has: function (obj) { return "softDeleteRegion" in obj; }, get: function (obj) { return obj.softDeleteRegion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _restoreRegion_decorators, { kind: "method", name: "restoreRegion", static: false, private: false, access: { has: function (obj) { return "restoreRegion" in obj; }, get: function (obj) { return obj.restoreRegion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateRegion_decorators, { kind: "method", name: "updateRegion", static: false, private: false, access: { has: function (obj) { return "updateRegion" in obj; }, get: function (obj) { return obj.updateRegion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _upsertRegion_decorators, { kind: "method", name: "upsertRegion", static: false, private: false, access: { has: function (obj) { return "upsertRegion" in obj; }, get: function (obj) { return obj.upsertRegion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listRegions_decorators, { kind: "method", name: "listRegions", static: false, private: false, access: { has: function (obj) { return "listRegions" in obj; }, get: function (obj) { return obj.listRegions; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listAndCountRegions_decorators, { kind: "method", name: "listAndCountRegions", static: false, private: false, access: { has: function (obj) { return "listAndCountRegions" in obj; }, get: function (obj) { return obj.listAndCountRegions; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _retrieveRegion_decorators, { kind: "method", name: "retrieveRegion", static: false, private: false, access: { has: function (obj) { return "retrieveRegion" in obj; }, get: function (obj) { return obj.retrieveRegion; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listCountries_decorators, { kind: "method", name: "listCountries", static: false, private: false, access: { has: function (obj) { return "listCountries" in obj; }, get: function (obj) { return obj.listCountries; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listAndCountCountries_decorators, { kind: "method", name: "listAndCountCountries", static: false, private: false, access: { has: function (obj) { return "listAndCountCountries" in obj; }, get: function (obj) { return obj.listAndCountCountries; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _retrieveCountry_decorators, { kind: "method", name: "retrieveCountry", static: false, private: false, access: { has: function (obj) { return "retrieveCountry" in obj; }, get: function (obj) { return obj.retrieveCountry; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _softDelete_decorators, { kind: "method", name: "softDelete", static: false, private: false, access: { has: function (obj) { return "softDelete" in obj; }, get: function (obj) { return obj.softDelete; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _restore_decorators, { kind: "method", name: "restore", static: false, private: false, access: { has: function (obj) { return "restore" in obj; }, get: function (obj) { return obj.restore; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createCountry_decorators, { kind: "method", name: "createCountry", static: false, private: false, access: { has: function (obj) { return "createCountry" in obj; }, get: function (obj) { return obj.createCountry; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateCountry_decorators, { kind: "method", name: "updateCountry", static: false, private: false, access: { has: function (obj) { return "updateCountry" in obj; }, get: function (obj) { return obj.updateCountry; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteCountry_decorators, { kind: "method", name: "deleteCountry", static: false, private: false, access: { has: function (obj) { return "deleteCountry" in obj; }, get: function (obj) { return obj.deleteCountry; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RegionController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RegionController = _classThis;
}();
exports.RegionController = RegionController;
