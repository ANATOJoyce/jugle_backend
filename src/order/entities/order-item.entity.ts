import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from './order.entity';
import { OrderLineItem } from './line-item.entity';

export type OrderItemDocument = OrderItem & Document;

@Schema({
  timestamps: true,
  collection: 'order_items',
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `orditem_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class OrderItem {
  @Prop({ default: 1 })
  version: number;

  @Prop({ type: String })
  unit_price?: string;

  @Prop({ type: String })
  compare_at_unit_price?: string;

  @Prop({ type: String, required: true }) 
  quantity: string;

  @Prop({ type: String, default: '0' }) 
  fulfilled_quantity: string;

  @Prop({ type: String, default: '0' }) 
  delivered_quantity: string;

  @Prop({ type: String, default: '0' }) 
  shipped_quantity: string;

  @Prop({ type: String, default: '0' }) 
  return_requested_quantity: string;

  @Prop({ type: String, default: '0' })
  return_received_quantity: string;

  @Prop({ type: String, default: '0' })
  return_dismissed_quantity: string;

  @Prop({ type: String, default: '0' }) 
  written_off_quantity: string;

  @Prop({ type: Object })
  metadata?: Record<string, unknown>;

  @Prop({
    type: Types.ObjectId,
    ref: 'Order',
    required: true,
  })
  order: Types.ObjectId | Order;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderLineItem',
    required: true,
  })
  item: Types.ObjectId | OrderLineItem;

  @Prop({ type: Date })
  deleted_at?: Date;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

// Create indexes
OrderItemSchema.index(
  { order_id: 1 },
  {
    name: 'IDX_order_item_order_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderItemSchema.index(
  { version: 1 },
  {
    name: 'IDX_order_item_version',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderItemSchema.index(
  { item_id: 1 },
  {
    name: 'IDX_order_item_item_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderItemSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_item_deleted_at',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);
/*
// Relationship management
OrderItemSchema.post('save', async function(doc: OrderItemDocument) {
  // Update Order's items array
  if (doc.order) {
    await doc.populate('order');
    const order = doc.order as Order;
    if (Array.isArray(order.items)) {
      if (!order.items.includes(doc._id)) {
        await this.model('Order').updateOne(
          { _id: doc.order._id },
          { $addToSet: { items: doc._id } }
        );
      }
    }
  }

  // Update OrderLineItem's reference
  if (doc.item) {
    await this.model('OrderLineItem').updateOne(
      { _id: doc.item._id },
      { $set: { order_item: doc._id } }
    );
  }
});

OrderItemSchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    // Remove from Order's items array
    if (doc.order) {
      await this.model('Order').updateOne(
        { _id: doc.order },
        { $pull: { items: doc._id } }
      );
    }

    // Remove reference from OrderLineItem
    if (doc.item) {
      await this.model('OrderLineItem').updateOne(
        { _id: doc.item },
        { $unset: { order_item: 1 } }
      );
    }
  }
});

// Soft delete prevention
OrderItemSchema.pre('findOneAndDelete', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    doc.deleted_at = new Date();
    await doc.save();
    throw new Error('Use soft delete instead of hard delete');
  }
});*/