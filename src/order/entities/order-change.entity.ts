import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from './order.entity';
import { OrderChangeAction } from './order-change-action.entity';

export enum OrderChangeStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  DECLINED = 'declined',
  CANCELED = 'canceled',
}

export type OrderChangeDocument = OrderChange & Document;

@Schema({
  timestamps: true,
  collection: 'order_changes',
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `ordch_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class OrderChange {
  @Prop({ type: String })
  return_id?: string;

  @Prop({ type: String })
  claim_id?: string;

  @Prop({ type: String })
  exchange_id?: string;

  @Prop({ required: true })
  version: number;

  @Prop({ type: String })
  change_type?: string;

  @Prop({ type: String })
  description?: string;

  @Prop({
    type: String,
    enum: OrderChangeStatus,
    default: OrderChangeStatus.PENDING,
  })
  status: OrderChangeStatus;

  @Prop({ type: String })
  internal_note?: string;

  @Prop({ type: String })
  created_by?: string;

  @Prop({ type: String })
  requested_by?: string;

  @Prop({ type: Date })
  requested_at?: Date;

  @Prop({ type: String })
  confirmed_by?: string;

  @Prop({ type: Date })
  confirmed_at?: Date;

  @Prop({ type: String })
  declined_by?: string;

  @Prop({ type: String })
  declined_reason?: string;

  @Prop({ type: Object })
  metadata?: Record<string, unknown>;

  @Prop({ type: Date })
  declined_at?: Date;

  @Prop({ type: String })
  canceled_by?: string;

  @Prop({ type: Date })
  canceled_at?: Date;

  @Prop({
    type: Types.ObjectId,
    ref: 'Order',
    required: true,
  })
  order: Types.ObjectId | Order;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'OrderChangeAction' }],
    default: [],
  })
  actions: Types.ObjectId[] | OrderChangeAction[];

  @Prop({ type: Date })
  deleted_at?: Date;
}

export const OrderChangeSchema = SchemaFactory.createForClass(OrderChange);

// Create indexes
OrderChangeSchema.index(
  { order_id: 1 },
  {
    name: 'IDX_order_change_order_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderChangeSchema.index(
  { return_id: 1 },
  {
    name: 'IDX_order_change_return_id',
    partialFilterExpression: { return_id: { $exists: true }, deleted_at: { $exists: true } },
  }
);

OrderChangeSchema.index(
  { claim_id: 1 },
  {
    name: 'IDX_order_change_claim_id',
    partialFilterExpression: { claim_id: { $exists: true }, deleted_at: { $exists: true } },
  }
);

OrderChangeSchema.index(
  { exchange_id: 1 },
  {
    name: 'IDX_order_change_exchange_id',
    partialFilterExpression: { exchange_id: { $exists: true }, deleted_at: { $exists: true } },
  }
);

OrderChangeSchema.index(
  { status: 1 },
  {
    name: 'IDX_order_change_status',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderChangeSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_change_deleted_at',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderChangeSchema.index(
  { order_id: 1, version: 1 },
  {
    name: 'IDX_order_change_version',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);/*

// Cascade delete for actions
OrderChangeSchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    await this.model('OrderChangeAction').deleteMany({ order_change: doc._id });
  }
});*/

// Soft delete prevention
OrderChangeSchema.pre('findOneAndDelete', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    doc.deleted_at = new Date();
    await doc.save();
    throw new Error('Use soft delete instead of hard delete');
  }
});
/*
// Relationship management
OrderChangeSchema.post('save', async function(doc: OrderChangeDocument) {
  if (doc.order) {
    await doc.populate('order');
    const order = doc.order as Order;
    if (Array.isArray(order.changes)) {
      if (!order.changes.includes(doc._id)) {
        await this.model('Order').updateOne(
          { _id: doc.order._id },
          { $addToSet: { changes: doc._id } }
        );
      }
    }
  }
});

OrderChangeSchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc?.order) {
    await this.model('Order').updateOne(
      { _id: doc.order },
      { $pull: { changes: doc._id } }
    );
  }
});*/