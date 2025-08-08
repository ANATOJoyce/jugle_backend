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
exports.CustomerController = void 0;
var common_1 = require("@nestjs/common");
var role_enum_1 = require("../../../../../../../../src/auth/role.enum");
var roles_decorator_1 = require("../../../../../../../../src/auth/roles.decorator");
var CustomerController = function () {
    var _classDecorators = [(0, common_1.Controller)('customer')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _findAll_decorators;
    var _findOne_decorators;
    var _update_decorators;
    var _remove_decorators;
    var _addToGroup_decorators;
    var _getGroupsByCustomer_decorators;
    var _getCustomersByGroup_decorators;
    var _removeFromGroup_decorators;
    var _findAllCustomerGroups_decorators;
    var _findCustomerGroupById_decorators;
    var _createCustomerGroup_decorators;
    var _updateCustomerGroup_decorators;
    var _softDeleteCustomerGroup_decorators;
    var _findAllCustomers_decorators;
    var _findCustomerById_decorators;
    var _createCustomer_decorators;
    var _updateCustomer_decorators;
    var _softDeleteCustomer_decorators;
    var CustomerController = _classThis = /** @class */ (function () {
        function CustomerController_1(customerService) {
            this.customerService = (__runInitializers(this, _instanceExtraInitializers), customerService);
        }
        /** */
        /**Méthode HTTP	URL	Rôle(s) autorisé(s)	Description
      GET	/customer/address	ADMIN, VENDOR, CUSTOMER	Liste toutes les adresses (ADMIN et VENDOR peuvent voir toutes, CUSTOMER uniquement les siennes).
      GET	/customer/address/:id	ADMIN, VENDOR, CUSTOMER	Récupère une adresse par son ID. CUSTOMER ne peut accéder qu'à ses propres adresses.
      POST	/customer/address	ADMIN, VENDOR, CUSTOMER	Crée une nouvelle adresse pour le client authentifié.
      PATCH	/customer/address/:id	ADMIN, VENDOR, CUSTOMER	Met à jour une adresse existante (uniquement si elle appartient au client ou selon rôle).
      DELETE	/customer/address/:id	ADMIN, VENDOR, CUSTOMER	Soft delete d’une adresse (marque supprimée sans effacer). */
        CustomerController_1.prototype.create = function (dto, req) {
            return __awaiter(this, void 0, void 0, function () {
                var customerId;
                return __generator(this, function (_a) {
                    customerId = req.user.id;
                    return [2 /*return*/, this.customerService.createCustomerAddress(customerId, dto)];
                });
            });
        };
        CustomerController_1.prototype.findAll = function (req) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Par défaut, on récupère les adresses du customer connecté sauf ADMIN (qui peut demander toutes ?)
                    if (req.user.role === role_enum_1.Role.ADMIN) {
                        return [2 /*return*/, this.customerService.findAllAddresses()]; // méthode à créer si besoin
                    }
                    return [2 /*return*/, this.customerService.findAddressesByCustomer(req.user.id)];
                });
            });
        };
        CustomerController_1.prototype.findOne = function (id, req) {
            return __awaiter(this, void 0, void 0, function () {
                var address;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerService.findAddressById(id)];
                        case 1:
                            address = _a.sent();
                            // Sécurité: vérifier que le customer peut accéder à cette adresse (ou admin)
                            if (req.user.role !== role_enum_1.Role.ADMIN && address.customer.toString() !== req.user.id) {
                                throw new common_1.ForbiddenException('Access denied');
                            }
                            return [2 /*return*/, address];
                    }
                });
            });
        };
        CustomerController_1.prototype.update = function (id, dto, req) {
            return __awaiter(this, void 0, void 0, function () {
                var address;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerService.findAddressById(id)];
                        case 1:
                            address = _a.sent();
                            if (req.user.role !== role_enum_1.Role.ADMIN && address.customer.toString() !== req.user.id) {
                                throw new common_1.ForbiddenException('Access denied');
                            }
                            return [2 /*return*/, this.customerService.updateCustomerAddress(id, dto)];
                    }
                });
            });
        };
        CustomerController_1.prototype.remove = function (id, req) {
            return __awaiter(this, void 0, void 0, function () {
                var address;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.customerService.findAddressById(id)];
                        case 1:
                            address = _a.sent();
                            if (req.user.role !== role_enum_1.Role.ADMIN && address.customer.toString() !== req.user.id) {
                                throw new common_1.ForbiddenException('Access denied');
                            }
                            return [2 /*return*/, this.customerService.softDeleteCustomerAddress(id)];
                    }
                });
            });
        };
        /**CONTROLLER DE CUSTOMER_GROUP_CUSTOMER
         *
         * Méthode HTTP	URL	Rôle(s) autorisé(s)	Description
      GET	/customer/group-customer	ADMIN, VENDOR	Liste toutes les associations client-groupe.
      GET	/customer/group-customer/:id	ADMIN, VENDOR	Récupère une association client-groupe par ID.
      POST	/customer/group-customer	ADMIN	Ajoute un client à un groupe.
      PATCH	/customer/group-customer/:id	ADMIN	Met à jour une association client-groupe (ex: metadata).
      DELETE	/customer/group-customer/:id	ADMIN	Supprime une association client-groupe (soft ou hard delete).
      Les rôles ADMIN ont tous les droits.
      
      Les rôles VENDOR peuvent accéder en lecture aux données liées au customer (selon besoin).
      
      Les rôles CUSTOMER peuvent gérer uniquement leurs propres adresses.
      
      La validation d’appartenance (ex : que l’adresse appartient bien au customer authentifié) est faite côté service / guards.
      
      Le soft delete permet de garder l’historique et restaurer si besoin.
        */
        CustomerController_1.prototype.addToGroup = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerService.addCustomerToGroup(dto.customerId, dto.groupId, dto.createdBy, dto.metadata)];
                });
            });
        };
        CustomerController_1.prototype.getGroupsByCustomer = function (customerId, req) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (req.user.role !== role_enum_1.Role.ADMIN && req.user.id !== customerId) {
                        throw new common_1.ForbiddenException('Access denied');
                    }
                    return [2 /*return*/, this.customerService.findGroupsByCustomer(customerId)];
                });
            });
        };
        CustomerController_1.prototype.getCustomersByGroup = function (groupId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerService.findCustomersByGroup(groupId)];
                });
            });
        };
        CustomerController_1.prototype.removeFromGroup = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.customerService.removeCustomerFromGroup(id)];
                });
            });
        };
        /**
         * Toutes les méthodes du service sont préfixées par CustomerGroup pour centraliser la compréhension et éviter toute ambiguïté.
      
      Le controller applique la sécurité selon les rôles via @Roles et RolesGuard.
      
      Le service reste propre et dédié uniquement aux opérations de la couche métier/données.
      
      Le controller expose les routes REST classiques avec un nommage clair.
      
      
         */
        CustomerController_1.prototype.findAllCustomerGroups = function () {
            return this.customerService.findAllCustomerGroups();
        };
        CustomerController_1.prototype.findCustomerGroupById = function (id) {
            return this.customerService.findCustomerGroupById(id);
        };
        CustomerController_1.prototype.createCustomerGroup = function (dto) {
            return this.customerService.createCustomerGroup(dto);
        };
        CustomerController_1.prototype.updateCustomerGroup = function (id, dto) {
            return this.customerService.updateCustomerGroup(id, dto);
        };
        CustomerController_1.prototype.softDeleteCustomerGroup = function (id) {
            return this.customerService.softDeleteCustomerGroup(id);
        };
        /**
         *
         * Méthode Service	Route Controller	Rôles	Description
      findAllCustomers()	GET /customer	ADMIN, VENDOR	Liste tous les clients actifs
      findCustomerById(id)	GET /customer/:id	ADMIN, VENDOR	Récupère un client par ID
      createCustomer(dto)	POST /customer	ADMIN	Crée un nouveau client
      updateCustomer(id, dto)	PATCH /customer/:id	ADMIN	Met à jour un client existant
      softDeleteCustomer(id)	DELETE /customer/:id	ADMIN	Supprime (soft delete) un client
         */
        // CUSTOMER ROUTES
        CustomerController_1.prototype.findAllCustomers = function () {
            return this.customerService.findAllCustomers();
        };
        CustomerController_1.prototype.findCustomerById = function (id) {
            return this.customerService.findCustomerById(id);
        };
        CustomerController_1.prototype.createCustomer = function (dto) {
            return this.customerService.createCustomer(dto);
        };
        CustomerController_1.prototype.updateCustomer = function (id, dto) {
            return this.customerService.updateCustomer(id, dto);
        };
        CustomerController_1.prototype.softDeleteCustomer = function (id) {
            return this.customerService.softDeleteCustomer(id);
        };
        return CustomerController_1;
    }());
    __setFunctionName(_classThis, "CustomerController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _create_decorators = [(0, common_1.Post)(), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _findAll_decorators = [(0, common_1.Get)(), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _findOne_decorators = [(0, common_1.Get)('customer-address:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _update_decorators = [(0, common_1.Put)('customer-address:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER, role_enum_1.Role.VENDOR)];
        _remove_decorators = [(0, common_1.Delete)('customer-address:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.CUSTOMER)];
        _addToGroup_decorators = [(0, common_1.Post)(), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _getGroupsByCustomer_decorators = [(0, common_1.Get)('customer/:customerId'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR, role_enum_1.Role.CUSTOMER)];
        _getCustomersByGroup_decorators = [(0, common_1.Get)('group/:groupId'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _removeFromGroup_decorators = [(0, common_1.Delete)(':id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _findAllCustomerGroups_decorators = [(0, common_1.Get)('customer-groups'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _findCustomerGroupById_decorators = [(0, common_1.Get)('customer-group:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _createCustomerGroup_decorators = [(0, common_1.Post)('customer-group'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _updateCustomerGroup_decorators = [(0, common_1.Patch)('customer-group:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _softDeleteCustomerGroup_decorators = [(0, common_1.Delete)('customre-group:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _findAllCustomers_decorators = [(0, common_1.Get)('customer'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _findCustomerById_decorators = [(0, common_1.Get)('customer/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _createCustomer_decorators = [(0, common_1.Post)('customer'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _updateCustomer_decorators = [(0, common_1.Patch)('customer/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        _softDeleteCustomer_decorators = [(0, common_1.Delete)('customer/:id'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: function (obj) { return "findAll" in obj; }, get: function (obj) { return obj.findAll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: function (obj) { return "remove" in obj; }, get: function (obj) { return obj.remove; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addToGroup_decorators, { kind: "method", name: "addToGroup", static: false, private: false, access: { has: function (obj) { return "addToGroup" in obj; }, get: function (obj) { return obj.addToGroup; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getGroupsByCustomer_decorators, { kind: "method", name: "getGroupsByCustomer", static: false, private: false, access: { has: function (obj) { return "getGroupsByCustomer" in obj; }, get: function (obj) { return obj.getGroupsByCustomer; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCustomersByGroup_decorators, { kind: "method", name: "getCustomersByGroup", static: false, private: false, access: { has: function (obj) { return "getCustomersByGroup" in obj; }, get: function (obj) { return obj.getCustomersByGroup; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeFromGroup_decorators, { kind: "method", name: "removeFromGroup", static: false, private: false, access: { has: function (obj) { return "removeFromGroup" in obj; }, get: function (obj) { return obj.removeFromGroup; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAllCustomerGroups_decorators, { kind: "method", name: "findAllCustomerGroups", static: false, private: false, access: { has: function (obj) { return "findAllCustomerGroups" in obj; }, get: function (obj) { return obj.findAllCustomerGroups; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findCustomerGroupById_decorators, { kind: "method", name: "findCustomerGroupById", static: false, private: false, access: { has: function (obj) { return "findCustomerGroupById" in obj; }, get: function (obj) { return obj.findCustomerGroupById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createCustomerGroup_decorators, { kind: "method", name: "createCustomerGroup", static: false, private: false, access: { has: function (obj) { return "createCustomerGroup" in obj; }, get: function (obj) { return obj.createCustomerGroup; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateCustomerGroup_decorators, { kind: "method", name: "updateCustomerGroup", static: false, private: false, access: { has: function (obj) { return "updateCustomerGroup" in obj; }, get: function (obj) { return obj.updateCustomerGroup; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _softDeleteCustomerGroup_decorators, { kind: "method", name: "softDeleteCustomerGroup", static: false, private: false, access: { has: function (obj) { return "softDeleteCustomerGroup" in obj; }, get: function (obj) { return obj.softDeleteCustomerGroup; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAllCustomers_decorators, { kind: "method", name: "findAllCustomers", static: false, private: false, access: { has: function (obj) { return "findAllCustomers" in obj; }, get: function (obj) { return obj.findAllCustomers; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findCustomerById_decorators, { kind: "method", name: "findCustomerById", static: false, private: false, access: { has: function (obj) { return "findCustomerById" in obj; }, get: function (obj) { return obj.findCustomerById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createCustomer_decorators, { kind: "method", name: "createCustomer", static: false, private: false, access: { has: function (obj) { return "createCustomer" in obj; }, get: function (obj) { return obj.createCustomer; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateCustomer_decorators, { kind: "method", name: "updateCustomer", static: false, private: false, access: { has: function (obj) { return "updateCustomer" in obj; }, get: function (obj) { return obj.updateCustomer; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _softDeleteCustomer_decorators, { kind: "method", name: "softDeleteCustomer", static: false, private: false, access: { has: function (obj) { return "softDeleteCustomer" in obj; }, get: function (obj) { return obj.softDeleteCustomer; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CustomerController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CustomerController = _classThis;
}();
exports.CustomerController = CustomerController;
