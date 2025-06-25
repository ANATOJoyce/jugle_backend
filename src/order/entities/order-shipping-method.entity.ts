import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from './order.entity';
import { Return } from './return.entity';
import { OrderExchange } from './exchange.entity';
import { OrderClaim } from './claim.entity';
import { OrderShippingMethod } from './shipping-method.entity';

export type OrderShippingDocument = OrderShipping & Document;

@Schema({
  timestamps: true,
  collection: 'order_shippings',
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `ordspmv_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class OrderShipping {
  @Prop({ default: 1 })
  version: number;

  @Prop({
    type: Types.ObjectId,
    ref: 'Order',
    required: true,
  })
  order: Types.ObjectId | Order;

  @Prop({
    type: Types.ObjectId,
    ref: 'Return',
  })
  return?: Types.ObjectId | Return;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderExchange',
  })
  exchange?: Types.ObjectId | OrderExchange;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderClaim',
  })
  claim?: Types.ObjectId | OrderClaim;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderShippingMethod',
    required: true,
  })
  shipping_method: Types.ObjectId | OrderShippingMethod;

  @Prop({ type: Date })
  deleted_at?: Date;
}

export const OrderShippingSchema = SchemaFactory.createForClass(OrderShipping);

// Create indexes
OrderShippingSchema.index(
  { order_id: 1 },
  {
    name: 'IDX_order_shipping_order_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderShippingSchema.index(
  { return_id: 1 },
  {
    name: 'IDX_order_shipping_return_id',
    partialFilterExpression: { return_id: { $exists: true }, deleted_at: { $exists: true } },
  }
);

OrderShippingSchema.index(
  { exchange_id: 1 },
  {
    name: 'IDX_order_shipping_exchange_id',
    partialFilterExpression: { exchange_id: { $exists: true }, deleted_at: { $exists: true } },
  }
);

OrderShippingSchema.index(
  { claim_id: 1 },
  {
    name: 'IDX_order_shipping_claim_id',
    partialFilterExpression: { claim_id: { $exists: true }, deleted_at: { $exists: true } },
  }
);

OrderShippingSchema.index(
  { version: 1 },
  {
    name: 'IDX_order_shipping_version',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderShippingSchema.index(
  { shipping_method_id: 1 },
  {
    name: 'IDX_order_shipping_shipping_method_id',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);

OrderShippingSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_shipping_deleted_at',
    partialFilterExpression: { deleted_at: { $exists: true } },
  }
);
/*
// Relationship management hooks
OrderShippingSchema.post('save', async function(doc: OrderShippingDocument) {
  // Update Order's shipping_methods array
  if (doc.order) {
    await doc.populate('order');
    const order = doc.order as Order;
    if (Array.isArray(order.shipping_methods)) {
      if (!order.shipping_methods.includes(doc._id)) {
        await this.model('Order').updateOne(
          { _id: doc.order._id },
          { $addToSet: { shipping_methods: doc._id } }
        );
      }
    }
  }

  // Update related entities if they exist
  const updatePromises = [];
  
  if (doc.return) {
    updatePromises.push(
      this.model('Return').updateOne(
        { _id: doc.return._id },
        { $addToSet: { shipping_methods: doc._id } }
      )
    );
  }

  if (doc.exchange) {
    updatePromises.push(
      this.model('OrderExchange').updateOne(
        { _id: doc.exchange._id },
        { $addToSet: { shipping_methods: doc._id } }
      )
    );
  }

  if (doc.claim) {
    updatePromises.push(
      this.model('OrderClaim').updateOne(
        { _id: doc.claim._id },
        { $addToSet: { shipping_methods: doc._id } }
      )
    );
  }

  // Update shipping method reference
  if (doc.shipping_method) {
    updatePromises.push(
      this.model('OrderShippingMethod').updateOne(
        { _id: doc.shipping_method._id },
        { $set: { order_shipping: doc._id } }
      )
    );
  }

  await Promise.all(updatePromises);
});

OrderShippingSchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    const updatePromises = [];

    // Remove from Order's shipping_methods
    if (doc.order) {
      updatePromises.push(
        this.model('Order').updateOne(
          { _id: doc.order },
          { $pull: { shipping_methods: doc._id } }
        )
      );
    }

    // Remove from Return's shipping_methods
    if (doc.return) {
      updatePromises.push(
        this.model('Return').updateOne(
          { _id: doc.return },
          { $pull: { shipping_methods: doc._id } }
        )
      );
    }

    // Remove from Exchange's shipping_methods
    if (doc.exchange) {
      updatePromises.push(
        this.model('OrderExchange').updateOne(
          { _id: doc.exchange },
          { $pull: { shipping_methods: doc._id } }
        )
      );
    }

    // Remove from Claim's shipping_methods
    if (doc.claim) {
      updatePromises.push(
        this.model('OrderClaim').updateOne(
          { _id: doc.claim },
          { $pull: { shipping_methods: doc._id } }
        )
      );
    }

    // Remove reference from ShippingMethod
    if (doc.shipping_method) {
      updatePromises.push(
        this.model('OrderShippingMethod').updateOne(
          { _id: doc.shipping_method },
          { $unset: { order_shipping: 1 } }
        )
      );
    }

    await Promise.all(updatePromises);
  }
});

// Soft delete prevention
OrderShippingSchema.pre('findOneAndDelete', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc) {
    doc.deleted_at = new Date();
    await doc.save();
    throw new Error('Use soft delete instead of hard delete');
  }
});*/