// order-credit-line.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from './order.entity';

type OrderCreditLineDocument = OrderCreditLine & Document;

@Schema({
  timestamps: true,
  collection: 'order_credit_lines',
  autoIndex: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `ordcl_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
  id: false, // Désactive le virtual getter 'id' par défaut
})
export class OrderCreditLine {
  @Prop({
    type: Types.ObjectId,
    ref: 'Order',
    required: true,
    index: true,
  })
  order: Types.ObjectId | Order;

  @Prop({
    type: String,
    required: false,
  })
  reference?: string;

  @Prop({
    type: String,
    required: false,
  })
  reference_id?: string;

  @Prop({
    type: Number,
    required: true,
  })
  amount: number;

  @Prop({
    type: Object,
    required: true,
  })
  raw_amount: Record<string, any>;

  @Prop({
    type: Object,
    required: false,
  })
  metadata?: Record<string, any>;

  @Prop({
    type: Date,
    required: false,
    index: true,
  })
  deleted_at?: Date;

  // Déclaration explicite pour TypeScript
  _id: Types.ObjectId;
  id: string;
}

export const OrderCreditLineSchema = SchemaFactory.createForClass(OrderCreditLine);

// Configuration du virtual 'id'
OrderCreditLineSchema.virtual('id').get(function (this: OrderCreditLineDocument) {
  return `ordcl_${this._id.toString()}`;
});

// Configuration des index
OrderCreditLineSchema.index(
  { order: 1 },
  {
    name: 'IDX_order_credit_line_order_id',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);

OrderCreditLineSchema.index(
  { deleted_at: 1 },
  {
    name: 'IDX_order_credit_line_deleted_at',
    partialFilterExpression: { deleted_at: { $ne: null } },
  },
);
/*
// Middleware pour mettre à jour la relation inverse dans Order
OrderCreditLineSchema.post('save', async function (doc: OrderCreditLineDocument) {
  await doc.populate('order');
  if (doc.order) {
    const order = doc.order as Order;
    if (!order.credit_lines.includes(doc._id)) {
      await this.model('Order').updateOne(
        { _id: doc.order._id },
        { $addToSet: { credit_lines: doc._id } },
      );
    }
  }
});*/