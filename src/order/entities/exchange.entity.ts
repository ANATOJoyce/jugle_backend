import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from './order.entity';
import { OrderExchangeItem } from './exchange-item.entity';
import { OrderShipping } from './order-shipping-method.entity';
import { Return } from './return.entity';
import { OrderTransaction } from './transaction.entity';

export type OrderExchangeDocument = OrderExchange & Document;

@Schema({
  timestamps: true,
  collection: 'order_exchanges',
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `oexc_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
  toObject: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `oexc_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class OrderExchange {
  @Prop({ type: Number, required: true })
  order_version: number;

  @Prop({ type: Number, unique: true })
  display_id: number;

  @Prop({ type: Boolean, default: null })
  no_notification: boolean | null;

  @Prop({ type: Number, default: null })
  difference_due: number | null;

  @Prop({ type: Boolean, default: false })
  allow_backorder: boolean;

  @Prop({ type: String, default: null })
  created_by: string | null;

  @Prop({ type: Object, default: null })
  metadata: Record<string, any> | null;

  @Prop({ type: Date, default: null })
  canceled_at: Date | null;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;

  // Relations
  @Prop({
    type: Types.ObjectId,
    ref: 'Order',
    required: true,
    index: true,
  })
  order: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Return',
    default: null,
    index: true,
  })
  return: Types.ObjectId | null;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'OrderExchangeItem' }],
    default: [],
  })
  additional_items: Types.ObjectId[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'OrderShipping' }],
    default: [],
  })
  shipping_methods: Types.ObjectId[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'OrderTransaction' }],
    default: [],
  })
  transactions: Types.ObjectId[];

  // Virtual ID with prefix
  id: string;
}
/*

export const OrderExchangeSchema = SchemaFactory.createForClass(OrderExchange);

// Virtual ID getter
OrderExchangeSchema.virtual('id').get(function (this: OrderExchangeDocument) {
  return `oexc_${this._id.toString()}`;
});

// Indexes
OrderExchangeSchema.index(
  { display_id: 1 },
  {
    name: 'IDX_order_exchange_display_id',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);

OrderExchangeSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_exchange_deleted_at',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);

OrderExchangeSchema.index(
  { order: 1 },
  {
    name: 'IDX_order_exchange_order_id',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);

OrderExchangeSchema.index(
  { return: 1 },
  {
    name: 'IDX_order_exchange_return_id',
    partialFilterExpression: {
      return: { $ne: null },
      deleted_at: { $ne: null },
    },
  },
);

// Cascade delete middleware
OrderExchangeSchema.pre<OrderExchangeDocument>(
  'deleteOne',
  { document: true, query: false },
  async function (next) {
    const exchangeId = this._id;

    await Promise.all([
      this.model('OrderExchangeItem').deleteMany({ exchange: exchangeId }),
      this.model('OrderTransaction').deleteMany({ exchange: exchangeId }),
      this.model('OrderShipping').deleteMany({ exchange: exchangeId }),
    ]);

    next();
  },
);

// Update Order's exchanges array when new exchange is created
OrderExchangeSchema.post<OrderExchangeDocument>('save', async function (doc) {
  await this.model('Order').updateOne(
    { _id: doc.order },
    { $addToSet: { exchanges: doc._id } },
  );
});

// Update Return's exchange reference when set
OrderExchangeSchema.post<OrderExchangeDocument>(
  'save',
  async function (doc) {
    if (doc.return) {
      await this.model('Return').updateOne(
        { _id: doc.return },
        { $set: { exchange: doc._id } },
      );
    }
  },
);

// Soft delete filter
OrderExchangeSchema.pre<OrderExchangeDocument>(['find', 'findOne'], function () {
  this.where({ deleted_at: null });
});*/