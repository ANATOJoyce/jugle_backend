// order-change-action.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderChange } from './order-change.entity';

export type OrderChangeActionDocument = OrderChangeAction & Document;

@Schema({
  timestamps: true, // Adds createdAt and updatedAt fields
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class OrderChangeAction {
  @Prop({ type: Types.ObjectId, ref: 'Order', required: true })
  order_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Return' })
  return_id?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Claim' })
  claim_id?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Exchange' })
  exchange_id?: Types.ObjectId;

  @Prop({ required: true })
  ordering: number;

  @Prop()
  version?: number;

  @Prop()
  reference?: string;

  @Prop()
  reference_id?: string;

  @Prop({ required: true })
  action: string;

  @Prop({ type: Object, default: {} })
  details: Record<string, any>;

  @Prop()
  amount?: number;

  @Prop()
  internal_note?: string;

  @Prop({ default: false })
  applied: boolean;

  @Prop({ type: Types.ObjectId, ref: 'OrderChange' })
  order_change?: Types.ObjectId | OrderChange;

  // Soft delete support
  @Prop()
  deletedAt?: Date;
}

export const OrderChangeActionSchema = SchemaFactory.createForClass(OrderChangeAction);

// Add indexes
OrderChangeActionSchema.index({ order_change_id: 1 }, { 
  name: 'IDX_order_change_action_order_change_id',
  partialFilterExpression: { deletedAt: { $exists: true } }
});

OrderChangeActionSchema.index({ order_id: 1 }, { 
  name: 'IDX_order_change_action_order_id',
  partialFilterExpression: { deletedAt: { $exists: true } }
});

OrderChangeActionSchema.index({ return_id: 1 }, { 
  name: 'IDX_order_change_action_return_id',
  partialFilterExpression: { return_id: { $exists: true }, deletedAt: { $exists: true } }
});

OrderChangeActionSchema.index({ claim_id: 1 }, { 
  name: 'IDX_order_change_action_claim_id',
  partialFilterExpression: { claim_id: { $exists: true }, deletedAt: { $exists: true } }
});

OrderChangeActionSchema.index({ exchange_id: 1 }, { 
  name: 'IDX_order_change_action_exchange_id',
  partialFilterExpression: { exchange_id: { $exists: true }, deletedAt: { $exists: true } }
});

OrderChangeActionSchema.index({ deletedAt: 1 }, { 
  name: 'IDX_order_change_action_deleted_at',
  partialFilterExpression: { deletedAt: { $exists: true } }
});

OrderChangeActionSchema.index({ ordering: 1 }, { 
  name: 'IDX_order_change_action_ordering',
  partialFilterExpression: { deletedAt: { $exists: true } }
});