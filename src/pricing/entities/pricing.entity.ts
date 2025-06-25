import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PriceSet } from './price-set.entity';
import { PriceRule } from './price-rule.entity';
import { PriceList } from './price-list.entity';

@Schema({ timestamps: true })
export class Price extends Document {
  @Prop({ type: String })
  title: string;

  @Prop({ type: String, required: true })
  currency_code: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: Number })
  min_quantity: number;

  @Prop({ type: Number })
  max_quantity: number;

  @Prop({ type: Number, default: 0 })
  rules_count: number;

  @Prop({ type: Types.ObjectId, ref: 'PriceSet', required: true })
  price_set: PriceSet;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'PriceRule' }] })
  price_rules: PriceRule[];

  @Prop({ type: Types.ObjectId, ref: 'PriceList' })
  price_list: PriceList;

  @Prop({ type: Date })
  deleted_at: Date;
}

export const PriceSchema = SchemaFactory.createForClass(Price);

// Implement cascading delete for price rules
PriceSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
  const price = this;
  
  // Delete all related price rules
  await price.model('PriceRule').deleteMany({ price: price._id });
  
  next();
});

// Create indexes
PriceSchema.index(
  { price_set: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_price_price_set_id'
  }
);

PriceSchema.index(
  { price_list: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_price_price_list_id'
  }
);

PriceSchema.index(
  { currency_code: 1 },
  { 
    partialFilterExpression: { deleted_at: { $eq: null } },
    name: 'IDX_price_currency_code'
  }
);

// Soft delete implementation
PriceSchema.methods.softDelete = function() {
  this.deleted_at = new Date();
  return this.save();
};
/*
// Query helper for non-deleted documents
PriceSchema.query.notDeleted = function() {
  return this.where({ deleted_at: null });
};
*/