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
exports.OrderService = void 0;
var common_1 = require("@nestjs/common");
var OrderService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var OrderService = _classThis = /** @class */ (function () {
        function OrderService_1(orderModel, orderItemModel, shippingMethodModel, lineItemAdjustmentModel, shippingMethodAdjustmentModel, lineItemTaxLineModel, shippingMethodTaxLineModel, creditLineModel, transactionModel, addressModel, cartModel, lineItemModel, storeModel, returnModel, paymentModel, paymentService) {
            this.orderModel = orderModel;
            this.orderItemModel = orderItemModel;
            this.shippingMethodModel = shippingMethodModel;
            this.lineItemAdjustmentModel = lineItemAdjustmentModel;
            this.shippingMethodAdjustmentModel = shippingMethodAdjustmentModel;
            this.lineItemTaxLineModel = lineItemTaxLineModel;
            this.shippingMethodTaxLineModel = shippingMethodTaxLineModel;
            this.creditLineModel = creditLineModel;
            this.transactionModel = transactionModel;
            this.addressModel = addressModel;
            this.cartModel = cartModel;
            this.lineItemModel = lineItemModel;
            this.storeModel = storeModel;
            this.returnModel = returnModel;
            this.paymentModel = paymentModel;
            this.paymentService = paymentService;
            this.orderChangeActions = [];
        }
        OrderService_1.prototype.addOrderAction = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var actions, createdActions;
                var _this = this;
                return __generator(this, function (_a) {
                    actions = Array.isArray(data) ? data : [data];
                    createdActions = actions.map(function (action) {
                        var newAction = __assign(__assign({ id: crypto.randomUUID() }, action), { created_at: new Date().toISOString() });
                        _this.orderChangeActions.push(newAction);
                        return newAction;
                    });
                    return [2 /*return*/, Array.isArray(data) ? createdActions : createdActions[0]];
                });
            });
        };
        OrderService_1.prototype.findOneWithDetails = function (orderId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderModel.findById(orderId)
                            .populate('customer')
                            .populate('payments')
                            .populate('fulfillments')
                            .populate('shipping_methods')
                            .populate('summaries')
                            .populate('items')
                            .exec()];
                });
            });
        };
        OrderService_1.prototype.getAllOrders = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderModel.find({})
                            .populate('customer')
                            .populate('sales_channel')
                            .populate('payments')
                            .populate('fulfillments')
                            .select([
                            '_id',
                            'createdAt',
                            'customer',
                            'sales_channel',
                            'payments',
                            'fulfillments',
                            'total'
                        ])
                            .lean()];
                });
            });
        };
        OrderService_1.prototype.createReturn = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.returnModel.create({
                            order: body.orderId,
                            items: body.items,
                            refund_amount: body.amount,
                            status: 'requested',
                            created_by: 'admin-panel',
                            requested_at: new Date(),
                        })];
                });
            });
        };
        /*
      
        async findOrdersByVendorUserId(vendorId: string) {
          // Étape 1 : Trouver tous les stores du vendeur
          const stores = await this.storeModel.find({ user: vendorId }).select('_id').exec();
          const storeIds = stores.map(store => store._id);
      
          if (!storeIds.length) return [];
      
          // Étape 2 : Trouver les fragments liés à ces stores
          const fragments = await this.vendorFragmentModel
            .find({ store: { $in: storeIds } })
            .populate('parent_order') // pour récupérer l’email client etc.
            .populate('shipping_address')
            .exec();
      
          return fragments;
        }
      
       
      
        async findByStoreId(storeId: string) {
        return this.orderModel.find({
          where: { store: { id: storeId } },
          relations: ['products', 'customer'],
        });
      }*/
        // Exemple d'une méthode pour créer une commande MongoDB
        OrderService_1.prototype.createOrder = function (orderData) {
            return __awaiter(this, void 0, void 0, function () {
                var createdOrder;
                return __generator(this, function (_a) {
                    createdOrder = new this.orderModel(orderData);
                    return [2 /*return*/, createdOrder.save()];
                });
            });
        };
        // Exemple pour récupérer toutes les commandes
        OrderService_1.prototype.findAllOrders = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.orderModel.find().exec()];
                });
            });
        };
        // Créer un paiement lié à une commande
        // Créer un paiement lié à une commande
        OrderService_1.prototype.createPaymentForOrder = function (orderId, createPaymentDto) {
            return __awaiter(this, void 0, void 0, function () {
                var order, payment;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.orderModel.findById(orderId)];
                        case 1:
                            order = _b.sent();
                            if (!order) {
                                throw new common_1.NotFoundException("Order with id ".concat(orderId, " not found"));
                            }
                            return [4 /*yield*/, this.paymentService.create(createPaymentDto)];
                        case 2:
                            payment = _b.sent();
                            (_a = order.payments) === null || _a === void 0 ? void 0 : _a.push(payment._id);
                            return [4 /*yield*/, order.save()];
                        case 3:
                            _b.sent();
                            return [2 /*return*/, payment];
                    }
                });
            });
        };
        OrderService_1.prototype.findOrderById = function (orderId) {
            return __awaiter(this, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.orderModel.findById(orderId).exec()];
                        case 1:
                            order = _a.sent();
                            if (!order) {
                                throw new common_1.NotFoundException("Order with id ".concat(orderId, " not found"));
                            }
                            return [2 /*return*/, order];
                    }
                });
            });
        };
        OrderService_1.prototype.updateOrder = function (orderId, updateData) {
            return __awaiter(this, void 0, void 0, function () {
                var updatedOrder;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.orderModel
                                .findByIdAndUpdate(orderId, updateData, { new: true })
                                .exec()];
                        case 1:
                            updatedOrder = _a.sent();
                            if (!updatedOrder) {
                                throw new common_1.NotFoundException("Order with id ".concat(orderId, " not found"));
                            }
                            return [2 /*return*/, updatedOrder];
                    }
                });
            });
        };
        OrderService_1.prototype.deleteOrder = function (orderId) {
            return __awaiter(this, void 0, void 0, function () {
                var deletedOrder;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.orderModel.findByIdAndDelete(orderId).exec()];
                        case 1:
                            deletedOrder = _a.sent();
                            if (!deletedOrder) {
                                throw new common_1.NotFoundException("Order with id ".concat(orderId, " not found"));
                            }
                            return [2 /*return*/, deletedOrder];
                    }
                });
            });
        };
        /**
       * ✅ Seul le vendeur peut changer le statut de la commande.
       * Ici, on suppose que le contrôle d'accès est fait par un guard ou une vérification dans le contrôleur.
       */
        OrderService_1.prototype.updateOrderStatus = function (orderId, status) {
            return __awaiter(this, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.orderModel.findById(orderId)];
                        case 1:
                            order = _a.sent();
                            if (!order) {
                                throw new common_1.NotFoundException("Order with id ".concat(orderId, " not found"));
                            }
                            // Le vendeur change le statut
                            order.status = status;
                            return [4 /*yield*/, order.save()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, order];
                    }
                });
            });
        };
        /*
            static createFromDto(dto: Partial<OrderTransaction>): Partial<OrderTransaction> {
            const toNull = <T>(val: T | undefined): T | null => val === undefined ? null : val;
            const toObjectIdOrNull = (val: any): Types.ObjectId | null => {
              if (val === undefined || val === null) return null;
              return new Types.ObjectId(val);
            };
        
            return {
              ...dto,
              reference: toNull(dto.reference),
              reference_id: toNull(dto.reference_id),
              return: toObjectIdOrNull(dto.return),
              exchange: toObjectIdOrNull(dto.exchange),
              claim: toObjectIdOrNull(dto.claim),
            };
          }
        */
        OrderService_1.prototype.createFromCart = function (cartId) {
            return __awaiter(this, void 0, void 0, function () {
                var cart, orderItems, orderShippingMethods, shippingAddress, _a, billingAddress, _b, order;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.cartModel.findById(cartId)
                                .populate([
                                {
                                    path: 'items',
                                    populate: ['adjustments', 'tax_lines']
                                },
                                {
                                    path: 'shipping_methods',
                                    populate: ['adjustments', 'tax_lines']
                                },
                                'shipping_address',
                                'billing_address',
                            ])
                                .exec()];
                        case 1:
                            cart = _c.sent();
                            if (!cart) {
                                throw new common_1.NotFoundException("Cart with id ".concat(cartId, " not found"));
                            }
                            return [4 /*yield*/, Promise.all(cart.items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                    var orderItem;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                orderItem = new this.orderItemModel({
                                                    title: item.title,
                                                    quantity: item.quantity,
                                                    unit_price: item.unit_price,
                                                    product_id: item.product_id,
                                                    variant_id: item.variant_id,
                                                    adjustments: item.adjustments,
                                                    tax_lines: item.tax_lines,
                                                    is_giftcard: item.is_giftcard,
                                                    is_tax_inclusive: item.is_tax_inclusive,
                                                    metadata: item.metadata,
                                                });
                                                return [4 /*yield*/, orderItem.save()];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); }))];
                        case 2:
                            orderItems = _c.sent();
                            return [4 /*yield*/, Promise.all((cart.shipping_methods || []).map(function (method) { return __awaiter(_this, void 0, void 0, function () {
                                    var orderMethod;
                                    var _a, _b, _c, _d, _e, _f, _g, _h;
                                    return __generator(this, function (_j) {
                                        switch (_j.label) {
                                            case 0:
                                                orderMethod = new this.shippingMethodModel({
                                                    name: method.name,
                                                    description: (_a = method.description) !== null && _a !== void 0 ? _a : null,
                                                    amount: method.amount, // 👈 attention ici
                                                    is_tax_inclusive: (_b = method.is_tax_inclusive) !== null && _b !== void 0 ? _b : false,
                                                    is_custom_amount: (_c = method.is_custom_amount) !== null && _c !== void 0 ? _c : false,
                                                    shipping_option_id: (_d = method.shipping_option_id) !== null && _d !== void 0 ? _d : null,
                                                    data: (_e = method.data) !== null && _e !== void 0 ? _e : null,
                                                    metadata: (_f = method.metadata) !== null && _f !== void 0 ? _f : null,
                                                    adjustments: (_g = method.adjustments) !== null && _g !== void 0 ? _g : [],
                                                    tax_lines: (_h = method.tax_lines) !== null && _h !== void 0 ? _h : [],
                                                });
                                                return [4 /*yield*/, orderMethod.save()];
                                            case 1: return [2 /*return*/, _j.sent()];
                                        }
                                    });
                                }); }))];
                        case 3:
                            orderShippingMethods = _c.sent();
                            if (!cart.shipping_address) return [3 /*break*/, 5];
                            return [4 /*yield*/, new this.addressModel(cart.shipping_address).save()];
                        case 4:
                            _a = _c.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            _a = null;
                            _c.label = 6;
                        case 6:
                            shippingAddress = _a;
                            if (!cart.billing_address) return [3 /*break*/, 8];
                            return [4 /*yield*/, new this.addressModel(cart.billing_address).save()];
                        case 7:
                            _b = _c.sent();
                            return [3 /*break*/, 9];
                        case 8:
                            _b = null;
                            _c.label = 9;
                        case 9:
                            billingAddress = _b;
                            order = new this.orderModel({
                                cart_id: cart.id,
                                customer_id: cart.customer,
                                currency_code: cart.currency_code,
                                region_id: cart.region_id,
                                sales_channel_id: cart.sales_channel_id,
                                shipping_address: shippingAddress,
                                billing_address: billingAddress,
                                items: orderItems,
                                shipping_methods: orderShippingMethods,
                                subtotal: cart.subtotal,
                                tax_total: cart.tax_total,
                                shipping_total: cart.shipping_total,
                                discount_total: cart.discount_total,
                                total: cart.total,
                                metadata: cart.metadata,
                                status: 'pending', // ou draft selon logique
                            });
                            return [4 /*yield*/, order.save()];
                        case 10: return [2 /*return*/, _c.sent()];
                    }
                });
            });
        };
        /*
        async createMultiVendorOrder(cartId: string): Promise<Order> {
          const cart = await this.cartModel.findById(cartId)
            .populate({
              path: 'items',
              populate: ['adjustments', 'tax_lines', 'product']
            })
            .populate('shipping_methods')
            .populate('billing_address')
            .populate('shipping_address')
            .exec();
        
          if (!cart || cart.items.length === 0) {
            throw new Error('Panier vide ou introuvable');
          }
        
          // Étape 1 : Créer la commande principale
          const order = new this.orderModel({
            customer_id: cart.customer,
            email: cart.email,
            shipping_address: cart.shipping_address,
            billing_address: cart.billing_address,
            cart_id: cart._id,
            status: 'pending',
          });
        
          await order.save();
        
          // Étape 2 : Créer les LineItems sans regroupement par vendeur
          let subtotal = 0;
          let taxTotal = 0;
          let shippingTotal = 0;
        
          for (const item of cart.items) {
            if (!item?.product) continue;
        
            // Calculer le sous-total pour chaque produit
            subtotal += item.unit_price * item.quantity;
        
            // Calcul des taxes
            if (item.tax_lines?.length) {
              for (const taxLine of item.tax_lines) {
                taxTotal += taxLine.amount || 0;
              }
            }
          }
        
          // Récupérer un shipping_method du panier
          const shippingMethod = cart.shipping_methods?.[0]; // Prendre le premier shipping method disponible
          if (shippingMethod) {
            shippingTotal += shippingMethod.amount || 0;
          }
        
          // Étape 3 : Créer une commande sans fragmentation par vendeur
          const fragment = new OrderFragmentModel({
            parent_order: order._id,
            line_items: cart.items.map(i => i.id),
            shipping_address: cart.shipping_address,
            billing_address: cart.billing_address,
            subtotal,
            shipping_total: shippingTotal,
            tax_total: taxTotal,
            total: subtotal + taxTotal + shippingTotal,
            status: 'pending',
          });
        
          await fragment.save();
        
          return order;
        }
        */
        // order.service.ts
        OrderService_1.prototype.createMultiVendorOrder = function (cartId) {
            return __awaiter(this, void 0, void 0, function () {
                var cart, order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cartModel.findById(cartId)
                                .populate('items')
                                .populate('shipping_methods')
                                .populate('billing_address')
                                .populate('shipping_address')
                                .exec()];
                        case 1:
                            cart = _a.sent();
                            if (!cart || cart.items.length === 0) {
                                throw new Error('Panier vide ou introuvable');
                            }
                            order = new this.orderModel({
                                customer_id: cart.customer,
                                email: cart.email,
                                shipping_address: cart.shipping_address,
                                billing_address: cart.billing_address,
                                cart_id: cart._id,
                                status: 'pending',
                            });
                            return [4 /*yield*/, order.save()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return OrderService_1;
    }());
    __setFunctionName(_classThis, "OrderService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderService = _classThis;
}();
exports.OrderService = OrderService;
