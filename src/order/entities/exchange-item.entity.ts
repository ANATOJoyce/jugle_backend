// order-exchange-item.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderExchange } from './exchange.entity';
import { OrderLineItem } from './line-item.entity';

type OrderExchangeItemDocument = OrderExchangeItem & Document;

@Schema({
  timestamps: true,
  collection: 'order_exchange_items',
  autoIndex: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `oexcitem_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
  id: false, // Désactive le virtual getter 'id' par défaut
})
export class OrderExchangeItem {
  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: String, required: false })
  note?: string;

  @Prop({ type: Object, required: false })
  metadata?: Record<string, any>;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderExchange',
    required: true,
    index: true,
  })
  exchange: Types.ObjectId | OrderExchange;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderLineItem',
    required: true,
    index: true,
  })
  item: Types.ObjectId | OrderLineItem;

  @Prop({ type: Date, required: false, index: true })
  deleted_at?: Date;

  // Déclaration explicite pour TypeScript
  _id: Types.ObjectId;
  id: string;
}

export const OrderExchangeItemSchema = SchemaFactory.createForClass(OrderExchangeItem);

// Configuration du virtual 'id'
OrderExchangeItemSchema.virtual('id').get(function (this: OrderExchangeItemDocument) {
  return `oexcitem_${this._id.toString()}`;
});

// Configuration des index
OrderExchangeItemSchema.index(
  { exchange: 1 },
  {
    name: 'IDX_order_exchange_item_exchange_id',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);

OrderExchangeItemSchema.index(
  { item: 1 },
  {
    name: 'IDX_order_exchange_item_item_id',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);

OrderExchangeItemSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_exchange_item_deleted_at',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);
/*

// Middleware pour gérer la relation inverse avec OrderExchange
OrderExchangeItemSchema.post('save', async function (doc: OrderExchangeItemDocument) {
  await doc.populate('exchange');
  if (doc.exchange) {
    const exchange = doc.exchange as OrderExchange;
    if (!exchange.additional_items.includes(doc._id)) {
      await this.model('OrderExchange').updateOne(
        { _id: doc.exchange._id },
        { $addToSet: { additional_items: doc._id } },
      );
    }
  }
});

// Middleware pour gérer la relation inverse avec OrderLineItem
OrderExchangeItemSchema.post('save', async function (doc: OrderExchangeItemDocument) {
  await doc.populate('item');
  if (doc.item) {
    const item = doc.item as OrderLineItem;
    if (!item.exchange_items.includes(doc._id)) {
      await this.model('OrderLineItem').updateOne(
        { _id: doc.item._id },
        { $addToSet: { exchange_items: doc._id } },
      );
    }
  }
});*/