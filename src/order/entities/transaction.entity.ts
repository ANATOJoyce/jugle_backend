import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Order } from './order.entity';
import { Return } from './return.entity';
import { OrderExchange } from './exchange.entity';
import { OrderClaim } from './claim.entity';

@Schema({ collection: 'order_transactions', timestamps: true })
export class OrderTransaction extends Document {
  @Prop({ type: Number, default: 1 })
  version: number;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  currency_code: string;

  @Prop({ type: String, default: null })
  reference: string | null;

  @Prop({ type: String, default: null })
  reference_id: string | null;

  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: 'Order',
    required: true 
  })
  order: Order | Types.ObjectId;

  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: 'Return',
    default: null 
  })
  return: Return | Types.ObjectId | null;

  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: 'OrderExchange',
    default: null 
  })
  exchange: OrderExchange | Types.ObjectId | null;

  @Prop({ 
    type: SchemaTypes.ObjectId, 
    ref: 'OrderClaim',
    default: null 
  })
  claim: OrderClaim | Types.ObjectId | null;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const OrderTransactionSchema = SchemaFactory.createForClass(OrderTransaction);

// Indexes
OrderTransactionSchema.index(
  { reference_id: 1 },
  { 
    name: 'IDX_order_transaction_reference_id',
    partialFilterExpression: { deleted_at: { $ne: null } }}
);

OrderTransactionSchema.index(
  { order: 1 },
  { 
    name: 'IDX_order_transaction_order_id',
    partialFilterExpression: { deleted_at: { $ne: null } }}
);

OrderTransactionSchema.index(
  { return: 1 },
  { 
    name: 'IDX_order_transaction_return_id',
    partialFilterExpression: { 
      return: { $ne: null },
      deleted_at: { $ne: null } 
    }}
);

OrderTransactionSchema.index(
  { exchange: 1 },
  { 
    name: 'IDX_order_transaction_exchange_id',
    partialFilterExpression: { 
      exchange: { $ne: null },
      deleted_at: { $ne: null } }
    }
);

OrderTransactionSchema.index(
  { claim: 1 },
  { 
    name: 'IDX_order_transaction_claim_id',
    partialFilterExpression: { 
      claim: { $ne: null },
      deleted_at: { $ne: null } 
    }}
);

OrderTransactionSchema.index(
  { currency_code: 1 },
  { 
    name: 'IDX_order_transaction_currency_code',
    partialFilterExpression: { deleted_at: { $ne: null } }}
);

OrderTransactionSchema.index(
  { deleted_at: 1 },
  { 
    name: 'IDX_order_transaction_deleted_at',
    partialFilterExpression: { deleted_at: { $ne: null } }}
);

OrderTransactionSchema.index(
  { order: 1, version: 1 },
  { 
    name: 'IDX_order_transaction_order_id_version',
    partialFilterExpression: { deleted_at: { $ne: null } }}
);

// Soft delete middleware
OrderTransactionSchema.pre('find', function() {
  this.where({ deleted_at: null });
});

OrderTransactionSchema.pre('findOne', function() {
  this.where({ deleted_at: null });
});