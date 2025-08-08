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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var CartService = /** @class */ (function () {
    function CartService(connection, lineItemAdjustmentModel, lineItemModel, cartModel, shippingMethodAdjustmentModel, addressModel, lineItemTaxLineModel, shippingMethodTaxLineModel, shippingMethodModel, orderModel, adjustmentModel, promotionModel) {
        this.connection = connection;
        this.lineItemAdjustmentModel = lineItemAdjustmentModel;
        this.lineItemModel = lineItemModel;
        this.cartModel = cartModel;
        this.shippingMethodAdjustmentModel = shippingMethodAdjustmentModel;
        this.addressModel = addressModel;
        this.lineItemTaxLineModel = lineItemTaxLineModel;
        this.shippingMethodTaxLineModel = shippingMethodTaxLineModel;
        this.shippingMethodModel = shippingMethodModel;
        this.orderModel = orderModel;
        this.adjustmentModel = adjustmentModel;
        this.promotionModel = promotionModel;
        this.logger = new common_1.Logger(CartService.name);
    }
    CartService.prototype.createCart = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cart = new this.cartModel(__assign(__assign({}, dto), { items: [], credit_lines: [], shipping_methods: [], subtotal: 0, total: 0, tax_total: 0, discount_total: 0, shipping_total: 0 }));
                        return [4 /*yield*/, cart.save()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 6. getCart : améliorer le populate pour toutes les relations
    CartService.prototype.getCart = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartModel.findById(cartId)
                            .populate({
                            path: 'items',
                            populate: ['adjustments', 'tax_lines']
                        })
                            .populate({
                            path: 'shipping_methods',
                            populate: ['adjustments', 'tax_lines']
                        })
                            .populate('shipping_address')
                            .populate('billing_address')
                            .exec()];
                    case 1:
                        cart = _a.sent();
                        if (!cart) {
                            throw new common_1.NotFoundException("Cart with id ".concat(cartId, " not found"));
                        }
                        return [2 /*return*/, cart];
                }
            });
        });
    };
    // 🔹 Ajouter un produit au panier
    CartService.prototype.addItemToCart = function (cartId, itemDto) {
        return __awaiter(this, void 0, void 0, function () {
            var lineItem, savedItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineItem = new this.lineItemModel(__assign(__assign({}, itemDto), { cart: new mongoose_1.Types.ObjectId(cartId), unit_price: itemDto.unit_price }));
                        return [4 /*yield*/, lineItem.save()];
                    case 1:
                        savedItem = _a.sent();
                        // Ajout au panier
                        return [4 /*yield*/, this.cartModel.findByIdAndUpdate(cartId, { $addToSet: { items: savedItem._id } }, { new: true })];
                    case 2:
                        // Ajout au panier
                        _a.sent();
                        // Recalcul des totaux
                        return [2 /*return*/, this.calculateCartTotals(cartId)];
                }
            });
        });
    };
    CartService.prototype.calculateCartTotals = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, subtotal, discount_total, tax_total, shipping_total, _i, _a, item, itemTotal, _b, _c, adj, _d, _e, taxLine, promotions, _f, promotions_1, promo, discount;
            var _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, this.cartModel.findById(cartId)
                            .populate({
                            path: 'items',
                            populate: [
                                { path: 'tax_lines', model: 'LineItemTaxLine' },
                                { path: 'adjustments', model: 'LineItemAdjustment' }
                            ]
                        })
                            .populate({
                            path: 'shipping_methods',
                            populate: [
                                { path: 'adjustments', model: 'ShippingMethodAdjustment' },
                                { path: 'tax_lines', model: 'ShippingMethodTaxLine' }
                            ]
                        })
                            .populate('shipping_address billing_address customer_id')
                            .exec()];
                    case 1:
                        cart = _j.sent();
                        if (!cart)
                            throw new common_1.NotFoundException("Cart with ID ".concat(cartId, " not found"));
                        subtotal = 0;
                        discount_total = 0;
                        tax_total = 0;
                        shipping_total = 0;
                        // === 1. Items (produits)
                        for (_i = 0, _a = cart.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            itemTotal = item.unit_price * item.quantity;
                            subtotal += itemTotal;
                            if ((_g = item.adjustments) === null || _g === void 0 ? void 0 : _g.length) {
                                for (_b = 0, _c = item.adjustments; _b < _c.length; _b++) {
                                    adj = _c[_b];
                                    discount_total += adj.amount || 0;
                                }
                            }
                            if ((_h = item.tax_lines) === null || _h === void 0 ? void 0 : _h.length) {
                                for (_d = 0, _e = item.tax_lines; _d < _e.length; _d++) {
                                    taxLine = _e[_d];
                                    tax_total += taxLine.amount || 0;
                                }
                            }
                        }
                        return [4 /*yield*/, this.promotionModel.find({})];
                    case 2:
                        promotions = _j.sent();
                        for (_f = 0, promotions_1 = promotions; _f < promotions_1.length; _f++) {
                            promo = promotions_1[_f];
                            // Ex : promo de 10% sur le panier si subtotal > 100
                            if (promo.discount_type === 'percentage' && subtotal >= (promo.min_cart_total || 0)) {
                                discount = (promo.value / 100) * subtotal;
                                discount_total += discount;
                            }
                            //  Ex : promo fixe
                            if (promo.discount_type === 'fixed' && subtotal >= (promo.min_cart_total || 0)) {
                                discount_total += promo.value;
                            }
                        }
                        // === 4. Totaux
                        cart.subtotal = subtotal;
                        cart.discount_total = discount_total;
                        cart.tax_total = tax_total;
                        cart.shipping_total = shipping_total;
                        cart.total = subtotal + shipping_total + tax_total - discount_total;
                        return [4 /*yield*/, cart.save()];
                    case 3:
                        _j.sent();
                        return [2 /*return*/, cart];
                }
            });
        });
    };
    CartService.prototype.removeItemFromCart = function (cartId, itemId) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCart(cartId)];
                    case 1:
                        cart = _a.sent();
                        cart.items = cart.items.filter(function (item) { return item.toString() !== itemId; });
                        if (!cart)
                            throw new common_1.NotFoundException("Cart with id ".concat(cartId, " not found"));
                        return [4 /*yield*/, cart.save()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.lineItemModel.findByIdAndDelete(itemId)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.getCart(cartId)];
                }
            });
        });
    };
    CartService.prototype.updateItemQuantity = function (cartId, itemId, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (quantity < 1) {
                            return [2 /*return*/, this.removeItemFromCart(cartId, itemId)];
                        }
                        return [4 /*yield*/, this.lineItemModel.findByIdAndUpdate(itemId, { quantity: quantity })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getCart(cartId)];
                }
            });
        });
    };
    CartService.prototype.completeCart = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCart(cartId)];
                    case 1:
                        cart = _a.sent();
                        cart.completed_at = new Date();
                        return [4 /*yield*/, cart.save()];
                    case 2:
                        _a.sent(); // OK car cart est CartDocument
                        return [2 /*return*/, cart];
                }
            });
        });
    };
    CartService.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    CartService.prototype.deleteCart = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    CartService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, "This action returns all cart"];
            });
        });
    };
    CartService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, mongoose_1.isValidObjectId)(id)) {
                            throw new common_1.NotFoundException("Invalid ID");
                        }
                        return [4 /*yield*/, this.cartModel.findById(id)
                                .populate('lineItems') // Populate les relations que tu as
                                .populate('shippingMethods')
                                .exec()];
                    case 1:
                        cart = _a.sent();
                        if (!cart) {
                            throw new common_1.NotFoundException("Cart with id ".concat(id, " not found"));
                        }
                        return [2 /*return*/, cart];
                }
            });
        });
    };
    CartService.prototype.update = function (id, updateCartDto) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, mongoose_1.isValidObjectId)(id)) {
                            throw new common_1.NotFoundException("Invalid ID");
                        }
                        return [4 /*yield*/, this.cartModel.findById(id)];
                    case 1:
                        cart = _a.sent();
                        if (!cart) {
                            throw new common_1.NotFoundException("Panier avec l'ID ".concat(id, " non trouv\u00E9."));
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        Object.assign(cart, updateCartDto);
                        return [4 /*yield*/, cart.save()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_1 = _a.sent();
                        this.logger.error("Erreur lors de la mise \u00E0 jour du panier ".concat(id), error_1.stack);
                        throw new common_1.InternalServerErrorException('Une erreur est survenue lors de la mise à jour du panier.');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.createCarts = function (data, user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Ici tu peux utiliser user.id ou user pour lier le panier au propriétaire
                if (Array.isArray(data)) {
                    return [2 /*return*/, Promise.all(data.map(function (d) { return _this.createOneCart(d, user); }))];
                }
                else {
                    return [2 /*return*/, this.createOneCart(data, user)];
                }
                return [2 /*return*/];
            });
        });
    };
    CartService.prototype.createOneCart = function (data, user) {
        return __awaiter(this, void 0, void 0, function () {
            var newCart;
            return __generator(this, function (_a) {
                newCart = new this.cartModel(__assign(__assign({}, data), { user: user._id }));
                return [2 /*return*/, newCart.save()];
            });
        });
    };
    CartService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, mongoose_1.isValidObjectId)(id)) {
                            throw new common_1.NotFoundException("Invalid ID");
                        }
                        return [4 /*yield*/, this.cartModel.findByIdAndDelete(id)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/, { deleted: false, message: "Panier avec l'ID ".concat(id, " non trouv\u00E9.") }];
                        }
                        return [2 /*return*/, { deleted: true, message: "Panier avec l'ID ".concat(id, " supprim\u00E9 avec succ\u00E8s.") }];
                }
            });
        });
    };
    /**
     * Convertit { field: "ASC" | "DESC" } en { field: "asc" | "desc" }
     */
    CartService.prototype.normalizeSortOrder = function (order) {
        var result = {};
        for (var key in order) {
            var value = order[key];
            if (value === 'ASC') {
                result[key] = 'asc';
            }
            else if (value === 'DESC') {
                result[key] = 'desc';
            }
        }
        return result;
    };
    // 1. Ajouter une méthode : Ajouter une méthode de livraison au panier
    CartService.prototype.addShippingMethodToCart = function (cartId, shippingMethodId) {
        return __awaiter(this, void 0, void 0, function () {
            var shippingMethod, cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shippingMethodModel.findById(shippingMethodId)];
                    case 1:
                        shippingMethod = _a.sent();
                        if (!shippingMethod) {
                            throw new common_1.NotFoundException("Shipping method with id ".concat(shippingMethodId, " not found"));
                        }
                        return [4 /*yield*/, this.cartModel.findByIdAndUpdate(cartId, { $addToSet: { shipping_methods: shippingMethod._id } }, { new: true })];
                    case 2:
                        cart = _a.sent();
                        if (!cart)
                            throw new common_1.NotFoundException("Cart with ID ".concat(cartId, " not found"));
                        return [2 /*return*/, this.calculateCartTotals(cartId)];
                }
            });
        });
    };
    // 2. Définir adresse de livraison
    CartService.prototype.setShippingAddress = function (cartId, addressId) {
        return __awaiter(this, void 0, void 0, function () {
            var address, updatedCart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addressModel.findById(addressId)];
                    case 1:
                        address = _a.sent();
                        if (!address)
                            throw new common_1.NotFoundException('Shipping address not found');
                        return [4 /*yield*/, this.cartModel.findByIdAndUpdate(cartId, { shipping_address: address._id }, { new: true }).exec()];
                    case 2:
                        updatedCart = _a.sent();
                        if (!updatedCart) {
                            throw new common_1.NotFoundException("Cart with id ".concat(cartId, " not found"));
                        }
                        return [2 /*return*/, updatedCart];
                }
            });
        });
    };
    // 3. Définir adresse de facturation
    CartService.prototype.setBillingAddress = function (cartId, addressId) {
        return __awaiter(this, void 0, void 0, function () {
            var address, updatedCart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addressModel.findById(addressId)];
                    case 1:
                        address = _a.sent();
                        if (!address)
                            throw new common_1.NotFoundException('Billing address not found');
                        return [4 /*yield*/, this.cartModel.findByIdAndUpdate(cartId, { billing_address: address._id }, { new: true }).exec()];
                    case 2:
                        updatedCart = _a.sent();
                        if (!updatedCart) {
                            throw new common_1.NotFoundException("Cart with id ".concat(cartId, " not found"));
                        }
                        return [2 /*return*/, updatedCart];
                }
            });
        });
    };
    // 4. Lier un utilisateur (client) au panier
    CartService.prototype.setCustomer = function (cartId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedCart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartModel.findByIdAndUpdate(cartId, { customer_id: customerId }, { new: true }).exec()];
                    case 1:
                        updatedCart = _a.sent();
                        if (!updatedCart) {
                            throw new common_1.NotFoundException("Cart with id ".concat(cartId, " not found"));
                        }
                        return [2 /*return*/, updatedCart];
                }
            });
        });
    };
    // 5. Est-ce que le panier est prêt à être transformé en commande ?
    CartService.prototype.isCartReadyForCheckout = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, hasItems, hasShippingMethod, hasShippingAddress, hasCurrency;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCart(cartId)];
                    case 1:
                        cart = _a.sent();
                        hasItems = cart.items.length > 0;
                        hasShippingMethod = cart.shipping_methods.length > 0;
                        hasShippingAddress = !!cart.shipping_address;
                        hasCurrency = !!cart.currency_code;
                        return [2 /*return*/, hasItems && hasShippingMethod && hasShippingAddress && hasCurrency];
                }
            });
        });
    };
    CartService.prototype.getFullCartForOrder = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartModel.findById(cartId)
                            .populate({
                            path: 'items',
                            populate: ['adjustments', 'tax_lines']
                        })
                            .populate({
                            path: 'shipping_methods',
                            populate: ['adjustments', 'tax_lines']
                        })
                            .populate('shipping_address')
                            .populate('billing_address')
                            .populate('customer_id')
                            .exec()];
                    case 1:
                        cart = _a.sent();
                        if (!cart) {
                            throw new common_1.NotFoundException("Cart with ID ".concat(cartId, " not found"));
                        }
                        return [2 /*return*/, cart];
                }
            });
        });
    };
    return CartService;
}());
exports.CartService = CartService;
