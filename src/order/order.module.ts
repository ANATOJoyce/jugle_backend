import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Order, OrderSchema } from './entities/order.entity';
import { OrderItem, OrderItemSchema } from './entities/order-item.entity';
import { OrderLineItemAdjustment, OrderLineItemAdjustmentSchema } from './entities/line-item-adjustment.entity';
import { Return, ReturnSchema } from './entities/return.entity';
import { ReturnReason, ReturnReasonSchema } from './entities/return-reason.entity';
import { OrderClaim, OrderClaimSchema } from './entities/claim.entity';

import { OrderChange, OrderChangeSchema } from './entities/order-change.entity';
import { OrderChangeAction, OrderChangeActionSchema } from './entities/order-change-action.entity';
import { OrderSummary, OrderSummarySchema } from './entities/order-summary.entity';


import { OrderController } from './order.controller';
import { OrderService } from './order.service';

import { OrderLineItemTaxLine, OrderLineItemTaxLineSchema } from './entities/line-item-tax-line.entity';
import { OrderShippingMethod, OrderShippingMethodSchema } from './entities/order-shipping-method.entity';
import { OrderShippingMethodTaxLine, OrderShippingMethodTaxLineSchema } from './entities/order-shipping-method-tax-line.entity';
import { OrderShippingMethodAdjustment, OrderShippingMethodAdjustmentSchema } from './entities/order-shipping-method-adjustment.entity';
import { OrderClaimItem, OrderClaimItemSchema } from './entities/claim-item.entity';
import { OrderClaimItemImage, OrderClaimItemImageSchema } from './entities/claim-item-image.entity';
import { OrderExchangeItem, OrderExchangeItemSchema } from './entities/exchange-item.entity';
import { OrderCreditLine, OrderCreditLineSchema } from './entities/credit-line.entity';
import { OrderTransaction, OrderTransactionSchema } from './entities/transaction.entity';
import { OrderAddress, OrderAddressSchema } from './entities/address.entity';

@Module({
  imports: [
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
      { name: OrderClaimItemImage.name, schema: OrderClaimItemImageSchema }, // ✅ Correct !
      { name: OrderChange.name, schema: OrderChangeSchema },
      { name: OrderExchangeItem.name, schema: OrderExchangeItemSchema },
      { name: OrderCreditLine.name, schema: OrderCreditLineSchema },
      { name: OrderTransaction.name, schema: OrderTransactionSchema },
      { name: OrderChange.name, schema: OrderChangeSchema },
      { name: OrderChangeAction.name, schema: OrderChangeActionSchema },
      { name: OrderSummary.name, schema: OrderSummarySchema },
      { name: OrderAddress.name, schema: OrderAddressSchema },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}
