import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Order, OrderSchema } from './entities/CommandePrincipale/order.entity';
import { OrderItem, OrderItemSchema } from './entities/CommandePrincipale/order-item.entity';
import { OrderLineItemAdjustment, OrderLineItemAdjustmentSchema } from './entities/Taxes&Adjustments/line-item-adjustment.entity';
import { Return, ReturnSchema } from './entities/Retours&Réclamations/return.entity';
import { ReturnReason, ReturnReasonSchema } from './entities/Retours&Réclamations/return-reason.entity';
import { OrderClaim, OrderClaimSchema } from './entities/Retours&Réclamations/claim.entity';

import { OrderChange, OrderChangeSchema } from './entities/changement/order-change.entity';
import { OrderChangeAction, OrderChangeActionSchema } from './entities/changement/order-change-action.entity';
import { OrderSummary, OrderSummarySchema } from './entities/CommandePrincipale/order-summary.entity';


import { OrderController } from './order.controller';
import { OrderService } from './order.service';

import { OrderLineItemTaxLine, OrderLineItemTaxLineSchema } from './entities/Taxes&Adjustments/line-item-tax-line.entity';
import { OrderShippingMethod, OrderShippingMethodSchema } from './entities/Taxes&Adjustments/order-shipping-method.entity';
import { OrderShippingMethodTaxLine, OrderShippingMethodTaxLineSchema } from './entities/Taxes&Adjustments/order-shipping-method-tax-line.entity';
import { OrderShippingMethodAdjustment, OrderShippingMethodAdjustmentSchema } from './entities/Taxes&Adjustments/order-shipping-method-adjustment.entity';
import { OrderClaimItem, OrderClaimItemSchema } from './entities/Retours&Réclamations/claim-item.entity';
import { OrderClaimItemImage, OrderClaimItemImageSchema } from './entities/Retours&Réclamations/claim-item-image.entity';
import { OrderExchangeItem, OrderExchangeItemSchema } from './entities/exchange-item.entity';
import { OrderCreditLine, OrderCreditLineSchema } from './entities/Transaction/credit-line.entity';
import { OrderTransaction, OrderTransactionSchema } from './entities/Transaction/transaction.entity';
import { OrderAddress, OrderAddressSchema } from './entities/CommandePrincipale/address.entity';
import { PaymentModule } from 'src/payment/payment.module';
import { Cart, CartSchema } from 'src/cart/entities/cart.entity';
import { CartModule } from 'src/cart/cart.module';
import { LineItem, LineItemSchema } from 'src/cart/entities/line-item.entity';
import { StoreModule } from 'src/store/store.module';
import { Payment, PaymentSchema } from 'src/payment/entities/payment.entity';

@Module({
  imports: [
    StoreModule,
    CartModule,
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: OrderItem.name, schema: OrderItemSchema },
      { name: OrderLineItemAdjustment.name, schema: OrderLineItemAdjustmentSchema },
      { name: OrderLineItemTaxLine.name, schema: OrderLineItemTaxLineSchema },
      { name: OrderShippingMethod.name, schema: OrderShippingMethodSchema },
      { name: OrderShippingMethodAdjustment.name, schema: OrderShippingMethodAdjustmentSchema },
      { name: OrderShippingMethodTaxLine.name, schema: OrderShippingMethodTaxLineSchema },
      { name: Return.name, schema: ReturnSchema },
      { name: ReturnReason.name, schema: ReturnReasonSchema },
      { name: OrderClaim.name, schema: OrderClaimSchema },
      { name: OrderClaimItem.name, schema: OrderClaimItemSchema },
      { name: OrderClaimItemImage.name, schema: OrderClaimItemImageSchema }, //  Correct !
      { name: OrderExchangeItem.name, schema: OrderExchangeItemSchema },
      { name: OrderCreditLine.name, schema: OrderCreditLineSchema },
      { name: OrderTransaction.name, schema: OrderTransactionSchema },
      { name: OrderChange.name, schema: OrderChangeSchema },
      { name: OrderChangeAction.name, schema: OrderChangeActionSchema },
      { name: OrderSummary.name, schema: OrderSummarySchema },
      { name: OrderAddress.name, schema: OrderAddressSchema },
      { name: Cart.name, schema: CartSchema },
      { name: LineItem.name, schema: LineItemSchema },
      { name: Payment.name, schema: PaymentSchema },

      
    ]),
    PaymentModule,
  ],
  controllers: [OrderController],
  providers: [OrderService,StoreModule],
  exports: [OrderService, MongooseModule],
}) 
export class OrderModule {}
