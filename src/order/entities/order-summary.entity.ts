// order-summary.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from './order.entity';

export type OrderSummaryDocument = OrderSummary & Document;

@Schema({
  timestamps: true,
  collection: 'order_summaries',
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `ordsum_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class OrderSummary {
  @Prop({ default: 1 })
  version: number;

  @Prop({ type: Object, required: true })
  totals: Record<string, unknown>;

  @Prop({
    type: Types.ObjectId,
    ref: 'Order',
    required: true,
    unique: true, // Since it's a one-to-one relationship
  })
  order: Types.ObjectId | Order;

  @Prop({ type: Date })
  deleted_at?: Date;
}

export const OrderSummarySchema = SchemaFactory.createForClass(OrderSummary);

// Create indexes
OrderSummarySchema.index(
  { order_id: 1, version: 1 },
  {
    name: 'IDX_order_summary_order_id_version',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderSummarySchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_summary_deleted_at',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);
/*
// Relationship management
OrderSummarySchema.post('save', async function(doc: OrderSummaryDocument) {
  if (doc.order) {
    await this.model('Order').updateOne(
      { _id: doc.order._id },
      { $set: { summary: doc._id } }
    );
  }
});
/*

OrderSummarySchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc?.order) {
    await this.model('Order').updateOne(
      { _id: doc.order },
      { $unset: { summary: 1 } }
    );
  }
});

// Soft delete prevention
OrderSummarySchema.pre('findOneAndDelete', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    doc.deleted_at = new Date();
    await doc.save();
    throw new Error('Use soft delete instead of hard delete');
  }
});*/