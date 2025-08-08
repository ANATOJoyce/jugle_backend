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
exports.OrderController = void 0;
// src/order/order.controller.ts
var common_1 = require("@nestjs/common");
var roles_decorator_1 = require("../../../../../../../../src/auth/roles.decorator");
var role_enum_1 = require("../../../../../../../../src/auth/role.enum");
var OrderController = function () {
    var _classDecorators = [(0, common_1.Controller)('order')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _addOrderAction_decorators;
    var _createPaymentForOrder_decorators;
    var _createOrder_decorators;
    var _findAllOrders_decorators;
    var _findOrderById_decorators;
    var _updateOrder_decorators;
    var _deleteOrder_decorators;
    var _updateStatus_decorators;
    var _createMultiVendorOrder_decorators;
    var _getAllOrders_decorators;
    var _createReturn_decorators;
    var _getOrder_decorators;
    var OrderController = _classThis = /** @class */ (function () {
        function OrderController_1(orderService) {
            this.orderService = (__runInitializers(this, _instanceExtraInitializers), orderService);
        }
        OrderController_1.prototype.addOrderAction = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.addOrderAction(data)];
                });
            });
        };
        // Nouveau endpoint pour créer un paiement lié à une commande
        OrderController_1.prototype.createPaymentForOrder = function (orderId, createPaymentDto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.createPaymentForOrder(orderId, createPaymentDto)];
                });
            });
        };
        // Créer une commande
        OrderController_1.prototype.createOrder = function (orderData) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.createOrder(orderData)];
                });
            });
        };
        // Récupérer toutes les commandes
        OrderController_1.prototype.findAllOrders = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.findAllOrders()];
                });
            });
        };
        // Récupérer une commande par son ID
        OrderController_1.prototype.findOrderById = function (orderId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.findOrderById(orderId)];
                });
            });
        };
        // Mettre à jour une commande partiellement (PATCH)
        OrderController_1.prototype.updateOrder = function (orderId, updateData) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.updateOrder(orderId, updateData)];
                });
            });
        };
        // Supprimer une commande
        OrderController_1.prototype.deleteOrder = function (orderId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.deleteOrder(orderId)];
                });
            });
        };
        /**
       * Endpoint réservé au vendeur.
       * On peut protéger cet endpoint avec un Guard JWT ou un décorateur de rôle.
       */
        //@UseGuards(AuthGuard, RolesGuard)
        OrderController_1.prototype.updateStatus = function (id, updateOrderStatusDto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.updateOrderStatus(id, updateOrderStatusDto.status)];
                });
            });
        };
        // Créer une commande multi-vendeur à partir d’un panier
        OrderController_1.prototype.createMultiVendorOrder = function (cartId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.createMultiVendorOrder(cartId)];
                });
            });
        };
        OrderController_1.prototype.getAllOrders = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.getAllOrders()];
                });
            });
        };
        OrderController_1.prototype.createReturn = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderService.createReturn(body)];
                });
            });
        };
        OrderController_1.prototype.getOrder = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.orderService.findOneWithDetails(id)];
                        case 1:
                            order = _a.sent();
                            if (!order) {
                                throw new common_1.NotFoundException('Commande non trouvée');
                            }
                            return [2 /*return*/, order];
                    }
                });
            });
        };
        return OrderController_1;
    }());
    __setFunctionName(_classThis, "OrderController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _addOrderAction_decorators = [(0, common_1.Post)('add-action')];
        _createPaymentForOrder_decorators = [(0, common_1.Post)(':orderId/payment')];
        _createOrder_decorators = [(0, common_1.Post)()];
        _findAllOrders_decorators = [(0, common_1.Get)()];
        _findOrderById_decorators = [(0, common_1.Get)(':orderId')];
        _updateOrder_decorators = [(0, common_1.Patch)(':orderId')];
        _deleteOrder_decorators = [(0, common_1.Delete)(':orderId')];
        _updateStatus_decorators = [(0, roles_decorator_1.Roles)(role_enum_1.Role.VENDOR), (0, common_1.Patch)(':id/status')];
        _createMultiVendorOrder_decorators = [(0, common_1.Post)('create-from-cart/:cartId')];
        _getAllOrders_decorators = [(0, common_1.Get)(':id')];
        _createReturn_decorators = [(0, common_1.Post)('return')];
        _getOrder_decorators = [(0, common_1.Get)(':id')];
        __esDecorate(_classThis, null, _addOrderAction_decorators, { kind: "method", name: "addOrderAction", static: false, private: false, access: { has: function (obj) { return "addOrderAction" in obj; }, get: function (obj) { return obj.addOrderAction; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createPaymentForOrder_decorators, { kind: "method", name: "createPaymentForOrder", static: false, private: false, access: { has: function (obj) { return "createPaymentForOrder" in obj; }, get: function (obj) { return obj.createPaymentForOrder; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createOrder_decorators, { kind: "method", name: "createOrder", static: false, private: false, access: { has: function (obj) { return "createOrder" in obj; }, get: function (obj) { return obj.createOrder; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAllOrders_decorators, { kind: "method", name: "findAllOrders", static: false, private: false, access: { has: function (obj) { return "findAllOrders" in obj; }, get: function (obj) { return obj.findAllOrders; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOrderById_decorators, { kind: "method", name: "findOrderById", static: false, private: false, access: { has: function (obj) { return "findOrderById" in obj; }, get: function (obj) { return obj.findOrderById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateOrder_decorators, { kind: "method", name: "updateOrder", static: false, private: false, access: { has: function (obj) { return "updateOrder" in obj; }, get: function (obj) { return obj.updateOrder; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteOrder_decorators, { kind: "method", name: "deleteOrder", static: false, private: false, access: { has: function (obj) { return "deleteOrder" in obj; }, get: function (obj) { return obj.deleteOrder; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateStatus_decorators, { kind: "method", name: "updateStatus", static: false, private: false, access: { has: function (obj) { return "updateStatus" in obj; }, get: function (obj) { return obj.updateStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createMultiVendorOrder_decorators, { kind: "method", name: "createMultiVendorOrder", static: false, private: false, access: { has: function (obj) { return "createMultiVendorOrder" in obj; }, get: function (obj) { return obj.createMultiVendorOrder; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllOrders_decorators, { kind: "method", name: "getAllOrders", static: false, private: false, access: { has: function (obj) { return "getAllOrders" in obj; }, get: function (obj) { return obj.getAllOrders; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createReturn_decorators, { kind: "method", name: "createReturn", static: false, private: false, access: { has: function (obj) { return "createReturn" in obj; }, get: function (obj) { return obj.createReturn; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getOrder_decorators, { kind: "method", name: "getOrder", static: false, private: false, access: { has: function (obj) { return "getOrder" in obj; }, get: function (obj) { return obj.getOrder; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderController = _classThis;
}();
exports.OrderController = OrderController;
