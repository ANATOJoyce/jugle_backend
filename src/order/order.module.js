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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var order_entity_1 = require("./entities/CommandePrincipale/order.entity");
var order_item_entity_1 = require("./entities/CommandePrincipale/order-item.entity");
var line_item_adjustment_entity_1 = require("./entities/Taxes&Adjustments/line-item-adjustment.entity");
var return_entity_1 = require("./entities/Retours&R\u00E9clamations/return.entity");
var return_reason_entity_1 = require("./entities/Retours&R\u00E9clamations/return-reason.entity");
var claim_entity_1 = require("./entities/Retours&R\u00E9clamations/claim.entity");
var order_change_entity_1 = require("./entities/changement/order-change.entity");
var order_change_action_entity_1 = require("./entities/changement/order-change-action.entity");
var order_summary_entity_1 = require("./entities/CommandePrincipale/order-summary.entity");
var order_controller_1 = require("./order.controller");
var order_service_1 = require("./order.service");
var line_item_tax_line_entity_1 = require("./entities/Taxes&Adjustments/line-item-tax-line.entity");
var order_shipping_method_entity_1 = require("./entities/Taxes&Adjustments/order-shipping-method.entity");
var order_shipping_method_tax_line_entity_1 = require("./entities/Taxes&Adjustments/order-shipping-method-tax-line.entity");
var order_shipping_method_adjustment_entity_1 = require("./entities/Taxes&Adjustments/order-shipping-method-adjustment.entity");
var claim_item_entity_1 = require("./entities/Retours&R\u00E9clamations/claim-item.entity");
var claim_item_image_entity_1 = require("./entities/Retours&R\u00E9clamations/claim-item-image.entity");
var exchange_item_entity_1 = require("./entities/exchange-item.entity");
var credit_line_entity_1 = require("./entities/Transaction/credit-line.entity");
var transaction_entity_1 = require("./entities/Transaction/transaction.entity");
var address_entity_1 = require("./entities/CommandePrincipale/address.entity");
var payment_module_1 = require("../../../../../../../../src/payment/payment.module");
var cart_entity_1 = require("../../../../../../../../src/cart/entities/cart.entity");
var cart_module_1 = require("../../../../../../../../src/cart/cart.module");
var line_item_entity_1 = require("../../../../../../../../src/cart/entities/line-item.entity");
var store_module_1 = require("../../../../../../../../src/store/store.module");
var payment_entity_1 = require("../../../../../../../../src/payment/entities/payment.entity");
var OrderModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                store_module_1.StoreModule,
                cart_module_1.CartModule,
                mongoose_1.MongooseModule.forFeature([
                    { name: order_entity_1.Order.name, schema: order_entity_1.OrderSchema },
                    { name: order_item_entity_1.OrderItem.name, schema: order_item_entity_1.OrderItemSchema },
                    { name: line_item_adjustment_entity_1.OrderLineItemAdjustment.name, schema: line_item_adjustment_entity_1.OrderLineItemAdjustmentSchema },
                    { name: line_item_tax_line_entity_1.OrderLineItemTaxLine.name, schema: line_item_tax_line_entity_1.OrderLineItemTaxLineSchema },
                    { name: order_shipping_method_entity_1.OrderShippingMethod.name, schema: order_shipping_method_entity_1.OrderShippingMethodSchema },
                    { name: order_shipping_method_adjustment_entity_1.OrderShippingMethodAdjustment.name, schema: order_shipping_method_adjustment_entity_1.OrderShippingMethodAdjustmentSchema },
                    { name: order_shipping_method_tax_line_entity_1.OrderShippingMethodTaxLine.name, schema: order_shipping_method_tax_line_entity_1.OrderShippingMethodTaxLineSchema },
                    { name: return_entity_1.Return.name, schema: return_entity_1.ReturnSchema },
                    { name: return_reason_entity_1.ReturnReason.name, schema: return_reason_entity_1.ReturnReasonSchema },
                    { name: claim_entity_1.OrderClaim.name, schema: claim_entity_1.OrderClaimSchema },
                    { name: claim_item_entity_1.OrderClaimItem.name, schema: claim_item_entity_1.OrderClaimItemSchema },
                    { name: claim_item_image_entity_1.OrderClaimItemImage.name, schema: claim_item_image_entity_1.OrderClaimItemImageSchema }, //  Correct !
                    { name: exchange_item_entity_1.OrderExchangeItem.name, schema: exchange_item_entity_1.OrderExchangeItemSchema },
                    { name: credit_line_entity_1.OrderCreditLine.name, schema: credit_line_entity_1.OrderCreditLineSchema },
                    { name: transaction_entity_1.OrderTransaction.name, schema: transaction_entity_1.OrderTransactionSchema },
                    { name: order_change_entity_1.OrderChange.name, schema: order_change_entity_1.OrderChangeSchema },
                    { name: order_change_action_entity_1.OrderChangeAction.name, schema: order_change_action_entity_1.OrderChangeActionSchema },
                    { name: order_summary_entity_1.OrderSummary.name, schema: order_summary_entity_1.OrderSummarySchema },
                    { name: address_entity_1.OrderAddress.name, schema: address_entity_1.OrderAddressSchema },
                    { name: cart_entity_1.Cart.name, schema: cart_entity_1.CartSchema },
                    { name: line_item_entity_1.LineItem.name, schema: line_item_entity_1.LineItemSchema },
                    { name: payment_entity_1.Payment.name, schema: payment_entity_1.PaymentSchema },
                ]),
                payment_module_1.PaymentModule,
            ],
            controllers: [order_controller_1.OrderController],
            providers: [order_service_1.OrderService, store_module_1.StoreModule],
            exports: [order_service_1.OrderService, mongoose_1.MongooseModule],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var OrderModule = _classThis = /** @class */ (function () {
        function OrderModule_1() {
        }
        return OrderModule_1;
    }());
    __setFunctionName(_classThis, "OrderModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrderModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrderModule = _classThis;
}();
exports.OrderModule = OrderModule;
