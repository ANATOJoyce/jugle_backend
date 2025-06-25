import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderLineItem } from './line-item.entity';

@Schema({
  timestamps: true,
  collection: 'order_line_item_adjustments',
  autoIndex: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = `ordliadj_${doc._id.toString()}`;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  }
})
export class OrderLineItemAdjustment extends Document {
  @Prop({ type: String, default: null })
  description: string | null;

  @Prop({ type: String, default: null })
  promotion_id: string | null;

  @Prop({ type: String, default: null })
  code: string | null;

  @Prop({ type: String, required: true })
  amount: string;

  @Prop({ type: String, default: null })
  provider_id: string | null;

  @Prop({
    type: Types.ObjectId,
    ref: 'OrderLineItem',
    required: true,
    index: true
  })
  item: Types.ObjectId | OrderLineItem;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const OrderLineItemAdjustmentSchema = SchemaFactory.createForClass(OrderLineItemAdjustment);

// Configuration des index
OrderLineItemAdjustmentSchema.index(
  { item: 1 },
  { name: 'IDX_order_order_line_item_adjustment_item_id' }
);
/*
// Middleware pour relation inverse
OrderLineItemAdjustmentSchema.post('save', async function(doc) {
  if (doc.item) {
    await doc.populate('item');
    const item = doc.item as OrderLineItem;
    if (!item.adjustments.includes(doc._id)) {
      await this.model('OrderLineItem').updateOne(
        { _id: doc.item._id },
        { $addToSet: { adjustments: doc._id } }
      );
    }
  }
});

// Middleware pour nettoyage des relations
OrderLineItemAdjustmentSchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc?.item) {
    await this.model('OrderLineItem').updateOne(
      { _id: doc.item },
      { $pull: { adjustments: doc._id } }
    );
  }
});*/