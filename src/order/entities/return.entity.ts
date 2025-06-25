import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Order } from './order.entity';
import { OrderExchange } from './exchange.entity';
import { OrderClaim } from './claim.entity';
import { ReturnItem } from './return-item.entity';
import { OrderShipping } from './order-shipping-method.entity';
import { OrderTransaction } from './transaction.entity';

export enum ReturnStatus {
  OPEN = 'open',
  REQUESTED = 'requested',
  RECEIVED = 'received',
  CANCELED = 'canceled',
  REQUIRES_ACTION = 'requires_action',
}

@Schema({ timestamps: true })
export class Return extends Document {
  @Prop({ type: Number, required: true })
  order_version: number;

  @Prop({ type: Number, unique: true })
  display_id: number;

  @Prop({ 
    type: String, 
    enum: Object.values(ReturnStatus),
    default: ReturnStatus.OPEN 
  })
  status: ReturnStatus;

  @Prop({ type: SchemaTypes.ObjectId })
  location_id: Types.ObjectId;

  @Prop({ type: Boolean, default: null })
  no_notification: boolean | null;

  @Prop({ type: Number, default: null })
  refund_amount: number | null;

  @Prop({ type: String, default: null })
  created_by: string | null;

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  @Prop({ type: Date, default: null })
  requested_at: Date | null;

  @Prop({ type: Date, default: null })
  received_at: Date | null;

  @Prop({ type: Date, default: null })
  canceled_at: Date | null;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Order', required: true })
  order: Order | Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'OrderExchange', default: null })
  exchange: OrderExchange | Types.ObjectId | null;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'OrderClaim', default: null })
  claim: OrderClaim | Types.ObjectId | null;

  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'ReturnItem' }] })
  items: ReturnItem[] | Types.ObjectId[];

  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'OrderShipping' }] })
  shipping_methods: OrderShipping[] | Types.ObjectId[];

  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'OrderTransaction' }] })
  transactions: OrderTransaction[] | Types.ObjectId[];

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const ReturnSchema = SchemaFactory.createForClass(Return);

// Indexes
ReturnSchema.index({ display_id: 1 }, { 
  name: 'IDX_return_display_id',
  partialFilterExpression: { deleted_at: { $ne: null } }
});

ReturnSchema.index({ deleted_at: 1 }, { 
  name: 'IDX_return_deleted_at',
  partialFilterExpression: { deleted_at: { $ne: null } }
});

ReturnSchema.index({ order: 1 }, { 
  name: 'IDX_return_order_id',
  partialFilterExpression: { deleted_at: { $ne: null } }
});

ReturnSchema.index({ exchange: 1 }, { 
  name: 'IDX_return_exchange_id',
  partialFilterExpression: { 
    exchange: { $ne: null },
    deleted_at: { $ne: null } 
  }
});

ReturnSchema.index({ claim: 1 }, { 
  name: 'IDX_return_claim_id',
  partialFilterExpression: { 
    claim: { $ne: null },
    deleted_at: { $ne: null } 
  }
});