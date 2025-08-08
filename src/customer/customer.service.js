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
exports.CustomerService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var CustomerService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CustomerService = _classThis = /** @class */ (function () {
        function CustomerService_1(customerModel, customerAddressModel, customerGroupCustomerModel, customerGroupModel) {
            this.customerModel = customerModel;
            this.customerAddressModel = customerAddressModel;
            this.customerGroupCustomerModel = customerGroupCustomerModel;
            this.customerGroupModel = customerGroupModel;
        }
        // Création d'une nouvelle adresse pour un client
        CustomerService_1.prototype.createCustomerAddress = function (customerId, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    created = new this.customerAddressModel(__assign(__assign({}, dto), { customer: new mongoose_1.Types.ObjectId(customerId), deleted_at: null }));
                    return [2 /*return*/, created.save()];
                });
            });
        };
        CustomerService_1.prototype.findAllAddresses = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerAddressModel.find().exec()];
                });
            });
        };
        // Récupérer toutes les adresses actives (non supprimées) d'un client
        CustomerService_1.prototype.findAddressesByCustomer = function (customerId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerAddressModel.find({
                            customer: customerId,
                            deleted_at: null,
                        }).exec()];
                });
            });
        };
        // Récupérer une adresse par son id (unique)
        CustomerService_1.prototype.findAddressById = function (addressId) {
            return __awaiter(this, void 0, void 0, function () {
                var address;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerAddressModel.findOne({
                                id: addressId,
                                deleted_at: null,
                            }).exec()];
                        case 1:
                            address = _a.sent();
                            if (!address)
                                throw new common_1.NotFoundException("CustomerAddress with id ".concat(addressId, " not found"));
                            return [2 /*return*/, address];
                    }
                });
            });
        };
        // Mettre à jour une adresse client via son id unique
        CustomerService_1.prototype.updateCustomerAddress = function (addressId, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerAddressModel.findOneAndUpdate({ id: addressId, deleted_at: null }, dto, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("CustomerAddress with id ".concat(addressId, " not found"));
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        // Suppression "soft" d'une adresse client (marquer comme supprimée)
        CustomerService_1.prototype.softDeleteCustomerAddress = function (addressId) {
            return __awaiter(this, void 0, void 0, function () {
                var deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerAddressModel.findOneAndUpdate({ id: addressId, deleted_at: null }, { deleted_at: new Date() }, { new: true }).exec()];
                        case 1:
                            deleted = _a.sent();
                            if (!deleted)
                                throw new common_1.NotFoundException("CustomerAddress with id ".concat(addressId, " not found"));
                            return [2 /*return*/, deleted];
                    }
                });
            });
        };
        // Restaurer une adresse supprimée
        CustomerService_1.prototype.restoreCustomerAddress = function (addressId) {
            return __awaiter(this, void 0, void 0, function () {
                var restored;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerAddressModel.findOneAndUpdate({ id: addressId, deleted_at: { $ne: null } }, { deleted_at: null }, { new: true }).exec()];
                        case 1:
                            restored = _a.sent();
                            if (!restored)
                                throw new common_1.NotFoundException("CustomerAddress with id ".concat(addressId, " not found or not deleted"));
                            return [2 /*return*/, restored];
                    }
                });
            });
        };
        // Ex: Marquer une adresse comme adresse de facturation par défaut et désactiver les autres
        CustomerService_1.prototype.setDefaultBillingAddress = function (customerId, addressId) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        // 1. Reset is_default_billing on all customer addresses
                        return [4 /*yield*/, this.customerAddressModel.updateMany({ customer: customerId }, { is_default_billing: false }).exec()];
                        case 1:
                            // 1. Reset is_default_billing on all customer addresses
                            _a.sent();
                            return [4 /*yield*/, this.customerAddressModel.findOneAndUpdate({ id: addressId, customer: customerId, deleted_at: null }, { is_default_billing: true }, { new: true }).exec()];
                        case 2:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("CustomerAddress ".concat(addressId, " not found or deleted"));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         *
         */
        CustomerService_1.prototype.addCustomerToGroup = function (customerId, groupId, createdBy, metadata) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    created = new this.customerGroupCustomerModel({
                        id: "cusgc_".concat(new mongoose_1.Types.ObjectId()), // ou un autre système de génération d’id
                        customer: new mongoose_1.Types.ObjectId(customerId),
                        customer_group: new mongoose_1.Types.ObjectId(groupId),
                        created_by: createdBy,
                        metadata: metadata || {},
                        deleted_at: null,
                    });
                    return [2 /*return*/, created.save()];
                });
            });
        };
        // Récupérer tous les groupes d’un client
        CustomerService_1.prototype.findGroupsByCustomer = function (customerId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerGroupCustomerModel.find({
                            customer: customerId,
                            deleted_at: null,
                        }).populate('customer_group').exec()];
                });
            });
        };
        // Récupérer tous les clients d’un groupe
        CustomerService_1.prototype.findCustomersByGroup = function (groupId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerGroupCustomerModel.find({
                            customer_group: groupId,
                            deleted_at: null,
                        }).populate('customer').exec()];
                });
            });
        };
        // Supprimer (soft) un client d’un groupe
        CustomerService_1.prototype.removeCustomerFromGroup = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var removed;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerGroupCustomerModel.findOneAndUpdate({ id: id, deleted_at: null }, { deleted_at: new Date() }, { new: true }).exec()];
                        case 1:
                            removed = _a.sent();
                            if (!removed)
                                throw new common_1.NotFoundException("CustomerGroupCustomer with id ".concat(id, " not found or already deleted"));
                            return [2 /*return*/, removed];
                    }
                });
            });
        };
        // Restaurer un lien supprimé
        CustomerService_1.prototype.restoreCustomerGroupCustomer = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var restored;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerGroupCustomerModel.findOneAndUpdate({ id: id, deleted_at: { $ne: null } }, { deleted_at: null }, { new: true }).exec()];
                        case 1:
                            restored = _a.sent();
                            if (!restored)
                                throw new common_1.NotFoundException("CustomerGroupCustomer with id ".concat(id, " not found or not deleted"));
                            return [2 /*return*/, restored];
                    }
                });
            });
        };
        // Mettre à jour metadata ou created_by du lien (facultatif)
        CustomerService_1.prototype.updateCustomerGroupCustomer = function (id, update) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerGroupCustomerModel.findOneAndUpdate({ id: id, deleted_at: null }, update, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("CustomerGroupCustomer with id ".concat(id, " not found"));
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        /**
         * CUSTOMER_GROUP_CUSTOMER
         *
         */
        CustomerService_1.prototype.createCustomerGroup = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    created = new this.customerGroupModel(dto);
                    return [2 /*return*/, created.save()];
                });
            });
        };
        CustomerService_1.prototype.findAllCustomerGroups = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerGroupModel.find({ deleted_at: null }).populate('customers').exec()];
                });
            });
        };
        CustomerService_1.prototype.findCustomerGroupById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var group;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerGroupModel.findOne({ id: id, deleted_at: null }).populate('customers').exec()];
                        case 1:
                            group = _a.sent();
                            if (!group)
                                throw new common_1.NotFoundException("CustomerGroup ".concat(id, " not found"));
                            return [2 /*return*/, group];
                    }
                });
            });
        };
        CustomerService_1.prototype.updateCustomerGroup = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerGroupModel.findOneAndUpdate({ id: id, deleted_at: null }, dto, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("CustomerGroup ".concat(id, " not found"));
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        CustomerService_1.prototype.softDeleteCustomerGroup = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerGroupModel.findOneAndUpdate({ id: id, deleted_at: null }, { deleted_at: new Date() }, { new: true }).exec()];
                        case 1:
                            deleted = _a.sent();
                            if (!deleted)
                                throw new common_1.NotFoundException("CustomerGroup ".concat(id, " not found"));
                            return [2 /*return*/, deleted];
                    }
                });
            });
        };
        /**
         * METOHD EPOUR LES CUSTOMER
         */
        CustomerService_1.prototype.findAllCustomers = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerModel.find({ deleted_at: null }).populate('addresses').populate('groups').exec()];
                });
            });
        };
        CustomerService_1.prototype.findCustomerById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var customer;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerModel.findOne({ id: id, deleted_at: null }).populate('addresses').populate('groups').exec()];
                        case 1:
                            customer = _a.sent();
                            if (!customer)
                                throw new common_1.NotFoundException("Customer ".concat(id, " not found"));
                            return [2 /*return*/, customer];
                    }
                });
            });
        };
        CustomerService_1.prototype.createCustomer = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    created = new this.customerModel(dto);
                    return [2 /*return*/, created.save()];
                });
            });
        };
        CustomerService_1.prototype.updateCustomer = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerModel.findOneAndUpdate({ id: id, deleted_at: null }, dto, { new: true }).exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated)
                                throw new common_1.NotFoundException("Customer ".concat(id, " not found"));
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        CustomerService_1.prototype.softDeleteCustomer = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerModel.findOneAndUpdate({ id: id, deleted_at: null }, { deleted_at: new Date() }, { new: true }).exec()];
                        case 1:
                            deleted = _a.sent();
                            if (!deleted)
                                throw new common_1.NotFoundException("Customer ".concat(id, " not found"));
                            return [2 /*return*/, deleted];
                    }
                });
            });
        };
        return CustomerService_1;
    }());
    __setFunctionName(_classThis, "CustomerService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CustomerService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CustomerService = _classThis;
}();
exports.CustomerService = CustomerService;
