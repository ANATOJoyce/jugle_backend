import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderLineItem } from './line-item.entity';

@Schema({
  timestamps: true,
  collection: 'order_line_item_tax_lines',
  autoIndex: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = `ordlitxl_${doc._id.toString()}`; // Transformation pour l'API
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  }
})
export class OrderLineItemTaxLine extends Document {
  @Prop({ type: String, default: null })
  description: string | null;

  @Prop({ type: String, default: null })
  tax_rate_id: string | null;

  @Prop({ type: String, required: true })
  code: string;

  @Prop({ type: String, required: true }) // bigNumber comme string
  rate: string;

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

  // Pas besoin de déclarer _id ou id, gérés automatiquement
}

export const OrderLineItemTaxLineSchema = SchemaFactory.createForClass(OrderLineItemTaxLine);

// Index personnalisé (identique à l'original)
OrderLineItemTaxLineSchema.index(
  { item: 1 },
  { name: 'IDX_order_line_item_tax_line_item_id' }
);
/*
// Middleware pour relation inverse
OrderLineItemTaxLineSchema.post('save', async function(doc) {
  if (doc.item) {
    await doc.populate('item');
    const item = doc.item as OrderLineItem;
    if (!item.tax_lines.includes(doc._id)) {
      await this.model('OrderLineItem').updateOne(
        { _id: doc.item._id },
        { $addToSet: { tax_lines: doc._id } }
      );
    }
  }
});
/*
// Middleware pour nettoyage des relations
OrderLineItemTaxLineSchema.pre('deleteOne', async function() {
  const doc = await this.model.findOne(this.getFilter());
  if (doc?.item) {
    await this.model('OrderLineItem').updateOne(
      { _id: doc.item },
      { $pull: { tax_lines: doc._id } }
    );
  }
});*/